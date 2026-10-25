"""
NagrikAI - Citizen User Models
"""
from typing import Optional
from pydantic import BaseModel, Field

class CitizenSignup(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: str = Field(..., min_length=5, max_length=150)
    password: str = Field(..., min_length=6)
    phone: Optional[str] = None
    state: Optional[str] = "Karnataka"
    preferred_language: Optional[str] = "en"

class CitizenLogin(BaseModel):
    email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user_id: str
    name: str
    email: str
    preferred_language: str

class UserProfile(BaseModel):
    id: str
    name: str
    email: str
    phone: Optional[str] = None
    state: Optional[str] = "Karnataka"
    preferred_language: str = "en"
