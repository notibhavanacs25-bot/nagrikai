/**
 * NagrikAI - Government Updates & Verification Directory Controller
 */

const GOVT_UPDATES_FEED = [
  {
    id: "up_1",
    title: "National Scholarship Portal (NSP) Post-Matric Deadline Extended",
    category: "deadline",
    categoryName: "Deadline Extension",
    authority: "Ministry of Social Justice & Empowerment",
    date: "24 October 2026",
    lastVerified: "Today, 10:30 AM IST",
    summary: "The deadline for online submission of Post-Matric scholarship applications for SC, ST, and OBC college students has been extended to 30 November 2026. Institutional verification window will remain open until 15 December 2026.",
    officialUrl: "https://scholarships.gov.in/",
    isUrgent: true
  },
  {
    id: "up_2",
    title: "Ayushman Vay Vandana Card: Universal Health Cover for All Citizens Aged 70+",
    category: "scheme",
    categoryName: "New Scheme Launch",
    authority: "National Health Authority (NHA)",
    date: "20 October 2026",
    lastVerified: "22 October 2026",
    summary: "Government of India has officially rolled out the Ayushman Vay Vandana scheme, providing ₹5 Lakh free health cover per year to all senior citizens aged 70 years and above, irrespective of family income or economic status.",
    officialUrl: "https://beneficiary.nha.gov.in/",
    isUrgent: false
  },
  {
    id: "up_3",
    title: "BBMP Property Tax 5% Rebate Window Extended for Bengaluru Citizens",
    category: "tax",
    categoryName: "Tax Notification",
    authority: "Bruhat Bengaluru Mahanagara Palike (BBMP)",
    date: "18 October 2026",
    lastVerified: "20 October 2026",
    summary: "Citizens paying property tax for the assessment year 2026-27 can now avail a 5% early-bird rebate on full payment until 15 November 2026. Online payment receipts with SAS verification available on bbmptax.karnataka.gov.in.",
    officialUrl: "https://bbmptax.karnataka.gov.in/",
    isUrgent: true
  },
  {
    id: "up_4",
    title: "PM-Kisan 18th Installment Released: eKYC Mandatory for Beneficiary Accounts",
    category: "scheme",
    categoryName: "Farmer Welfare",
    authority: "Ministry of Agriculture & Farmers Welfare",
    date: "15 October 2026",
    lastVerified: "19 October 2026",
    summary: "Direct Benefit Transfer (DBT) of ₹2,000 for the 18th tranche of PM-Kisan is being disbursed. Farmers must ensure their Aadhaar is linked to NPCI bank seed and complete facial eKYC on the PM-Kisan mobile app.",
    officialUrl: "https://pmkisan.gov.in/",
    isUrgent: false
  },
  {
    id: "up_5",
    title: "National Lok Adalat Scheduled for Traffic E-Challan Settlement with 50% Concession",
    category: "legal",
    categoryName: "Legal Settlement",
    authority: "State Legal Services Authority (SLSA)",
    date: "12 October 2026",
    lastVerified: "17 October 2026",
    summary: "The upcoming National Lok Adalat will hear compounding cases for pending traffic electronic challans across metropolitan cities. Motorists can clear dues at a 50% statutory reduction before the court bench.",
    officialUrl: "https://echallan.parivahan.gov.in/",
    isUrgent: true
  }
];

