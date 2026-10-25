/**
 * NagrikAI - Government Scheme Finder & Eligibility Matcher
 */

const SCHEMES_DATABASE = [
  {
    id: "pm_kisan",
    name: "PM-Kisan Samman Nidhi",
    department: "Ministry of Agriculture & Farmers Welfare, Govt of India",
    level: "Central Government",
    state: "All",
    benefit: "₹ 6,000 / year",
    benefitDesc: "Direct transfer of ₹2,000 every 4 months directly into beneficiary bank accounts via Aadhaar-linked DBT.",
    category: "farmer",
    gender: "All",
    minAge: 18,
    maxAge: 75,
    maxIncome: 800000,
    tags: ["Farmers", "Income Support", "Central DBT"],
    eligibility: [
      "Must be an Indian citizen with cultivable landholding in revenue records.",
      "Must have land ownership registered before 01.02.2019.",
      "Institutional landholders and income-tax paying professionals are excluded."
    ],
    documents: [
      "Land Record / RTC (Pahani / Khasra-Khatauni)",
      "Aadhaar Card linked with active Mobile Number",
      "Bank Account passbook linked to NPCI DBT",
      "Citizenship proof"
    ],
    process: [
      "Visit pmkisan.gov.in or Common Service Centre (CSC).",
      "Click 'New Farmer Registration' and enter Aadhaar Number.",
      "Upload landholding RTC / Survey details.",
      "Complete eKYC via OTP or biometric authentication."
    ],
    deadline: "Open All Year Round (Next Installment: December 2026)",
    officialUrl: "https://pmkisan.gov.in/"
  },

  {
    id: "gruha_lakshmi",
    name: "Gruha Lakshmi Scheme",
    department: "Department of Women & Child Development, Govt of Karnataka",
    level: "State Government",
    state: "Karnataka",
    benefit: "₹ 2,000 / month",
    benefitDesc: "Monthly direct financial aid of ₹2,000 transferred to the bank account of the woman head of household.",
    category: "women",
    gender: "Female",
    minAge: 18,
    maxAge: 100,
    maxIncome: 500000,
    tags: ["Women Empowerment", "Karnataka", "Financial Aid"],
    eligibility: [
      "Woman named as head of the family in Antyodaya, BPL, or APL ration cards.",
      "Woman or her husband must not be paying Income Tax or GST.",
      "Beneficiary must reside in Karnataka."
    ],
    documents: [
      "Aadhaar Card of the woman applicant",
      "Aadhaar Card of the husband",
      "Ration Card (APL / BPL / Antyodaya)",
      "Aadhaar-seeded Bank Account"
    ],
    process: [
      "Visit Karnataka One / Grama One / Bangalore One center.",
      "Submit Ration Card number for verification.",
      "Provide OTP sent to Aadhaar-linked mobile.",
      "Receive SMS acknowledgment with beneficiary code."
    ],
    deadline: "Ongoing rolling applications",
    officialUrl: "https://sevasindhuservices.karnataka.gov.in/"
  },

  {
    id: "yuva_nidhi",
    name: "Yuva Nidhi Scheme",
    department: "Department of Skill Development & Livelihood, Govt of Karnataka",
    level: "State Government",
    state: "Karnataka",
    benefit: "₹ 3,000 / month",
    benefitDesc: "Monthly stipend of ₹3,000 for unemployed graduates and ₹1,500 for unemployed diploma holders for up to 2 years.",
    category: "student",
    gender: "All",
    minAge: 20,
    maxAge: 32,
    maxIncome: 500000,
    tags: ["Youth & Graduates", "Karnataka", "Unemployment Allowance"],
    eligibility: [
      "Candidates who graduated/diploma in Karnataka in academic years 2023, 2024, or 2025.",
      "Must remain unemployed 6 months after graduation.",
      "Must not be enrolled in higher education or receiving apprentice stipends."
    ],
    documents: [
      "Degree / Diploma Certificate and Marks Cards",
      "Aadhaar Card",
      "Karnataka Domicile Certificate",
      "Self-declaration of unemployment"
    ],
    process: [
      "Login to Seva Sindhu portal (sevasindhuservices.karnataka.gov.in).",
      "Select 'Yuva Nidhi Scheme' under Skill Development.",
      "Verify NAD (National Academic Depository) Degree credentials.",
      "Link bank account via Aadhaar DBT."
    ],
    deadline: "Open enrollment for recent batches",
    officialUrl: "https://sevasindhuservices.karnataka.gov.in/"
  },

  {
    id: "ayushman_bharat",
    name: "Ayushman Bharat - PM-JAY",
    department: "National Health Authority (NHA), Ministry of Health",
    level: "Central Government",
    state: "All",
    benefit: "₹ 5 Lakh / family / year",
    benefitDesc: "Cashless secondary and tertiary hospitalisation care across 28,000+ empaneled public and private hospitals across India.",
    category: "health",
    gender: "All",
    minAge: 0,
    maxAge: 100,
    maxIncome: 300000,
    tags: ["Healthcare", "Cashless Hospitalization", "Pan-India"],
    eligibility: [
      "Identified under SECC 2011 deprivation criteria (BPL/Vulnerable households).",
      "All senior citizens aged 70+ now eligible regardless of income under Ayushman Vay Vandana expansion.",
      "No limit on family size, age, or gender."
    ],
    documents: [
      "Aadhaar Card of all family members",
      "Ration Card or PMJAY Family Identification Letter",
      "Active Mobile Number"
    ],
    process: [
      "Check eligibility at beneficiary.nha.gov.in or download Ayushman App.",
      "Authenticate with Aadhaar e-KYC.",
      "Instant generation of Ayushman Golden Card (PVC card available via CSC)."
    ],
    deadline: "Continuous coverage",
    officialUrl: "https://beneficiary.nha.gov.in/"
  },

  {
    id: "post_matric_scholarship",
    name: "Post-Matric Scholarship for SC/ST/OBC Students",
    department: "Ministry of Social Justice & State Social Welfare Departments",
    level: "Central & State Joint",
    state: "All",
    benefit: "100% Tuition Fee + Maintenance Allowance",
    benefitDesc: "Full reimbursement of college tuition fees plus up to ₹1,200/month maintenance grant directly to student accounts.",
    category: "student",
    gender: "All",
    minAge: 15,
    maxAge: 35,
    maxIncome: 250000,
    tags: ["Education", "Scholarships", "SC/ST/OBC"],
    eligibility: [
      "Student studying in class 11, 12, ITI, Diploma, Undergraduate, or Postgraduate courses in recognized institutions.",
      "Total family annual income must not exceed ₹2.5 Lakh.",
      "Must belong to SC, ST, OBC, or EBC categories."
    ],
    documents: [
      "Caste and Income Certificate (issued by Tahsildar with valid RD number)",
      "Student Aadhaar Card & College Admission Fee Receipt",
      "SSLC / 10th Marks card & Previous year marks card",
      "Aadhaar-seeded Bank Account passbook"
    ],
    process: [
      "Register on National Scholarship Portal (scholarships.gov.in) or State SSP (ssp.postmatric.karnataka.gov.in).",
      "Fill Student e-KYC and college course details.",
      "College verification followed by Taluk Social Welfare Officer approval."
    ],
    deadline: "30 November 2026 (Annual Cycle)",
    officialUrl: "https://scholarships.gov.in/"
  },

  {
    id: "pm_mudra",
    name: "PM Mudra Yojana (PMMY)",
    department: "Department of Financial Services, Ministry of Finance",
    level: "Central Government",
    state: "All",
    benefit: "Loans up to ₹ 10 Lakh (No Collateral)",
    benefitDesc: "Subsidized business loans: Shishu (up to ₹50k), Kishore (₹50k-₹5L), Tarun (₹5L-₹10L) with no mortgage requirement.",
    category: "business",
    gender: "All",
    minAge: 18,
    maxAge: 65,
    maxIncome: 1200000,
    tags: ["Business Loan", "Street Vendors", "Micro Enterprises"],
    eligibility: [
      "Any non-farm micro or small business enterprise involved in manufacturing, processing, trading, or services.",
      "No credit defaults in previous commercial bank accounts."
    ],
    documents: [
      "Business Profile / Proposal proof",
      "PAN Card & Aadhaar Card",
      "Bank Account statement of last 6 months",
      "Proof of business address (Udyam Registration)"
    ],
    process: [
      "Apply through Udyamimitra portal (udyamimitra.in) or visit any commercial bank or NBFC.",
      "Submit loan proposal and select suitable category (Shishu/Kishore/Tarun).",
      "Sanctioned loan credited within 7-14 working days."
    ],
    deadline: "Open All Year",
    officialUrl: "https://www.mudra.org.in/"
  },

  {
    id: "pm_vishwakarma",
    name: "PM Vishwakarma Scheme",
    department: "Ministry of Micro, Small and Medium Enterprises (MSME)",
    level: "Central Government",
    state: "All",
    benefit: "₹ 3 Lakh Loan @ 5% + ₹ 15,000 Toolkit Grant",
    benefitDesc: "Skill training with ₹500/day stipend, free ₹15,000 modern toolkit voucher, and collateral-free loans at 5% interest.",
    category: "artisan",
    gender: "All",
    minAge: 18,
    maxAge: 70,
    maxIncome: 600000,
    tags: ["Artisans", "Carpenters", "Tailors", "Blacksmiths", "Toolkit Grant"],
    eligibility: [
      "Artisan or craftsperson working with hands and tools in one of 18 traditional family trades (Carpenter, Tailor, Cobbler, Potter, Barber, Mason, etc.).",
      "Only one member per family eligible."
    ],
    documents: [
      "Aadhaar Card & linked mobile number",
      "Bank Passbook details",
      "Ration Card copy",
      "Trade declaration"
    ],
    process: [
      "Register at nearest Common Service Centre (CSC) on pmvishwakarma.gov.in.",
      "Verification by Gram Panchayat / Urban Local Body.",
      "Undergo 5-day basic skill training and receive toolkit voucher."
    ],
    deadline: "Ongoing National Campaign",
    officialUrl: "https://pmvishwakarma.gov.in/"
  },

  {
    id: "pm_awas_yojana",
    name: "Pradhan Mantri Awas Yojana (PMAY-Urban / Gramin)",
    department: "Ministry of Housing and Urban Affairs (MoHUA)",
    level: "Central Government",
    state: "All",
    benefit: "Interest Subsidy up to ₹ 2.67 Lakh",
    benefitDesc: "Financial assistance and credit-linked interest subsidy for constructing or purchasing a permanent pucca house.",
    category: "housing",
    gender: "All",
    minAge: 21,
    maxAge: 70,
    maxIncome: 600000,
    tags: ["Housing Subsidy", "Pucca House", "Urban & Rural"],
    eligibility: [
      "Beneficiary family should not own a pucca house anywhere in India in any family member's name.",
      "Must fall in EWS (income up to ₹3L) or LIG (income ₹3L-₹6L) categories.",
      "Female ownership or co-ownership of property mandatory in most cases."
    ],
    documents: [
      "Aadhaar Cards of all family members",
      "Income Certificate / ITR / Salary Slip",
      "Land title or property booking agreement",
      "Bank statement"
    ],
    process: [
      "Apply through pmaymis.gov.in or municipal corporation housing cell.",
      "Select Citizen Assessment -> Apply for Benefit.",
      "Attach Aadhaar and bank details for subsidy sanction."
    ],
    deadline: "Phased allotments (PMAY 2.0 active)",
    officialUrl: "https://pmaymis.gov.in/"
  }
];

