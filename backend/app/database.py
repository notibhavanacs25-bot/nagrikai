"""
NagrikAI - MongoDB Database Connection
Async Driver: Motor (AsyncIOMotorClient)
"""
import logging
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import ConnectionFailure, ServerSelectionTimeoutError
from backend.app.config import settings

logger = logging.getLogger("nagrikai.database")

client: AsyncIOMotorClient = None
db = None

# In-memory storage fallback if MongoDB is not reachable
IN_MEMORY_DB = {
    "users": {},
    "documents": [],
    "schemes": [],
    "updates": []
}

async def connect_to_mongo():
    global client, db
    try:
        logger.info(f"Connecting to MongoDB at {settings.MONGODB_URI}...")
        client = AsyncIOMotorClient(
            settings.MONGODB_URI,
            serverSelectionTimeoutMS=10000
        )
        # Test connection
        await client.admin.command('ping')
        db = client[settings.DATABASE_NAME]
        logger.info(f"Successfully connected to MongoDB database: '{settings.DATABASE_NAME}'")
    except (ConnectionFailure, ServerSelectionTimeoutError, Exception) as e:
        logger.warning(f"Could not connect to live MongoDB instance: {e}")
        logger.info("Using in-memory fallback store. The API will remain fully responsive!")
        client = None
        db = None

async def close_mongo_connection():
    global client
    if client:
        client.close()
        logger.info("MongoDB connection closed.")

def get_database():
    return db

def is_mongo_connected():
    return db is not None
