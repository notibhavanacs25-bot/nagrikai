# NagrikAI (नागरिक AI / ನಾಗರಿಕ್ AI)
> **AI-Powered Multilingual Citizen Assistance Platform for Indian Official Documents & Welfare Schemes**

---

## 🇮🇳 Problem Statement & Overview
Indian citizens regularly receive government, legal, financial, revenue, and municipal documents filled with complex bureaucratic jargon, strict deadlines, and procedural requirements. Many citizens struggle to understand what a document means, why they received it, which documents they need, where to authenticate it, and what actions to take. Simultaneously, information regarding government welfare schemes is fragmented across different state and central portals.

**NagrikAI** bridges this divide by making official information clear, accessible in regional languages, and actionable—while strictly maintaining that it is an informational assistance platform and not a replacement for government authorities or legal counsel.

---

## 📂 Project Architecture

```
NagrikAI/
├── frontend/
│   ├── index.html              # Main Landing Portal & 6-step Citizen Workflow
│   ├── simplify.html           # Document Simplifier, OCR, Checklist & Verification
│   ├── schemes.html            # Welfare Scheme Finder & Profile Matcher
│   ├── voice.html              # Multilingual Voice Assistant Hub
│   ├── updates.html            # Government Updates Feed & Verification Directory
│   ├── css/
│   │   ├── style.css           # Master Indian Civic Design System
│   │   ├── simplify.css        # Dropzone, OCR preview, action checklist, countdown badges
│   │   ├── schemes.css         # Scheme filter forms, category pills, cards & details modal
│   │   └── voice.css           # Glowing mic button, animated sound waves, chat transcript
│   └── js/
│       ├── config.js           # API configuration & official portal registry
│       ├── i18n.js             # Multilingual dictionary (EN, HI, KN, TE, TA)
│       ├── main.js             # Theme controller, mobile drawer, toast manager
│       ├── simplify.js         # Document analysis engine, TTS player, checklist progress
│       ├── schemes.js          # Schemes database, dynamic filter algorithms & modal popup
│       ├── voice.js            # Web Speech API recognition & speech synthesis
│       └── updates.js          # Live updates feed & official verification channels
│
├── backend/
│   ├── app/
│   │   ├── main.py             # FastAPI entry point & CORS configuration
│   │   ├── config.py           # Environment settings (.env)
│   │   ├── database.py         # Async MongoDB Motor connection
│   │   ├── models/             # Pydantic schemas (User, Document, Scheme)
│   │   ├── routers/
│   │   │   ├── auth.py         # Citizen Signup, Login & JWT tokens
│   │   │   ├── documents.py    # Document upload, OCR & Gemini simplification
│   │   │   ├── schemes.py      # Government scheme search & eligibility filter
│   │   │   ├── voice.py        # Regional language voice assistant Q&A
│   │   │   └── updates.py      # Live notifications & verified official channels
│   │   ├── services/
│   │   │   ├── ocr_service.py  # PyMuPDF + Tesseract text extraction
│   │   │   ├── gemini_service.py # Gemini 1.5 Flash prompt engineering
│   │   │   └── auth_service.py # Password hashing (bcrypt) & JWT tokens
│   │   └── utils/
│   │       └── seed_data.py    # Default Indian schemes and verification portals
│   ├── requirements.txt        # Python backend dependencies
│   ├── .env                    # Active local environment variables
│   ├── .env.example            # Environment variables template
│   └── run.py                  # One-click backend server launcher
├── .gitignore
└── README.md
```

---

## ⚡ How to Run the Project

### 1. Run Backend Server (FastAPI + MongoDB)
```powershell
python backend/run.py
```
- **Backend API:** `http://localhost:8000`
- **Interactive Swagger Docs:** 👉 `http://localhost:8000/docs`
- **Alternative Redoc:** `http://localhost:8000/redoc`

### 2. Run Frontend Website
```powershell
python -m http.server 5500 --directory frontend
```
- **Website Home:** 👉 `http://localhost:5500`

---

## 🚀 API Endpoints Overview

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/documents/analyze` | Upload PDF/image; runs OCR & Gemini simplification |
| `GET` | `/api/v1/documents/history` | Retrieve saved analyzed documents from MongoDB |
| `GET` | `/api/v1/schemes` | Filter welfare schemes by age, state, occupation, income |
| `GET` | `/api/v1/schemes/{id}` | Get full scheme eligibility, benefits & official links |
| `POST` | `/api/v1/voice/ask` | Ask questions in Kannada, Hindi, Telugu, Tamil, or English |
| `POST` | `/api/v1/auth/signup` | Citizen registration (saved in MongoDB) |
| `POST` | `/api/v1/auth/login` | Citizen authentication with JWT token |
| `GET` | `/api/v1/updates/feed` | Real-time government alerts & deadline extensions |
| `GET` | `/api/v1/health` | Live backend & MongoDB connection health check |
