"""
NagrikAI - Default Seed Data for MongoDB
Central & State Welfare Schemes, Updates, and Verification Channels
"""

DEFAULT_SCHEMES = [
    {
        "id": "pm_kisan",
        "name": "PM-Kisan Samman Nidhi",
        "department": "Ministry of Agriculture & Farmers Welfare, Govt of India",
        "level": "Central Government",
        "state": "All",
        "benefit": "₹ 6,000 / year",
        "benefit_desc": "Direct transfer of ₹2,000 every 4 months directly into beneficiary bank accounts via Aadhaar-linked DBT.",
        "category": "farmer",
        "gender": "All",
        "min_age": 18,
        "max_age": 75,
        "max_income": 800000,
        "tags": ["Farmers", "Income Support", "Central DBT"],
        "eligibility": [
            "Must be an Indian citizen with cultivable landholding in revenue records.",
            "Must have land ownership registered before 01.02.2019.",
            "Institutional landholders and income-tax paying professionals are excluded."
        ],
        "documents": [
            "Land Record / RTC (Pahani / Khasra-Khatauni)",
            "Aadhaar Card linked with active Mobile Number",
            "Bank Account passbook linked to NPCI DBT"
        ],
        "process": [
            "Visit pmkisan.gov.in or Common Service Centre (CSC).",
            "Click 'New Farmer Registration' and enter Aadhaar Number.",
            "Upload landholding RTC / Survey details.",
            "Complete eKYC via OTP or biometric authentication."
        ],
        "deadline": "Open All Year Round",
        "official_url": "https://pmkisan.gov.in/"
    },
    {
        "id": "gruha_lakshmi",
        "name": "Gruha Lakshmi Scheme",
        "department": "Department of Women & Child Development, Govt of Karnataka",
        "level": "State Government",
        "state": "Karnataka",
        "benefit": "₹ 2,000 / month",
        "benefit_desc": "Monthly direct financial aid of ₹2,000 transferred to the bank account of the woman head of household.",
        "category": "women",
        "gender": "Female",
        "min_age": 18,
        "max_age": 100,
        "max_income": 500000,
        "tags": ["Women Empowerment", "Karnataka", "Financial Aid"],
        "eligibility": [
            "Woman named as head of the family in Antyodaya, BPL, or APL ration cards.",
            "Woman or her husband must not be paying Income Tax or GST.",
            "Beneficiary must reside in Karnataka."
        ],
        "documents": [
            "Aadhaar Card of the woman applicant",
            "Aadhaar Card of the husband",
            "Ration Card (APL / BPL / Antyodaya)",
            "Aadhaar-seeded Bank Account"
        ],
        "process": [
            "Visit Karnataka One / Grama One / Bangalore One center.",
            "Submit Ration Card number for verification.",
            "Provide OTP sent to Aadhaar-linked mobile.",
            "Receive SMS acknowledgment with beneficiary code."
        ],
        "deadline": "Ongoing rolling applications",
        "official_url": "https://sevasindhuservices.karnataka.gov.in/"
    },
    {
        "id": "yuva_nidhi",
        "name": "Yuva Nidhi Scheme",
        "department": "Department of Skill Development & Livelihood, Govt of Karnataka",
        "level": "State Government",
        "state": "Karnataka",
        "benefit": "₹ 3,000 / month",
        "benefit_desc": "Monthly stipend of ₹3,000 for unemployed graduates and ₹1,500 for unemployed diploma holders for up to 2 years.",
        "category": "student",
        "gender": "All",
        "min_age": 20,
        "max_age": 32,
        "max_income": 500000,
        "tags": ["Youth & Graduates", "Karnataka", "Unemployment Allowance"],
        "eligibility": [
            "Candidates who graduated/diploma in Karnataka in academic years 2023, 2024, or 2025.",
            "Must remain unemployed 6 months after graduation.",
            "Must not be enrolled in higher education or receiving apprentice stipends."
        ],
        "documents": [
            "Degree / Diploma Certificate and Marks Cards",
            "Aadhaar Card",
            "Karnataka Domicile Certificate",
            "Self-declaration of unemployment"
        ],
        "process": [
            "Login to Seva Sindhu portal (sevasindhuservices.karnataka.gov.in).",
            "Select 'Yuva Nidhi Scheme' under Skill Development.",
            "Verify NAD (National Academic Depository) Degree credentials.",
            "Link bank account via Aadhaar DBT."
        ],
        "deadline": "Open enrollment for recent batches",
        "official_url": "https://sevasindhuservices.karnataka.gov.in/"
    },
    {
        "id": "ayushman_bharat",
        "name": "Ayushman Bharat - PM-JAY",
        "department": "National Health Authority (NHA), Ministry of Health",
        "level": "Central Government",
        "state": "All",
        "benefit": "₹ 5 Lakh / family / year",
        "benefit_desc": "Cashless secondary and tertiary hospitalisation care across 28,000+ empaneled public and private hospitals across India.",
        "category": "health",
        "gender": "All",
        "min_age": 0,
        "max_age": 100,
        "max_income": 300000,
        "tags": ["Healthcare", "Cashless Hospitalization", "Pan-India"],
        "eligibility": [
            "Identified under SECC 2011 deprivation criteria (BPL/Vulnerable households).",
            "All senior citizens aged 70+ now eligible regardless of income under Ayushman Vay Vandana expansion."
        ],
        "documents": [
            "Aadhaar Card of all family members",
            "Ration Card or PMJAY Family Identification Letter",
            "Active Mobile Number"
        ],
        "process": [
            "Check eligibility at beneficiary.nha.gov.in or download Ayushman App.",
            "Authenticate with Aadhaar e-KYC.",
            "Instant generation of Ayushman Golden Card."
        ],
        "deadline": "Continuous coverage",
        "official_url": "https://beneficiary.nha.gov.in/"
    },
    {
        "id": "post_matric_scholarship",
        "name": "Post-Matric Scholarship for SC/ST/OBC Students",
        "department": "Ministry of Social Justice & State Social Welfare Departments",
        "level": "Central & State Joint",
        "state": "All",
        "benefit": "100% Tuition Fee + Maintenance Allowance",
        "benefit_desc": "Full reimbursement of college tuition fees plus maintenance grant directly to student accounts.",
        "category": "student",
        "gender": "All",
        "min_age": 15,
        "max_age": 35,
        "max_income": 250000,
        "tags": ["Education", "Scholarships", "SC/ST/OBC"],
        "eligibility": [
            "Student studying in class 11, 12, ITI, Diploma, Undergraduate, or Postgraduate courses in recognized institutions.",
            "Total family annual income must not exceed ₹2.5 Lakh."
        ],
        "documents": [
            "Caste and Income Certificate (issued by Tahsildar with valid RD number)",
            "Student Aadhaar Card & College Admission Fee Receipt",
            "SSLC / 10th Marks card & Previous year marks card"
        ],
        "process": [
            "Register on National Scholarship Portal (scholarships.gov.in) or State SSP.",
            "Fill Student e-KYC and college course details.",
            "College verification followed by Taluk Social Welfare Officer approval."
        ],
        "deadline": "30 November 2026",
        "official_url": "https://scholarships.gov.in/"
    },
    {
        "id": "pm_mudra",
        "name": "PM Mudra Yojana (PMMY)",
        "department": "Department of Financial Services, Ministry of Finance",
        "level": "Central Government",
        "state": "All",
        "benefit": "Loans up to ₹ 10 Lakh (No Collateral)",
        "benefit_desc": "Subsidized business loans: Shishu (up to ₹50k), Kishore (₹50k-₹5L), Tarun (₹5L-₹10L) with no mortgage requirement.",
        "category": "business",
        "gender": "All",
        "min_age": 18,
        "max_age": 65,
        "max_income": 1200000,
        "tags": ["Business Loan", "Street Vendors", "Micro Enterprises"],
        "eligibility": [
            "Any non-farm micro or small business enterprise involved in manufacturing, trading, or services.",
            "No credit defaults in previous commercial bank accounts."
        ],
        "documents": [
            "Business Profile / Proposal proof",
            "PAN Card & Aadhaar Card",
            "Bank Account statement of last 6 months"
        ],
        "process": [
            "Apply through Udyamimitra portal or visit any commercial bank or NBFC.",
            "Submit loan proposal and select suitable category.",
            "Sanctioned loan credited within 7-14 working days."
        ],
        "deadline": "Open All Year",
        "official_url": "https://www.mudra.org.in/"
    }
]

