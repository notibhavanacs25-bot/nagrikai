"""
NagrikAI - Document Models
"""
from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field

class StepAction(BaseModel):
    title: str
    desc: str

class JargonItem(BaseModel):
    term: str
    meaning: str

class DocumentAnalysisResponse(BaseModel):
    document_id: str
    filename: str
    document_type: str
    issuing_authority: str
    reference_number: str
    issue_date: str
    due_date: str
    amount_due: str
    days_left: int
    status: str
    plain_summary: str
    why_received: str
    steps: List[StepAction]
    required_documents: List[str]
    jargon_buster: List[JargonItem]
    verification_portal_name: str
    verification_url: str
    extracted_text_preview: Optional[str] = None
