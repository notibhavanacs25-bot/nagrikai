"""
NagrikAI - Multilingual Voice Assistant Router (/api/v1/voice)
"""
from fastapi import APIRouter
from pydantic import BaseModel
from backend.app.services.gemini_service import gemini_service

router = APIRouter(prefix="/voice", tags=["Voice Assistant"])

class VoiceQuestionRequest(BaseModel):
    question: str
    language: str = "en"  # en, hi, kn, te, ta

class VoiceQuestionResponse(BaseModel):
    question: str
    language: str
    answer: str
    audio_tts_url: str = None

@router.post("/ask", response_model=VoiceQuestionResponse)
async def ask_voice_question(payload: VoiceQuestionRequest):
    """
    Answers citizen voice queries in their chosen regional language.
    """
    answer = await gemini_service.answer_citizen_voice_question(
        payload.question,
        target_lang=payload.language
    )

    return VoiceQuestionResponse(
        question=payload.question,
        language=payload.language,
        answer=answer
    )
