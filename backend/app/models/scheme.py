"""
NagrikAI - Welfare Scheme Models
"""
from typing import List, Optional
from pydantic import BaseModel

class SchemeFilterQuery(BaseModel):
    state: Optional[str] = "All"
    age: Optional[int] = None
    gender: Optional[str] = "All"
    occupation: Optional[str] = "all"
    income: Optional[int] = None

class SchemeDetail(BaseModel):
    id: str
    name: str
    department: str
    level: str
    state: str
    benefit: str
    benefit_desc: str
    category: str
    gender: str
    min_age: int
    max_age: int
    max_income: int
    tags: List[str]
    eligibility: List[str]
    documents: List[str]
    process: List[str]
    deadline: str
    official_url: str
