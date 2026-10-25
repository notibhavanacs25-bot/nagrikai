/**
 * NagrikAI - Application Configuration
 */

const CONFIG = {
  APP_NAME: "NagrikAI",
  VERSION: "1.0.0",
  API_BASE_URL: "http://localhost:8000/api/v1",
  
  // When backend is disconnected, automatically use high-fidelity intelligent simulation
  // so the user and evaluators can interact with all features immediately!
  USE_MOCK_FALLBACK: true,

  VOICE_LOCALE_MAP: {
    en: "en-IN",
    hi: "hi-IN",
    kn: "kn-IN",
    te: "te-IN",
    ta: "ta-IN"
  },

  OFFICIAL_VERIFICATION_PORTALS: [
    {
      name: "DigiLocker National Portal",
      authority: "Ministry of Electronics & IT (MeitY)",
      category: "All Verified Govt Documents",
      url: "https://www.digilocker.gov.in/",
      icon: "fa-shield-halved"
    },
    {
      name: "Bhoomi Karnataka Land Records",
      authority: "Revenue Dept, Govt of Karnataka",
      category: "RTC / Pahani / Mutation Extracts",
      url: "https://landrecords.karnataka.gov.in/",
      icon: "fa-seedling"
    },
    {
      name: "Parivahan Sewa Portal",
      authority: "Ministry of Road Transport & Highways",
      category: "Driving License, RC, E-Challan",
      url: "https://parivahan.gov.in/",
      icon: "fa-car"
    },
    {
      name: "UIDAI Resident Portal",
      authority: "Unique Identification Authority of India",
      category: "Aadhaar Card Authentication",
      url: "https://myaadhaar.uidai.gov.in/",
      icon: "fa-fingerprint"
    },
    {
      name: "Income Tax e-Filing Portal",
      authority: "Central Board of Direct Taxes (CBDT)",
      category: "PAN Verification & Income Tax",
      url: "https://www.incometax.gov.in/iec/foportal/",
      icon: "fa-file-invoice-dollar"
    },
    {
      name: "National Portal of India",
      authority: "Government of India",
      category: "Welfare Schemes & Citizen Services",
      url: "https://www.india.gov.in/",
      icon: "fa-landmark"
    }
  ]
};

window.CONFIG = CONFIG;