const VERIFICATION_CHANNELS = [
  {
    name: "DigiLocker National Verifier",
    authority: "MeitY, Government of India",
    type: "Central Repository",
    docs: "Aadhaar, Driving License, Degree Certificates, Vehicle RC",
    howTo: "Scan QR code on certificate using the DigiLocker App or verify document URI on portal.",
    url: "https://www.digilocker.gov.in/",
    icon: "fa-shield-halved"
  },
  {
    name: "Bhoomi Karnataka Land Records",
    authority: "Revenue Dept, Karnataka",
    type: "State Land Registry",
    docs: "RTC / Pahani, Mutation Extracts (Form 21), Tippani",
    howTo: "Enter District, Taluk, Hobli, Village, and Survey No to verify official land ownership.",
    url: "https://landrecords.karnataka.gov.in/",
    icon: "fa-seedling"
  },
  {
    name: "Parivahan Sewa E-Portal",
    authority: "Ministry of Road Transport (MoRTH)",
    type: "National Transport Registry",
    docs: "Driving License, RC Status, E-Challan Authenticity",
    howTo: "Check license validity and vehicle insurance/PUC status in the national VAHAN & SARATHI database.",
    url: "https://parivahan.gov.in/",
    icon: "fa-car"
  },
  {
    name: "UIDAI Aadhaar Verifier",
    authority: "Unique Identification Authority of India",
    type: "Identity Registry",
    docs: "Aadhaar Card, Masked Aadhaar, PVC Card",
    howTo: "Use mAadhaar QR Scanner to read the cryptographically signed UIDAI certificate.",
    url: "https://myaadhaar.uidai.gov.in/verify-aadhaar",
    icon: "fa-fingerprint"
  },
  {
    name: "Income Tax e-Filing & PAN Verifier",
    authority: "Central Board of Direct Taxes (CBDT)",
    type: "Taxation Registry",
    docs: "PAN Card Authenticity, Form 26AS, Tax Deductions",
    howTo: "Enter PAN, Full Name, and Date of Birth to confirm 'PAN is Active and Details are matching'.",
    url: "https://www.incometax.gov.in/",
    icon: "fa-file-invoice-dollar"
  },
  {
    name: "Nadakacheri Revenue Verification",
    authority: "Atalji Janasnehi Kendra, Karnataka",
    type: "State Certificate Registry",
    docs: "Caste, Income, Domicile, Living, Landless Certificates",
    howTo: "Enter 15-digit RD Application Number (e.g., RD0038...) to verify Tahsildar approval.",
    url: "https://nadakacheri.karnataka.gov.in/",
    icon: "fa-certificate"
  }
];

function initUpdatesPage() {
  renderUpdatesFeed("all");
  renderVerificationChannels();

  const filterBtns = document.querySelectorAll(".update-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-cat");
      renderUpdatesFeed(cat);
    });
  });
}

function renderUpdatesFeed(category) {
  const container = document.getElementById("updatesFeedContainer");
  if (!container) return;

  const filtered = category === "all" 
    ? GOVT_UPDATES_FEED 
    : GOVT_UPDATES_FEED.filter(item => item.category === category);

  container.innerHTML = "";

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.marginBottom = "1.25rem";
    card.style.borderLeft = item.isUrgent ? "5px solid #dc2626" : "5px solid var(--primary-blue)";

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
        <div>
          ${item.isUrgent ? '<span class="badge badge-urgent" style="margin-right: 6px;"><i class="fa-solid fa-bell"></i> Urgent</span>' : ''}
          <span class="badge badge-official"><i class="fa-solid fa-landmark"></i> ${item.categoryName}</span>
        </div>
        <div style="font-size: 0.78rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.75rem;">
          <span><i class="fa-regular fa-calendar"></i> ${item.date}</span>
          <span class="badge" style="background: var(--bg-alt); color: var(--text-secondary);"><i class="fa-solid fa-clock-rotate-left text-green"></i> Verified: ${item.lastVerified}</span>
        </div>
      </div>

      <h3 style="font-size: 1.2rem; margin-bottom: 0.4rem;">${item.title}</h3>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
        <i class="fa-solid fa-building-columns"></i> ${item.authority}
      </div>
      <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
        ${item.summary}
      </p>

      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-light); padding-top: 0.85rem;">
        <span style="font-size: 0.8rem; color: var(--text-muted);"><i class="fa-solid fa-circle-check text-green"></i> Verified Official Government Source</span>
        <a href="${item.officialUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          Visit Official Portal <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderVerificationChannels() {
  const container = document.getElementById("verificationChannelsGrid");
  if (!container) return;

  container.innerHTML = "";

  VERIFICATION_CHANNELS.forEach(channel => {
    const card = document.createElement("div");
    card.className = "card card-interactive";
    card.onclick = () => window.open(channel.url, "_blank");

    card.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.85rem; margin-bottom: 1rem;">
        <div style="width: 44px; height: 44px; border-radius: var(--radius-md); background: var(--primary-surface); color: var(--primary-blue); display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
          <i class="fa-solid ${channel.icon}"></i>
        </div>
        <div>
          <h4 style="font-size: 1.05rem; margin-bottom: 2px;">${channel.name}</h4>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${channel.authority}</span>
        </div>
      </div>

      <div style="font-size: 0.82rem; margin-bottom: 0.75rem;">
        <strong style="color: var(--text-primary);">Verifies:</strong> <span style="color: var(--text-secondary);">${channel.docs}</span>
      </div>

      <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem; background: var(--bg-alt); padding: 0.75rem; border-radius: var(--radius-sm);">
        <i class="fa-solid fa-info-circle text-primary"></i> ${channel.howTo}
      </p>

      <div style="display: flex; justify-content: flex-end;">
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--primary-blue);">
          Open Portal <i class="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", initUpdatesPage);