DEFAULT_UPDATES = [
    {
        "id": "up_1",
        "title": "National Scholarship Portal (NSP) Post-Matric Deadline Extended",
        "category": "deadline",
        "category_name": "Deadline Extension",
        "authority": "Ministry of Social Justice & Empowerment",
        "date": "24 October 2026",
        "last_verified": "Today, 10:30 AM IST",
        "summary": "The deadline for online submission of Post-Matric scholarship applications for SC, ST, and OBC college students has been extended to 30 November 2026.",
        "official_url": "https://scholarships.gov.in/",
        "is_urgent": True
    },
    {
        "id": "up_2",
        "title": "Ayushman Vay Vandana Card: Universal Health Cover for All Citizens Aged 70+",
        "category": "scheme",
        "category_name": "New Scheme Launch",
        "authority": "National Health Authority (NHA)",
        "date": "20 October 2026",
        "last_verified": "22 October 2026",
        "summary": "Government of India has officially rolled out the Ayushman Vay Vandana scheme, providing ₹5 Lakh free health cover per year to all senior citizens aged 70 years and above.",
        "official_url": "https://beneficiary.nha.gov.in/",
        "is_urgent": False
    },
    {
        "id": "up_3",
        "title": "BBMP Property Tax 5% Rebate Window Extended for Bengaluru Citizens",
        "category": "tax",
        "category_name": "Tax Notification",
        "authority": "Bruhat Bengaluru Mahanagara Palike (BBMP)",
        "date": "18 October 2026",
        "last_verified": "20 October 2026",
        "summary": "Citizens paying property tax for the assessment year 2026-27 can now avail a 5% early-bird rebate on full payment until 15 November 2026.",
        "official_url": "https://bbmptax.karnataka.gov.in/",
        "is_urgent": True
    }
]

