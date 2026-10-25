"""
NagrikAI - OCR & Document Parsing Service
Extracts text from PDF documents (PyMuPDF) and images/scans (Tesseract / PIL)
"""
import io
import logging
from typing import Tuple

try:
    import fitz  # PyMuPDF
except ImportError:
    fitz = None

try:
    import pytesseract
    from PIL import Image
except ImportError:
    pytesseract = None
    Image = None

logger = logging.getLogger("nagrikai.ocr")

class OCRService:
    @staticmethod
    def extract_text_from_pdf(pdf_bytes: bytes) -> Tuple[str, int]:
        """
        Extracts textual content from PDF bytes using PyMuPDF.
        If pages contain scanned images without embedded text, falls back to OCR per page.
        """
        if not fitz:
            return "PyMuPDF not installed on server.", 0

        doc = fitz.open(stream=pdf_bytes, filetype="pdf")
        page_count = len(doc)
        full_text = []

        for page_num in range(page_count):
            page = doc[page_num]
            text = page.get_text()

            # If page text is very short (e.g. scanned document or photo in PDF)
            if len(text.strip()) < 40 and pytesseract and Image:
                try:
                    pix = page.get_pixmap(dpi=200)
                    img = Image.open(io.BytesIO(pix.tobytes("png")))
                    ocr_text = pytesseract.image_to_string(img)
                    if ocr_text.strip():
                        text = ocr_text
                except Exception as ocr_err:
                    logger.debug(f"Page {page_num} OCR fallback failed: {ocr_err}")

            full_text.append(f"--- Page {page_num + 1} ---\n{text}")

        return "\n\n".join(full_text), page_count

    @staticmethod
    def extract_text_from_image(image_bytes: bytes) -> str:
        """
        Extracts textual content from image bytes using PIL & pytesseract.
        """
        if not pytesseract or not Image:
            return "OCR packages not available."

        try:
            img = Image.open(io.BytesIO(image_bytes))
            text = pytesseract.image_to_string(img)
            return text.strip()
        except pytesseract.TesseractNotFoundError:
            logger.warning("Tesseract binary not found in system PATH. Install Tesseract-OCR for scanned images.")
            return "Tesseract binary not found on host system."
        except Exception as e:
            logger.error(f"Image OCR error: {e}")
            return f"Error extracting text from image: {str(e)}"

    @classmethod
    def process_document(cls, filename: str, file_bytes: bytes) -> Tuple[str, str, int]:
        """
        High-level dispatcher based on file extension.
        Returns (extracted_text, file_type, page_count)
        """
        lower = filename.lower()
        if lower.endswith(".pdf"):
            text, pages = cls.extract_text_from_pdf(file_bytes)
            return text, "pdf", pages
        elif any(lower.endswith(ext) for ext in [".png", ".jpg", ".jpeg", ".webp", ".bmp", ".tiff"]):
            text = cls.extract_text_from_image(file_bytes)
            return text, "image", 1
        else:
            try:
                # Attempt plain text decoding
                return file_bytes.decode("utf-8", errors="ignore"), "text", 1
            except Exception:
                return "Unsupported document format.", "unknown", 0

ocr_service = OCRService()
