"""
NagrikAI - Authentication Router (/api/v1/auth)
"""
import uuid
import datetime
from fastapi import APIRouter, HTTPException, status, Depends
from backend.app.models.user import CitizenSignup, CitizenLogin, TokenResponse, UserProfile
from backend.app.services.auth_service import auth_service
from backend.app.database import get_database, IN_MEMORY_DB

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/signup", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
async def signup(user_data: CitizenSignup):
    db = get_database()
    email_lower = user_data.email.lower()

    # Check existing user
    if db is not None:
        existing = await db.users.find_one({"email": email_lower})
        if existing:
            raise HTTPException(status_code=400, detail="An account with this email already exists.")
    else:
        if email_lower in IN_MEMORY_DB["users"]:
            raise HTTPException(status_code=400, detail="An account with this email already exists.")

    user_id = str(uuid.uuid4())
    hashed_pwd = auth_service.hash_password(user_data.password)

    user_doc = {
        "_id": user_id,
        "name": user_data.name,
        "email": email_lower,
        "password": hashed_pwd,
        "phone": user_data.phone,
        "state": user_data.state,
        "preferred_language": user_data.preferred_language,
        "created_at": datetime.datetime.now(datetime.timezone.utc)
    }

    if db is not None:
        await db.users.insert_one(user_doc)
    else:
        IN_MEMORY_DB["users"][email_lower] = user_doc

    # Generate Token
    token = auth_service.create_access_token({"sub": user_id, "email": email_lower})

    return TokenResponse(
        access_token=token,
        token_type="bearer",
        user_id=user_id,
        name=user_data.name,
        email=email_lower,
        preferred_language=user_data.preferred_language or "en"
    )

@router.post("/login", response_model=TokenResponse)
async def login(credentials: CitizenLogin):
    db = get_database()
    email_lower = credentials.email.lower()

    user = None
    if db is not None:
        user = await db.users.find_one({"email": email_lower})
    else:
        user = IN_MEMORY_DB["users"].get(email_lower)

    if not user or not auth_service.verify_password(credentials.password, user["password"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password."
        )

    user_id = str(user["_id"])
    token = auth_service.create_access_token({"sub": user_id, "email": email_lower})

    return TokenResponse(
        access_token=token,
        token_type="bearer",
        user_id=user_id,
        name=user["name"],
        email=email_lower,
        preferred_language=user.get("preferred_language", "en")
    )