let activeCategoryFilter = "all";

function initSchemeFinder() {
  renderSchemes(SCHEMES_DATABASE);

  // Setup form submission / input changes
  const filterForm = document.getElementById("schemeFilterForm");
  if (filterForm) {
    filterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      applyFilters();
    });

    const inputs = filterForm.querySelectorAll("select, input");
    inputs.forEach(input => {
      input.addEventListener("change", applyFilters);
    });
  }

  // Setup category pills
  const catPills = document.querySelectorAll(".category-pill-btn");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategoryFilter = pill.getAttribute("data-category");
      applyFilters();
    });
  });

  // Setup Modal close listeners
  const modalOverlay = document.getElementById("schemeModalOverlay");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  if (modalCloseBtn && modalOverlay) {
    modalCloseBtn.addEventListener("click", () => modalOverlay.classList.remove("open"));
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove("open");
    });
  }
}

function applyFilters() {
  const age = parseInt(document.getElementById("filterAge")?.value) || 0;
  const state = document.getElementById("filterState")?.value || "all";
  const occupation = document.getElementById("filterOccupation")?.value || "all";
  const gender = document.getElementById("filterGender")?.value || "all";
  const income = parseInt(document.getElementById("filterIncome")?.value) || 9999999;

  let filtered = SCHEMES_DATABASE.filter(scheme => {
    // Category pill filter
    if (activeCategoryFilter !== "all" && scheme.category !== activeCategoryFilter) {
      return false;
    }

    // State filter
    if (state !== "all" && scheme.state !== "All" && scheme.state.toLowerCase() !== state.toLowerCase()) {
      return false;
    }

    // Gender filter
    if (gender !== "all" && scheme.gender !== "All" && scheme.gender.toLowerCase() !== gender.toLowerCase()) {
      return false;
    }

    // Age filter
    if (age > 0 && (age < scheme.minAge || age > scheme.maxAge)) {
      return false;
    }

    // Income filter
    if (income < 9999999 && scheme.maxIncome < income) {
      return false;
    }

    // Occupation filter
    if (occupation !== "all") {
      if (occupation === "farmer" && scheme.category !== "farmer") return false;
      if (occupation === "student" && scheme.category !== "student") return false;
      if (occupation === "business" && scheme.category !== "business") return false;
      if (occupation === "artisan" && scheme.category !== "artisan") return false;
    }

    return true;
  });

  renderSchemes(filtered);
}