DEFAULT_VERIFICATION_PORTALS = [
    {
        "name": "DigiLocker National Verifier",
        "authority": "MeitY, Government of India",
        "type": "Central Repository",
        "docs": "Aadhaar, Driving License, Degree Certificates, Vehicle RC",
        "how_to": "Scan QR code on certificate using DigiLocker App or verify document URI on portal.",
        "url": "https://www.digilocker.gov.in/",
        "icon": "fa-shield-halved"
    },
    {
        "name": "Bhoomi Karnataka Land Records",
        "authority": "Revenue Dept, Karnataka",
        "type": "State Land Registry",
        "docs": "RTC / Pahani, Mutation Extracts (Form 21), Tippani",
        "how_to": "Enter District, Taluk, Hobli, Village, and Survey No to verify official land ownership.",
        "url": "https://landrecords.karnataka.gov.in/",
        "icon": "fa-seedling"
    },
    {
        "name": "Parivahan Sewa E-Portal",
        "authority": "Ministry of Road Transport (MoRTH)",
        "type": "National Transport Registry",
        "docs": "Driving License, RC Status, E-Challan Authenticity",
        "how_to": "Check license validity and vehicle status in national VAHAN & SARATHI database.",
        "url": "https://parivahan.gov.in/",
        "icon": "fa-car"
    }
]
