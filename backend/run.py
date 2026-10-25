"""
NagrikAI - Backend Server Launcher
Run with: python backend/run.py
"""
import sys
from pathlib import Path

# Ensure root directory is on PYTHONPATH
ROOT_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT_DIR))

import uvicorn
from backend.app.config import settings

if __name__ == "__main__":
    print(f"Starting NagrikAI Backend on http://{settings.HOST}:{settings.PORT}")
    print(f"Interactive Swagger API Docs: http://localhost:{settings.PORT}/docs")
    uvicorn.run(
        "backend.app.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=True
    )