function renderSchemes(schemes) {
  const grid = document.getElementById("schemesGrid");
  const countText = document.getElementById("schemesCountText");
  if (!grid) return;

  grid.innerHTML = "";
  if (countText) {
    countText.textContent = `${schemes.length} Schemes Available`;
  }

  if (schemes.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-medium);">
        <i class="fa-solid fa-filter-circle-xmark" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3>No schemes match your exact filter</h3>
        <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try relaxing your income or state criteria to discover more national welfare schemes.</p>
        <button type="button" class="btn btn-outline btn-sm" style="margin-top: 1rem;" onclick="resetSchemeFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  schemes.forEach(scheme => {
    const card = document.createElement("div");
    card.className = "scheme-card";
    card.innerHTML = `
      <div class="scheme-card-top">
        <div class="scheme-badge-row">
          <span class="badge badge-match"><i class="fa-solid fa-check-circle"></i> Eligible Match</span>
          <span class="scheme-state-badge">${scheme.state === 'All' ? 'National / Central' : scheme.state}</span>
        </div>
        <h3 class="scheme-title">${scheme.name}</h3>
        <div class="scheme-dept">${scheme.department}</div>
        
        <div class="scheme-benefit-box">
          <div class="scheme-benefit-label">Direct Financial Benefit</div>
          <div class="scheme-benefit-val">${scheme.benefit}</div>
        </div>

        <div class="scheme-tags-row">
          ${scheme.tags.map(tag => `<span class="scheme-tag">${tag}</span>`).join('')}
        </div>
      </div>

      <div class="scheme-card-footer">
        <span style="font-size: 0.78rem; color: var(--text-muted);"><i class="fa-solid fa-clock"></i> ${scheme.deadline}</span>
        <button type="button" class="btn btn-primary btn-sm" onclick="openSchemeModal('${scheme.id}')">
          Details & Apply <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openSchemeModal(schemeId) {
  const scheme = SCHEMES_DATABASE.find(s => s.id === schemeId);
  if (!scheme) return;

  document.getElementById("modalSchemeTitle").textContent = scheme.name;
  document.getElementById("modalSchemeDept").textContent = `${scheme.level} • ${scheme.department}`;
  document.getElementById("modalSchemeBenefit").textContent = scheme.benefit;
  document.getElementById("modalSchemeBenefitDesc").textContent = scheme.benefitDesc;

  // Render eligibility
  const eligList = document.getElementById("modalEligibilityList");
  eligList.innerHTML = scheme.eligibility.map(item => `<li><i class="fa-solid fa-circle-check text-green" style="margin-right: 6px;"></i> ${item}</li>`).join('');

  // Render documents
  const docList = document.getElementById("modalDocsList");
  docList.innerHTML = scheme.documents.map(item => `<li><i class="fa-solid fa-file-shield text-primary" style="margin-right: 6px;"></i> ${item}</li>`).join('');

  // Render process
  const procList = document.getElementById("modalProcessList");
  procList.innerHTML = scheme.process.map((step, idx) => `
    <div style="display: flex; gap: 0.75rem; margin-bottom: 0.6rem;">
      <span style="width: 22px; height: 22px; border-radius: 50%; background: var(--primary-navy); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700; flex-shrink: 0;">${idx + 1}</span>
      <span style="font-size: 0.9rem;">${step}</span>
    </div>
  `).join('');

  // Portal link
  const portalBtn = document.getElementById("modalOfficialPortalBtn");
  if (portalBtn) {
    portalBtn.href = scheme.officialUrl;
  }

  const modal = document.getElementById("schemeModalOverlay");
  if (modal) modal.classList.add("open");
}

function resetSchemeFilters() {
  document.getElementById("filterAge").value = "";
  document.getElementById("filterState").value = "all";
  document.getElementById("filterOccupation").value = "all";
  document.getElementById("filterGender").value = "all";
  document.getElementById("filterIncome").value = "all";

  const catPills = document.querySelectorAll(".category-pill-btn");
  catPills.forEach(p => p.classList.remove("active"));
  document.querySelector(".category-pill-btn[data-category='all']")?.classList.add("active");
  activeCategoryFilter = "all";

  applyFilters();
}

document.addEventListener("DOMContentLoaded", initSchemeFinder);
window.openSchemeModal = openSchemeModal;
window.resetSchemeFilters = resetSchemeFilters;
