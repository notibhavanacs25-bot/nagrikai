"""
NagrikAI - Welfare Schemes Router (/api/v1/schemes)
"""
from fastapi import APIRouter, HTTPException, Query
from typing import List, Optional
from backend.app.models.scheme import SchemeDetail
from backend.app.database import get_database, IN_MEMORY_DB
from backend.app.utils.seed_data import DEFAULT_SCHEMES

router = APIRouter(prefix="/schemes", tags=["Government Schemes"])

@router.get("", response_model=List[SchemeDetail])
async def list_schemes(
    state: Optional[str] = Query(None, description="State name (e.g. Karnataka, Maharashtra)"),
    age: Optional[int] = Query(None, description="Citizen age in years"),
    gender: Optional[str] = Query(None, description="Gender (Female, Male, All)"),
    occupation: Optional[str] = Query(None, description="Occupation (farmer, student, business, artisan)"),
    income: Optional[int] = Query(None, description="Annual income ceiling in INR")
):
    """
    Search and filter government schemes by eligibility criteria.
    """
    db = get_database()
    schemes_data = []

    if db is not None:
        count = await db.schemes.count_documents({})
        if count == 0:
            # Seed default schemes if collection is empty
            await db.schemes.insert_many(DEFAULT_SCHEMES)
        cursor = db.schemes.find()
        schemes_data = await cursor.to_list(length=100)
    else:
        if not IN_MEMORY_DB["schemes"]:
            IN_MEMORY_DB["schemes"] = list(DEFAULT_SCHEMES)
        schemes_data = IN_MEMORY_DB["schemes"]

    # In-memory filter logic matching rules
    filtered = []
    for s in schemes_data:
        if state and state.lower() != "all":
            if s.get("state") != "All" and s.get("state", "").lower() != state.lower():
                continue

        if gender and gender.lower() != "all":
            if s.get("gender") != "All" and s.get("gender", "").lower() != gender.lower():
                continue

        if age is not None and age > 0:
            if age < s.get("min_age", 0) or age > s.get("max_age", 120):
                continue

        if income is not None:
            if s.get("max_income", 9999999) < income:
                continue

        if occupation and occupation.lower() != "all":
            occ = occupation.lower()
            if occ != s.get("category", "").lower():
                continue

        filtered.append(s)

    return filtered

@router.get("/{scheme_id}", response_model=SchemeDetail)
async def get_scheme_by_id(scheme_id: str):
    """
    Get full details, benefits, eligibility, and official application process for a scheme.
    """
    db = get_database()
    if db is not None:
        scheme = await db.schemes.find_one({"id": scheme_id})
        if scheme:
            return scheme
    else:
        for s in IN_MEMORY_DB["schemes"]:
            if s.get("id") == scheme_id:
                return s

    for s in DEFAULT_SCHEMES:
        if s.get("id") == scheme_id:
            return s

    raise HTTPException(status_code=404, detail="Scheme not found.")
