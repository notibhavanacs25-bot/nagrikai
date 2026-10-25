"""
NagrikAI - Document Simplifier Router (/api/v1/documents)
"""
import uuid
import datetime
from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Query
from typing import Optional, List
from backend.app.services.ocr_service import ocr_service
from backend.app.services.gemini_service import gemini_service
from backend.app.models.document import DocumentAnalysisResponse
from backend.app.database import get_database, IN_MEMORY_DB

router = APIRouter(prefix="/documents", tags=["Document Simplification"])

@router.post("/analyze", response_model=DocumentAnalysisResponse)
async def analyze_document(
    file: UploadFile = File(...),
    lang: str = Form("en")
):
    """
    Receives an uploaded official document (PDF, PNG, JPG),
    performs text extraction / OCR, runs Gemini AI simplification,
    and returns a structured citizen explanation.
    """
    try:
        content_bytes = await file.read()
        if not content_bytes:
            raise HTTPException(status_code=400, detail="Uploaded file is empty.")

        # Step 1: Extract Text via PyMuPDF or Tesseract OCR
        extracted_text, file_type, pages = ocr_service.process_document(file.filename, content_bytes)

        # Step 2: AI Simplification via Gemini
        analysis = await gemini_service.simplify_document(extracted_text, target_lang=lang)

        doc_id = str(uuid.uuid4())
        doc_record = {
            "_id": doc_id,
            "filename": file.filename,
            "file_type": file_type,
            "pages": pages,
            "extracted_text_preview": extracted_text[:300] + "..." if len(extracted_text) > 300 else extracted_text,
            "analysis": analysis,
            "created_at": datetime.datetime.now(datetime.timezone.utc)
        }

        # Step 3: Save to MongoDB
        db = get_database()
        if db is not None:
            await db.documents.insert_one(doc_record)
        else:
            IN_MEMORY_DB["documents"].append(doc_record)

        return DocumentAnalysisResponse(
            document_id=doc_id,
            filename=file.filename,
            document_type=analysis.get("document_type", "Official Notice"),
            issuing_authority=analysis.get("issuing_authority", "Government Department"),
            reference_number=analysis.get("reference_number", "N/A"),
            issue_date=analysis.get("issue_date", "N/A"),
            due_date=analysis.get("due_date", "Action Required"),
            amount_due=analysis.get("amount_due", "Nil"),
            days_left=analysis.get("days_left", 15),
            status=analysis.get("status", "Active"),
            plain_summary=analysis.get("plain_summary", ""),
            why_received=analysis.get("why_received", ""),
            steps=analysis.get("steps", []),
            required_documents=analysis.get("required_documents", []),
            jargon_buster=analysis.get("jargon_buster", []),
            verification_portal_name=analysis.get("verification_portal_name", "Official Portal"),
            verification_url=analysis.get("verification_url", "https://www.india.gov.in/"),
            extracted_text_preview=extracted_text[:200]
        )

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to process document: {str(e)}")

@router.get("/history", response_model=List[dict])
async def get_document_history():
    """
    Retrieves previously analyzed documents from MongoDB.
    """
    db = get_database()
    if db is not None:
        cursor = db.documents.find().sort("created_at", -1).limit(20)
        docs = await cursor.to_list(length=20)
        for d in docs:
            d["_id"] = str(d["_id"])
        return docs
    else:
        return IN_MEMORY_DB["documents"][-20:]
