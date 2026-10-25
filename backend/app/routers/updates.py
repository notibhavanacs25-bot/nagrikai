"""
NagrikAI - Government Updates & Verification Directory Router (/api/v1/updates)
"""
from fastapi import APIRouter
from typing import List
from backend.app.utils.seed_data import DEFAULT_UPDATES, DEFAULT_VERIFICATION_PORTALS

router = APIRouter(prefix="/updates", tags=["Govt Updates & Verification"])

@router.get("/feed", response_model=List[dict])
async def get_govt_updates_feed():
    """
    Returns latest notifications regarding deadline extensions, scheme rollouts, and tax updates.
    """
    return DEFAULT_UPDATES

@router.get("/verification-portals", response_model=List[dict])
async def get_verification_portals():
    """
    Returns directory of verified central and state authentication portals.
    """
    return DEFAULT_VERIFICATION_PORTALS
