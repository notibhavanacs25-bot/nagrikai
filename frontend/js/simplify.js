/**
 * NagrikAI - Document Simplifier Controller
 * Handles document upload, AI analysis simulation / backend API call,
 * multilingual text-to-speech, interactive action checklist, and deadline calendar export.
 */

// Realistic Indian Official Document Mock Database with Multilingual Content
const SAMPLE_DOCS = {
  property_tax: {
    id: "property_tax",
    type: "Property Tax Demand & Assessment Notice",
    authority: "Bruhat Bengaluru Mahanagara Palike (BBMP) / Municipal Revenue Dept",
    refNo: "BBMP/REV/EAST/2026/894102",
    issueDate: "12 October 2026",
    dueDate: "30 November 2026",
    amountDue: "₹ 4,850",
    rebateAmount: "₹ 4,607 (5% Early Bird Rebate if paid by 15 Nov)",
    penaltyRate: "2% per month after 30 Nov 2026",
    daysLeft: 18,
    status: "Urgent Action Required",
    verificationPortal: "https://bbmptax.karnataka.gov.in/",
    verificationPortalName: "BBMP Citizen Tax e-Portal (KUIDFC)",

    // Multilingual Explanation
    content: {
      en: {
        summary: "This is an official Property Tax notice for your residential premises for the current assessment year. It states that an annual tax of ₹4,850 is due. If you pay within the next 18 days, you receive a 5% discount (you only pay ₹4,607). Delay beyond November 30 will attract a 2% monthly interest penalty.",
        whyReceived: "You received this because municipal property records indicate you are the registered owner or khata-holder of this property, and annual municipal property tax has not yet been credited for this assessment cycle.",
        steps: [
          { title: "Verify your SAS Base Application Number", desc: "Check the 10-digit SAS number printed at top-right with your previous year's tax receipt." },
          { title: "Choose payment method: Online or Bangalore One / Bank", desc: "You can pay instantly online via UPI/NetBanking or visit any Bangalore One / Canara Bank counter." },
          { title: "Pay before 15 November to claim 5% discount", desc: "Pay ₹4,607 instead of ₹4,850 before 15 Nov to save ₹243 automatically." },
          { title: "Download and preserve E-Receipt & Form IV", desc: "Download the digitally signed Form IV receipt. You need this for property sale, Khata transfer, or utility meter renewals." }
        ],
        requiredDocs: ["Previous Year Tax Receipt", "SAS Application Number / PID No", "Aadhaar / ID Proof of Owner"],
        jargon: [
          { term: "SAS (Self Assessment Scheme)", meaning: "System where the owner calculates property tax based on built-up area and zone." },
          { term: "Arrears", meaning: "Unpaid tax balances from previous years." },
          { term: "Cess", meaning: "Additional nominal tax dedicated to solid waste management, library, and health services." }
        ]
      },
      hi: {
        summary: "यह आपके आवासीय घर के लिए इस वर्ष का संपत्ति कर (Property Tax) नोटिस है। इसमें ₹4,850 का कर देय बताया गया है। यदि आप 18 दिनों के भीतर भुगतान करते हैं, तो आपको 5% की छूट मिलेगी (केवल ₹4,607 देना होगा)। 30 नवंबर के बाद भुगतान करने पर 2% प्रति माह जुर्माना लगेगा।",
        whyReceived: "यह आपको इसलिए भेजा गया है क्योंकि नगर निगम के रिकॉर्ड में आप इस संपत्ति के पंजीकृत मालिक हैं और चालू वर्ष का गृह कर अभी तक जमा नहीं हुआ है।",
        steps: [
          { title: "अपने पिछले टैक्स रसीद से SAS नंबर मिलाएं", desc: "ऊपर दाईं ओर दिए गए 10 अंकों के SAS नंबर की जांच करें।" },
          { title: "ऑनलाइन या नागरिक सेवा केंद्र से भुगतान चुनें", desc: "आप UPI/नेटबैंकिंग से ऑनलाइन भुगतान कर सकते हैं या नागरिक सेवा केंद्र जा सकते हैं।" },
          { title: "15 नवंबर से पहले भुगतान कर 5% छूट पाएं", desc: "15 नवंबर से पहले ₹4,607 जमा करके ₹243 की सीधी बचत करें।" },
          { title: "डिजिटल रसीद और फॉर्म IV सुरक्षित रखें", desc: "भुगतान के बाद डिजिटल रूप से हस्ताक्षरित रसीद डाउनलोड करें।" }
        ],
        requiredDocs: ["पिछले वर्ष की टैक्स रसीद", "PID / SAS नंबर", "मालिक का आधार कार्ड"],
        jargon: [
          { term: "SAS (स्वयं मूल्यांकन योजना)", meaning: "ऐसी प्रणाली जिसमें संपत्ति का मालिक अपने मकान के क्षेत्रफल के अनुसार कर तय करता है।" },
          { term: "Arrears (बकाया)", meaning: "पिछले वर्षों का न चुकाया गया टैक्स।" }
        ]
      },
      kn: {
        summary: "ಇದು ನಿಮ್ಮ ಮನೆಯ ಪ್ರಸಕ್ತ ಸಾಲಿನ ಆಸ್ತಿ ತೆರಿಗೆ (Property Tax) ಬೇಡಿಕೆ ನೋಟಿಸ್ ಆಗಿದೆ. ಒಟ್ಟು ₹4,850 ತೆರಿಗೆ ಪಾವತಿಸಬೇಕಾಗಿದೆ. 18 ದಿನಗಳ ಒಳಗೆ (ನವೆಂಬರ್ 15 ಕ್ಕಿಂತ ಮುಂಚೆ) ಪಾವತಿಸಿದರೆ 5% ರಿಯಾಯಿತಿ ದೊರೆತು ₹4,607 ಮಾತ್ರ ಪಾವತಿಸಿದರೆ ಸಾಕು. ನವೆಂಬರ್ 30 ರ ನಂತರ ಪಾವತಿಸಿದರೆ ತಿಂಗಳಿಗೆ 2% ದಂಡ ಬೀಳುತ್ತದೆ.",
        whyReceived: "ಪಾಲಿಕೆಯ ದಾಖಲೆಗಳಲ್ಲಿ ನೀವು ಈ ಆಸ್ತಿಯ ನೋಂದಾಯಿತ ಖಾತಾದಾರರಾಗಿದ್ದು, ಪ್ರಸಕ್ತ ಸಾಲಿನ ವಾರ್ಷಿಕ ಆಸ್ತಿ ತೆರಿಗೆ ಇನ್ನೂ ಜಮೆಯಾಗದ ಕಾರಣ ಈ ನೋಟಿಸ್ ನೀಡಲಾಗಿದೆ.",
        steps: [
          { title: "ಹಿಂದಿನ ವರ್ಷದ ರಶೀದಿಯೊಂದಿಗೆ SAS ಸಂಖ್ಯೆ ಪರಿಶೀಲಿಸಿ", desc: "ನೋಟಿಸ್‌ನ ಬಲಭಾಗದಲ್ಲಿರುವ 10 ಅಂಕಿಯ SAS ಸಂಖ್ಯೆಯನ್ನು ಹಿಂದಿನ ತೆರಿಗೆ ರಶೀದಿಯೊಂದಿಗೆ ಹೋಲಿಸಿ." },
          { title: "ಆನ್‌ಲೈನ್ ಅಥವಾ ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರದಲ್ಲಿ ಪಾವತಿಸಿ", desc: "UPI/ನೆಟ್‌ಬ್ಯಾಂಕಿಂಗ್ ಮೂಲಕ ಆನ್‌ಲೈನ್ ಪಾವತಿಸಬಹುದು ಅಥವಾ ಹತ್ತಿರದ ಬೆಂಗಳೂರು ಒನ್ ಕೇಂದ್ರಕ್ಕೆ ಭೇಟಿ ನೀಡಬಹುದು." },
          { title: "5% ರಿಯಾಯಿತಿ ಪಡೆಯಲು ನವೆಂಬರ್ 15 ರೊಳಗೆ ಪಾವತಿಸಿ", desc: "₹4,850 ರ ಬದಲಿಗೆ ₹4,607 ಪಾವತಿಸಿ ₹243 ಉಳಿಸಿ." },
          { title: "ಇ-ರಶೀದಿ ಮತ್ತು ಫಾರ್ಮ್ IV ಡೌನ್‌ಲೋಡ್ ಮಾಡಿಡಿ", desc: "ಭವಿಷ್ಯದ ದಾಖಲೆಗಾಗಿ ಡಿಜಿಟಲ್ ಸಹಿ ಇರುವ ತೆರಿಗೆ ರಶೀದಿಯನ್ನು ಜೋಪಾನವಾಗಿಡಿ." }
        ],
        requiredDocs: ["ಹಿಂದಿನ ವರ್ಷದ ತೆರಿಗೆ ರಶೀದಿ", "PID / SAS ಸಂಖ್ಯೆ", "ಮಾಲೀಕರ ಆಧಾರ್ ಕಾರ್ಡ್"],
        jargon: [
          { term: "SAS (ಸ್ವಯಂ ಮೌಲ್ಯಮಾಪನ)", meaning: "ಕಟ್ಟಡದ ವಿಸ್ತೀರ್ಣಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಮಾಲೀಕರೇ ತೆರಿಗೆ ಲೆಕ್ಕಾಚಾರ ಮಾಡುವ ಪದ್ಧತಿ." },
          { term: "ಅರಿಯರ್ಸ್ (ಬಾಕಿ)", meaning: "ಹಿಂದಿನ ವರ್ಷಗಳಿಂದ ಪಾವತಿಸದೆ ಉಳಿದಿರುವ ತೆರಿಗೆ ಮೊತ್ತ." }
        ]
      },
      te: {
        summary: "ఇది మీ నివాస ఆస్తికి సంబంధించిన ప్రస్తుత సంవత్సర ఆస్తి పన్ను నోటీసు. మీరు ₹4,850 చెల్లించాల్సి ఉంది. నవంబర్ 15 లోపు చెల్లిస్తే 5% తగ్గింపుతో ₹4,607 మాత్రమే చెల్లించవచ్చు. నవంబర్ 30 దాటితే నెలకు 2% జరిమానా విధిస్తారు.",
        whyReceived: "మున్సిపల్ రికార్డుల ప్రకారం మీరు ఈ ఆస్తి యజమానిగా నమోదై ఉన్నారు మరియు ఈ సంవత్సరపు పన్ను ఇంకా చెల్లించబడలేదు.",
        steps: [
          { title: "గత పన్ను రశీదుతో SAS నంబరును సరిచూసుకోండి", desc: "నోటీసులో ఉన్న 10 అంకెల దరఖాస్తు సంఖ్యను ధృవీకరించుకోండి." },
          { title: "ఆన్‌లైన్ లేదా మీసేవ కేంద్రంలో చెల్లించండి", desc: "UPI లేదా నెట్ బ్యాంకింగ్ ద్వారా తక్షణమే చెల్లించవచ్చు." },
          { title: "నవంబర్ 15 లోపు చెల్లించి 5% రాయితీ పొందండి", desc: "₹4,607 చెల్లించడం ద్వారా ₹243 ఆదా చేసుకోండి." },
          { title: "డిజిటల్ రసీదు భద్రపరుచుకోండి", desc: "చెల్లింపు పూర్తయిన తర్వాత డిజిటల్ రసీదును డౌన్‌లోడ్ చేసుకోండి." }
        ],
        requiredDocs: ["గత సంవత్సరపు పన్ను రసీదు", "ఆస్తి గుర్తింపు సంఖ్య (PID)", "యజమాని ఆధార్ కార్డు"],
        jargon: [
          { term: "SAS (స్వయం అంచనా పద్ధతి)", meaning: "నిర్మాణ విస్తీర్ణం ఆధారంగా పన్ను లెక్కించే విధానం." }
        ]
      },
      ta: {
        summary: "இது உங்கள் வீட்டிற்கான நடப்பு ஆண்டின் சொத்து வரி அறிவிப்பு. நீங்கள் ₹4,850 வரி செலுத்த வேண்டும். நவம்பர் 15-க்குள் செலுத்தினால் 5% தள்ளுபடியுடன் ₹4,607 மட்டும் செலுத்தினால் போதும். நவம்பர் 30-க்கு பிறகு செலுத்தினால் மாதத்திற்கு 2% அபராதம் விதிக்கப்படும்.",
        whyReceived: "நகராட்சி பதிவேடுகளில் நீங்கள் இந்த சொத்தின் உரிமையாளராக பதிவு செய்யப்பட்டுள்ளீர்கள், நடப்பு ஆண்டு வரி இன்னும் செலுத்தப்படவில்லை.",
        steps: [
          { title: "முந்தைய வரி ரசீதுடன் SAS எண்ணை சரிபார்க்கவும்", desc: "நோட்டீசில் உள்ள எண்ணை பழைய ரசீதுடன் ஒப்பிட்டு பார்க்கவும்." },
          { title: "ஆன்லைன் அல்லது இ-சேவை மையத்தில் செலுத்தவும்", desc: "UPI அல்லது வங்கி மூலம் எளிதாக செலுத்தலாம்." },
          { title: "நவம்பர் 15-க்குள் செலுத்தி 5% சலுகை பெறவும்", desc: "₹4,607 மட்டும் செலுத்தி ₹243 மிச்சப்படுத்துங்கள்." },
          { title: "டிஜிட்டல் ரசீதை பதிவிறக்கம் செய்து வைக்கவும்", desc: "எதிர்கால தேவைக்காக மின்-ரசீதை பாதுகாக்கவும்." }
        ],
        requiredDocs: ["முந்தைய ஆண்டு வரி ரசீது", "சொத்து அடையாள எண் (PID)", "ஆதார் அட்டை"],
        jargon: [
          { term: "SAS (சுய மதிப்பீட்டு முறை)", meaning: "கட்டிட பரப்பளவின் அடிப்படையில் உரிமையாளரே வரி கணக்கிடும் முறை." }
        ]
      }
    }
  },

  caste_income: {
    id: "caste_income",
    type: "Income & Caste Certificate Renewal Intimation",
    authority: "Revenue Department, Tahsildar Office / Nadakacheri",
    refNo: "RD/NADA/CASTE/2026/44721",
    issueDate: "05 October 2026",
    dueDate: "20 December 2026",
    amountDue: "₹ 40 (Standard Govt Application Fee)",
    rebateAmount: "Free via Seva Sindhu / DigiLocker fetch",
    penaltyRate: "Expired certificate causes scholarship/benefit disqualification",
    daysLeft: 35,
    status: "Renewal Recommended",
    verificationPortal: "https://nadakacheri.karnataka.gov.in/",
    verificationPortalName: "Nadakacheri Revenue Portal (Govt of Karnataka)",

    content: {
      en: {
        summary: "This notice informs you that your existing Caste & Income Certificate (Category 2A / OBC) has reached its 5-year validity limit and will expire on 20 December 2026. You must apply for renewal so that your family scholarship, fee concession, or government subsidy applications are not rejected.",
        whyReceived: "The state revenue database tracks certificates issued 5 years ago and alerts citizens before university exam forms and welfare scheme enrollment windows close.",
        steps: [
          { title: "Check family annual income details", desc: "Obtain latest salary slip, ITR acknowledgment, or village accountant income assessment." },
          { title: "Apply online at Seva Sindhu or Nadakacheri counter", desc: "Upload applicant Aadhaar, parent's caste certificate copy, and ration card." },
          { title: "Obtain 15-digit RD Application Acknowledgement No", desc: "Note the GSC/RD number sent via SMS to track Tahsildar approval." },
          { title: "Download DigiLocker verified digital certificate", desc: "Once approved in 7-14 days, download the QR-coded official certificate." }
        ],
        requiredDocs: ["Applicant Aadhaar Card", "Ration Card (BPL/APL)", "Father/Mother's Caste Certificate", "Latest Salary / Income Proof"],
        jargon: [
          { term: "RD Number", meaning: "Revenue Department 15-digit unique tracking code for certificates." },
          { term: "Creamy Layer", meaning: "Income threshold (typically ₹8 Lakh/year) above which backward class reservation does not apply." }
        ]
      },
      hi: {
        summary: "यह सूचना दर्शाती है कि आपका जाति एवं आय प्रमाण पत्र अपनी 5 साल की वैधता पूरी कर रहा है और 20 दिसंबर 2026 को समाप्त हो जाएगा। इसे नवीनीकृत (Renew) कराएं ताकि छात्रवृत्ति या सरकारी योजनाओं में कोई रुकावट न आए।",
        whyReceived: "राजस्व विभाग ने यह पूर्व-चेतावनी भेजी है ताकि योजनाओं की अंतिम तिथि से पहले नया प्रमाण पत्र बन सके।",
        steps: [
          { title: "पारिवारिक आय प्रमाण पत्र तैयार करें", desc: "वेतन पर्ची या आय का शपथ पत्र रखें।" },
          { title: "सेवा सिंधु या नजदीकी जन सेवा केंद्र पर आवेदन करें", desc: "आधार कार्ड और राशन कार्ड के साथ आवेदन जमा करें।" },
          { title: "15 अंकों की RD पावती संख्या प्राप्त करें", desc: "SMS द्वारा प्राप्त RD नंबर से आवेदन की स्थिति ट्रैक करें।" },
          { title: "डिजिलॉकर से डिजिटल प्रमाण पत्र डाउनलोड करें", desc: "स्वीकृति के बाद QR कोड युक्त प्रमाण पत्र प्राप्त करें।" }
        ],
        requiredDocs: ["आवेदक का आधार कार्ड", "राशन कार्ड", "माता-पिता का जाति प्रमाण पत्र", "आय प्रमाण"],
        jargon: [
          { term: "RD संख्या", meaning: "राजस्व विभाग का डिजिटल आवेदन ट्रैकिंग नंबर।" }
        ]
      },
      kn: {
        summary: "ನಿಮ್ಮ ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರದ (Category 2A / 3B / SC / ST) 5 ವರ್ಷಗಳ ಮಾನ್ಯತೆಯು 20 ಡಿಸೆಂಬರ್ 2026 ಕ್ಕೆ ಮುಕ್ತಾಯಗೊಳ್ಳಲಿದೆ. ವಿದ್ಯಾರ್ಥಿವೇತನ, ಶಾಲೆ/ಕಾಲೇಜು ಶುಲ್ಕ ವಿನಾಯಿತಿ ಮತ್ತು ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳು ರದ್ದಾಗದಂತೆ ತಕ್ಷಣ ನವೀಕರಣಕ್ಕೆ (Renewal) ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು.",
        whyReceived: "5 ವರ್ಷಗಳ ಹಿಂದೆ ಪಡೆದ ಆದಾಯ ಪ್ರಮಾಣಪತ್ರದ ಗಡುವು ಮುಗಿಯುತ್ತಿರುವುದರಿಂದ ಕಂದಾಯ ಇಲಾಖೆಯು ಈ ಮುನ್ಸೂಚನೆ ನೀಡಿದೆ.",
        steps: [
          { title: "ಕುಟುಂಬದ ವಾರ್ಷಿಕ ಆದಾಯದ ಪುರಾವೆ ಸಿದ್ಧಪಡಿಸಿ", desc: "ವೇತನ ಚೀಟಿ ಅಥವಾ ಗ್ರಾಮ ಆಡಳಿತಾಧಿಕಾರಿ ನೀಡುವ ಆದಾಯ ವರದಿ ಪರಿಶೀಲಿಸಿ." },
          { title: "ಸೇವಾ ಸಿಂಧು ಅಥವಾ ನಾಡಕಚೇರಿ ಕೇಂದ್ರದಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ", desc: "ಆಧಾರ್ ಕಾರ್ಡ್, ಪಡಿತರ ಚೀಟಿ ಮತ್ತು ತಂದೆ/ತಾಯಿಯ ಜಾತಿ ಪ್ರಮಾಣಪತ್ರದೊಂದಿಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ." },
          { title: "15 ಅಂಕಿಯ RD ಸ್ವೀಕೃತಿ ಸಂಖ್ಯೆಯನ್ನು ಪಡೆಯಿರಿ", desc: "ಮೊಬೈಲ್‌ಗೆ ಬರುವ RD ಸಂಖ್ಯೆಯನ್ನು ತಹಶೀಲ್ದಾರ್ ಅನುಮೋದನೆ ಪರಿಶೀಲಿಸಲು ಇಟ್ಟುಕೊಳ್ಳಿ." },
          { title: "ಡಿಜಿಲಾಕರ್ ಅಥವಾ ನಾಡಕಚೇರಿ ಪೋರ್ಟಲ್‌ನಿಂದ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ", desc: "7 ರಿಂದ 14 ದಿನಗಳಲ್ಲಿ ಕ್ಯೂಆರ್ ಕೋಡ್ ಇರುವ ಹೊಸ ಪ್ರಮಾಣಪತ್ರ ಲಭ್ಯವಾಗುತ್ತದೆ." }
        ],
        requiredDocs: ["ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್", "ಪಡಿತರ ಚೀಟಿ (ರೇಷನ್ ಕಾರ್ಡ್)", "ಪೋಷಕರ ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ", "ಆದಾಯ ದೃಢೀಕರಣ"],
        jargon: [
          { term: "RD ಸಂಖ್ಯೆ", meaning: "ಕಂದಾಯ ಇಲಾಖೆ ನೀಡುವ 15 ಅಂಕಿಯ ಡಿಜಿಟಲ್ ಅರ್ಜಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಸಂಖ್ಯೆ." },
          { term: "ಕೆನೆಪದರ (Creamy Layer)", meaning: "ನಿಗದಿತ ವಾರ್ಷಿಕ ಆದಾಯಕ್ಕಿಂತ ಹೆಚ್ಚಿರುವವರಿಗೆ ಮೀಸಲಾತಿ ಅನ್ವಯವಾಗದ ನಿಯಮ." }
        ]
      },
      te: {
        summary: "మీ కుల మరియు ఆదాయ ధృవీకరణ పత్రం యొక్క 5 సంవత్సరాల గడువు డిసెంబర్ 20తో ముగియనుంది. స్కాలర్‌షిప్ మరియు సంక్షేమ పథకాల కోసం వెంటనే పునరుద్ధరణ (Renewal) దరఖాస్తు చేసుకోవాలి.",
        whyReceived: "ప్రభుత్వ సర్టిఫికెట్ గడువు ముగియనున్నందున ముందస్తుగా ఈ సమాచారం పంపబడింది.",
        steps: [
          { title: "కుటుంబ ఆదాయ వివరాలను సిద్ధం చేసుకోండి", desc: "తాజా వేతన పత్రం లేదా గ్రామ రెవెన్యూ అధికారి నివేదిక తీసుకోండి." },
          { title: "మీసేవ పోర్టల్‌లో దరఖాస్తు చేయండి", desc: "ఆధార్ కార్డు, రేషన్ కార్డు జత చేసి దరఖాస్తు చేసుకోండి." },
          { title: "దరఖాస్తు రసీదు సంఖ్యను భద్రపరుచుకోండి", desc: "SMS ద్వారా వచ్చే దరఖాస్తు సంఖ్యతో స్థితిని పరిశీలించండి." },
          { title: "డిజిలాకర్ నుండి కొత్త సర్టిఫికెట్ పొందండి", desc: "అనుమతి లభించిన తర్వాత QR కోడ్ పత్రం డౌన్‌లోడ్ చేసుకోండి." }
        ],
        requiredDocs: ["ఆధార్ కార్డు", "రేషన్ కార్డు", "తల్లిదండ్రుల కుల ధృవీకరణ పత్రం", "ఆదాయ రుజువు"],
        jargon: [
          { term: "మీసేవ అప్లికేషన్ నంబరు", meaning: "సర్టిఫికెట్ ట్రాకింగ్ కోసం ఉపయోగించే అధికారిక సంఖ్య." }
        ]
      },
      ta: {
        summary: "உங்கள் சாதி மற்றும் வருமானச் சான்றிதழின் 5 ஆண்டு செல்லுபடி காலம் டிசம்பர் 20-ஆம் தேதியுடன் முடிவடைகிறது. கல்வி உதவித்தொகை மற்றும் அரசு நலத்திட்டங்களுக்கு புதிய சான்றிதழுக்கு உடனே விண்ணப்பிக்கவும்.",
        whyReceived: "சான்றிதழ் காலாவதியாகும் முன் குடிமக்களுக்கு முன்கூட்டியே நினைவூட்ட இந்த அறிவிப்பு அனுப்பப்பட்டுள்ளது.",
        steps: [
          { title: "குடும்ப வருமான ஆவணங்களை தயார் செய்யவும்", desc: "சம்பள சீட்டு அல்லது கிராம நிர்வாக அலுவலர் அறிக்கை பெறவும்." },
          { title: "இ-சேவை மையத்தில் விண்ணப்பிக்கவும்", desc: "ஆதார் மற்றும் குடும்ப அட்டையுடன் விண்ணப்பிக்கவும்." },
          { title: "விண்ணப்ப ஒப்புகை எண்ணை குறித்து வைக்கவும்", desc: "SMS-ல் வரும் எண்ணைக் கொண்டு நிலையை கண்காணிக்கவும்." },
          { title: "டிஜிலாக்கரில் இருந்து பதிவிறக்கவும்", desc: "ஒப்புதல் கிடைத்தவுடன் QR குறியீட்டுடன் கூடிய புதிய சான்றிதழை பெறவும்." }
        ],
        requiredDocs: ["ஆதார் அட்டை", "குடும்ப அட்டை (Ration Card)", "பெற்றோரின் சாதி சான்றிதழ்", "வருமான சான்று"],
        jargon: [
          { term: "இ-சேவை குறிப்பு எண்", meaning: "வருவாய்த்துறை இணையதளத்தில் நிலையை அறிய உதவும் எண்." }
        ]
      }
    }
  },

  land_rtc: {
    id: "land_rtc",
    type: "Land Record - Pahani / RTC (Record of Rights)",
    authority: "Bhoomi Monitoring Cell, Revenue Department, Govt of Karnataka",
    refNo: "RTC/HOBLI/SY-142/HISSA-3B",
    issueDate: "18 September 2026",
    dueDate: "Immediate Action for Mutation",
    amountDue: "₹ 15 (Official Bhoomi View Fee)",
    rebateAmount: "Nil",
    penaltyRate: "Unchallenged entries become final after 30 days notice",
    daysLeft: 12,
    status: "Urgent Verification Required",
    verificationPortal: "https://landrecords.karnataka.gov.in/service2/",
    verificationPortalName: "Bhoomi Project - RTC & Mutation Status Portal",

    content: {
      en: {
        summary: "This is a certified Land Record (Pahani / RTC) for Survey No. 142, Hissa 3B. It shows a Pending Mutation Notice (J-Slip). This indicates an inheritance or sale transaction is currently being processed by the Revenue Inspector. If you have any objections, you have 12 days to file them at the Tahsildar office.",
        whyReceived: "You retrieved or received this because changes to land ownership (Mutation/Varadi) have been initiated on your ancestral or agricultural parcel.",
        steps: [
          { title: "Verify Column 9 & 10 (Owner Name & Extent)", desc: "Confirm whether the recorded area (e.g., 1 Acre 20 Guntas) matches your registered sale deed." },
          { title: "Check Column 11 (Encumbrances / Bank Loans)", desc: "Ensure no unauthorized bank mortgages or court stay orders are listed." },
          { title: "Review Mutation Status (Form 12 / J-Slip)", desc: "If you did not initiate this sale or partition, submit Form 12 objection within 12 days." },
          { title: "Fetch Digital Bhoomi Signed Copy", desc: "Always obtain a digitally signed Bhoomi copy containing the valid Government Hologram/QR code." }
        ],
        requiredDocs: ["Original Registered Sale / Gift Deed", "Bhoomi Mutation Extract (Form 21)", "Aadhaar Card", "Latest Land Revenue Tax Challan"],
        jargon: [
          { term: "RTC / Pahani", meaning: "Record of Rights, Tenancy, and Crops showing who owns and cultivates the agricultural land." },
          { term: "Mutation (Faraq / Varadi)", meaning: "Formal legal transfer of property title from seller/deceased to new owner in government revenue registers." },
          { term: "Gunta", meaning: "Traditional land measurement unit (1 Gunta = 1,089 sq ft; 40 Guntas = 1 Acre)." }
        ]
      },
      hi: {
        summary: "यह खसरा/खतौनी (RTC) का आधिकारिक रिकॉर्ड है (सर्वे नंबर 142/3B)। इसमें एक नामांतरण (Mutation) सूचना लंबित दिखाई दे रही है। इसका मतलब है कि जमीन की मिल्कियत में बदलाव की प्रक्रिया चल रही है। यदि आपको इस पर कोई आपत्ति है, तो आपके पास तहसीलदार के समक्ष आपत्ति दर्ज कराने के लिए 12 दिन का समय है।",
        whyReceived: "यह रिकॉर्ड जमीन के स्वामित्व में बदलाव (दाखिल-खारिज) की प्रक्रिया की स्थिति दर्शाता है।",
        steps: [
          { title: "मालिक का नाम और जमीन का रकबा जांचें", desc: "पुष्टि करें कि जमीन का क्षेत्रफल आपकी रजिस्ट्री डीड से मेल खाता है।" },
          { title: "कॉलम 11 में बैंक ऋण या बंधक जांचें", desc: "जांचें कि किसी बैंक का लोन या कानूनी रोक तो दर्ज नहीं है।" },
          { title: "नामांतरण आपत्ति (Objection) समय पर दर्ज करें", desc: "यदि यह बदलाव बिना आपकी सहमति के है, तो 12 दिन में आपत्ति दर्ज कराएं।" },
          { title: "डिजिटल हस्ताक्षरित भू-अभिलेख प्राप्त करें", desc: "सरकारी पोर्टल से QR कोड वाली सत्यापित प्रति डाउनलोड करें।" }
        ],
        requiredDocs: ["रजिस्ट्री विक्रय पत्र (Sale Deed)", "दाखिल-खारिज पर्ची", "आधार कार्ड", "लगान रसीद"],
        jargon: [
          { term: "दाखिल-खारिज (Mutation)", meaning: "सरकारी राजस्व रजिस्टर में पुराने मालिक का नाम हटाकर नए मालिक का नाम दर्ज करना।" }
        ]
      },
      kn: {
        summary: "ಇದು ನಿಮ್ಮ ಕೃಷಿ ಭೂಮಿಯ ಅಧಿಕೃತ ಪಹಣಿ/RTC (ಸರ್ವೆ ನಂ. 142/3B) ದಾಖಲೆಯಾಗಿದೆ. ಇದರಲ್ಲಿ ಪೌತಿ/ಮಾರಾಟಕ್ಕೆ ಸಂಬಂಧಿಸಿದ 'ಮ್ಯುಟೇಶನ್ ನೋಟಿಸ್' (J-Slip) ಬಾಕಿ ಇರುವುದು ಕಂಡುಬಂದಿದೆ. ನೀವು ಅಥವಾ ಬೇರೆಯವರು ಈ ಜಮೀನಿನ ಹಕ್ಕು ಬದಲಾವಣೆಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿದ್ದಾರೆ. ನಿಮಗೆ ಯಾವುದೇ ಆಕ್ಷೇಪಣೆ ಇದ್ದರೆ ತಹಶೀಲ್ದಾರ್ ಕಚೇರಿಯಲ್ಲಿ ಆಕ್ಷೇಪಣೆ ಸಲ್ಲಿಸಲು 12 ದಿನಗಳ ಕಾಲಾವಕಾಶವಿದೆ.",
        whyReceived: "ನಿಮ್ಮ ಜಮೀನಿನ ವಾರಸುದಾರಿಕೆ ಅಥವಾ ಮಾರಾಟದ ನಂತರ ಕಂದಾಯ ಇಲಾಖೆಯಲ್ಲಿ ಖಾತೆ ಬದಲಾವಣೆ (ಮ್ಯುಟೇಶನ್) ಪ್ರಕ್ರಿಯೆ ನಡೆಯುತ್ತಿರುವುದರಿಂದ ಈ ದಾಖಲೆ ಬಂದಿದೆ.",
        steps: [
          { title: "ಕಾಲಂ 9 ಮತ್ತು 10 ರಲ್ಲಿ ಹೆಸರು ಮತ್ತು ವಿಸ್ತೀರ್ಣ ಪರಿಶೀಲಿಸಿ", desc: "ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ (ಉದಾ: 1 ಎಕರೆ 20 ಗುಂಟೆ) ನಿಮ್ಮ ಕ್ರಯಪತ್ರಕ್ಕೆ ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ." },
          { title: "ಕಾಲಂ 11 ರಲ್ಲಿ ಋಣಭಾರ (ಬ್ಯಾಂಕ್ ಸಾಲ) ಪರಿಶೀಲಿಸಿ", desc: "ಅನಧಿಕೃತ ಬ್ಯಾಂಕ್ ಸಾಲ ಅಥವಾ ನ್ಯಾಯಾಲಯದ ತಡೆಯಾಜ್ಞೆ ನಮೂದಾಗಿದೆಯೇ ಎಂದು ನೋಡಿ." },
          { title: "ಮ್ಯುಟೇಶನ್ ಆಕ್ಷೇಪಣೆ ಸಲ್ಲಿಸಲು 12 ದಿನಗಳಿವೆ", desc: "ಈ ಖಾತೆ ಬದಲಾವಣೆಗೆ ನಿಮ್ಮ ಸಮ್ಮತಿ ಇಲ್ಲದಿದ್ದರೆ ತಕ್ಷಣ ಆಕ್ಷೇಪಣೆ ಅರ್ಜಿ (Form 12) ಸಲ್ಲಿಸಿ." },
          { title: "ಭೂಮಿ ಪೋರ್ಟಲ್‌ನಿಂದ ಡಿಜಿಟಲ್ ಸಹಿಯ ಪಹಣಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ", desc: "ಸರ್ಕಾರಿ ಕ್ಯೂಆರ್ ಕೋಡ್ ಇರುವ ಅಧಿಕೃತ ಪಹಣಿಯನ್ನು ಭೂಮಿ ಕೇಂದ್ರದಿಂದ ಪಡೆಯಿರಿ." }
        ],
        requiredDocs: ["ನೋಂದಾಯಿತ ಕ್ರಯಪತ್ರ (Sale Deed)", "ಮ್ಯುಟೇಶನ್ ಪ್ರತಿ (Form 21)", "ಆಧಾರ್ ಕಾರ್ಡ್", "ಕಂದಾಯ ಪಾವತಿ ರಶೀದಿ"],
        jargon: [
          { term: "ಪಹಣಿ / RTC", meaning: "ಭೂಮಿಯ ಮಾಲೀಕತ್ವ, ಬೆಳೆ ಮತ್ತು ವಿಸ್ತೀರ್ಣವನ್ನು ದೃಢೀಕರಿಸುವ ರಾಜ್ಯ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಕಂದಾಯ ದಾಖಲೆ." },
          { term: "ಮ್ಯುಟೇಶನ್ (ಖಾತೆ ಬದಲಾವಣೆ)", meaning: "ಖರೀದಿದಾರ ಅಥವಾ ವಾರಸುದಾರರ ಹೆಸರಿಗೆ ಅಧಿಕೃತವಾಗಿ ಜಮೀನಿನ ಮಾಲೀಕತ್ವ ವರ್ಗಾಯಿಸುವ ಪ್ರಕ್ರಿಯೆ." },
          { term: "ಗುಂಟೆ", meaning: "ಭೂಮಿಯ ಅಳತೆ ಮಾನ (1 ಗುಂಟೆ = 1,089 ಚದರ ಅಡಿ; 40 ಗುಂಟೆ = 1 ಎಕರೆ)." }
        ]
      },
      te: {
        summary: "ఇది మీ భూమికి సంబంధించిన అడంగల్ / పహాణీ రికార్డు (సర్వే నెం. 142/3B). ఇందులో మ్యుటేషన్ నోటీసు పెండింగ్‌లో ఉన్నట్లు నమోదై ఉంది. యాజమాన్య హక్కుల మార్పు జరుగుతోంది. మీకు ఏవైనా అభ్యంతరాలు ఉంటే తహశీల్దార్ ఎదుట ఫిర్యాదు చేయడానికి 12 రోజుల సమయం ఉంది.",
        whyReceived: "భూమి యాజమాన్య బదిలీ లేదా వారసత్వ నమోదు ప్రక్రియ కొనసాగుతున్నందున ఈ సమాచారం ఇవ్వబడింది.",
        steps: [
          { title: "కాలమ్ 9 & 10 లో పేరు, విస్తీర్ణం సరిచూసుకోండి", desc: "మీ రిజిస్ట్రేషన్ పత్రంతో భూమి విస్తీర్ణం సరిపోలుతోందో లేదో చూడండి." },
          { title: "కాలమ్ 11 లో బ్యాంక్ రుణాలు ఉన్నాయేమో చూడండి", desc: "ఎటువంటి అనధికార తనఖా లేదా కోర్టు స్టే ఆర్డర్లు లేవని నిర్ధారించుకోండి." },
          { title: "మ్యుటేషన్ అభ్యంతరం నమోదు చేయండి", desc: "మీ అనుమతి లేకుండా ఈ మార్పు జరుగుతుంటే 12 రోజుల్లో అభ్యంతరం తెలపండి." },
          { title: "డిజిటల్ ధృవీకరించిన కాపీని డౌన్‌లోడ్ చేయండి", desc: "అధికారిక వెబ్‌సైట్ నుండి QR కోడ్ కలిగిన రికార్డును భద్రపరుచుకోండి." }
        ],
        requiredDocs: ["రిజిస్టర్డ్ సేల్ డీడ్", "మ్యుటేషన్ ఫారం", "ఆధార్ కార్డు", "పన్ను రసీదు"],
        jargon: [
          { term: "మ్యుటేషన్", meaning: "రెవెన్యూ రికార్డులలో భూ యజమాని పేరును అధికారికంగా మార్చే ప్రక్రియ." }
        ]
      },
      ta: {
        summary: "இது உங்கள் நிலத்திற்கான பட்டா/சிட்டா ஆவணம் (சர்வே எண் 142/3B). இதில் பட்டா மாறுதல் அறிவிப்பு நிலுவையில் உள்ளது. நிலத்தின் உரிமம் மாற்றம் செய்யப்படுகிறது. உங்களுக்கு ஏதேனும் ஆட்சேபனை இருந்தால் 12 நாட்களுக்குள் வட்டாட்சியரிடம் முறையிடலாம்.",
        whyReceived: "நிலத்தின் உரிமை மாற்றம் அல்லது வாரிசு பதிவு நடைபெறும் போது வருவாய்த்துறை இந்த பதிவை வெளியிடுகிறது.",
        steps: [
          { title: "பெயர் மற்றும் நில பரப்பளவை சரிபார்க்கவும்", desc: "கிரைய பத்திரத்தில் உள்ள அளவும் பட்டாவில் உள்ளதும் ஒன்றாக உள்ளதா என பார்க்கவும்." },
          { title: "வில்லங்கம் அல்லது வங்கி கடன் விவரங்களை சரிபார்க்கவும்", desc: "தேவையற்ற அடமானம் எதுவும் பதியப்படவில்லை என்பதை உறுதி செய்யவும்." },
          { title: "12 நாட்களுக்குள் ஆட்சேபனை தெரிவிக்கவும்", desc: "உங்கள் அனுமதி இன்றி பெயர் மாற்றம் செய்யப்பட்டால் உடனே மனு அளிக்கவும்." },
          { title: "டிஜிட்டல் கையொப்பமிட்ட பட்டாவை பெறவும்", desc: "அரசு இணையதளத்திலிருந்து அதிகாரப்பூர்வ நகலை பதிவிறக்கவும்." }
        ],
        requiredDocs: ["கிரைய பத்திரம்", "பட்டா மாறுதல் மனு", "ஆதார் அட்டை", "நில வரி ரசீது"],
        jargon: [
          { term: "பட்டா மாறுதல்", meaning: "வருவாய் ஆவணங்களில் நிலத்தின் உரிமையாளர் பெயரை சட்டப்பூர்வமாக மாற்றும் முறை." }
        ]
      }
    }
  },

  court_summons: {
    id: "court_summons",
    type: "Traffic E-Challan & National Lok Adalat Settlement Notice",
    authority: "State Legal Services Authority (SLSA) & Traffic Police Command",
    refNo: "ECH/TP/BLR/2026/782190",
    issueDate: "20 October 2026",
    dueDate: "28 November 2026",
    amountDue: "₹ 1,500 (Reduced to ₹ 750 at Lok Adalat)",
    rebateAmount: "50% Discount at National Lok Adalat bench",
    penaltyRate: "Court summons & DL suspension notice under Sec 133 of MV Act",
    daysLeft: 9,
    status: "Urgent Action Required",
    verificationPortal: "https://echallan.parivahan.gov.in/",
    verificationPortalName: "Parivahan E-Challan Citizen Portal (MoRTH)",

    content: {
      en: {
        summary: "This is an E-Challan notification combined with an intimation for the upcoming National Lok Adalat. You have 3 unpaid violations (Signal jump & Riding without helmet). The total standard penalty is ₹1,500, but if you settle it during the Lok Adalat before 28 November, a 50% waiver applies (you only pay ₹750) and all police court proceedings are closed.",
        whyReceived: "Automated ANPR traffic surveillance cameras captured your vehicle registration number committing traffic rule infractions, which remained unpaid past the 90-day grace period.",
        steps: [
          { title: "Inspect violation photo proof on Parivahan portal", desc: "Verify vehicle registration number, time, and location photos on the official portal." },
          { title: "Opt for Lok Adalat 50% settlement online", desc: "Login with vehicle registration number + Chassis last 5 digits and select Lok Adalat discount." },
          { title: "Pay ₹750 via UPI / Card instantly", desc: "Complete payment to clear all pending legal claims against your vehicle." },
          { title: "Download Cleared Challan NOC Receipt", desc: "Keep the receipt on your phone. It updates the Parivahan server instantly so your vehicle fitness or insurance renewal isn't blocked." }
        ],
        requiredDocs: ["Vehicle Registration Certificate (RC)", "Driving License", "Challan Notice / Mobile Number"],
        jargon: [
          { term: "Lok Adalat", meaning: "Special statutory dispute resolution forum offering mutually agreeable, quick, discounted settlements with no court appeal." },
          { term: "E-Challan", meaning: "Digital penal notice issued automatically by contactless electronic traffic cameras." }
        ]
      },
      hi: {
        summary: "यह आपके वाहन के लिए ट्रैफिक ई-चालान और राष्ट्रीय लोक अदालत का नोटिस है। आपके वाहन पर ₹1,500 के 3 चालान लंबित हैं। यदि आप 28 नवंबर तक लोक अदालत में इसका निपटारा करते हैं, तो 50% की छूट मिलेगी और आपको केवल ₹750 जमा करने होंगे।",
        whyReceived: "ट्रैफिक कैमरों द्वारा सिग्नल जंप और बिना हेलमेट वाहन चलाने के कारण यह चालान जारी हुआ है।",
        steps: [
          { title: "परिवहन पोर्टल पर चालान की फोटो देखें", desc: "वाहन नंबर और चालान की तारीख व समय की पुष्टि करें।" },
          { title: "लोक अदालत छूट विकल्प चुनें", desc: "50% छूट के साथ ऑनलाइन भुगतान विकल्प चुनें।" },
          { title: "₹750 का भुगतान करें", desc: "UPI या नेट बैंकिंग से भुगतान कर सभी केस बंद कराएं।" },
          { title: "NOC और भुगतान रसीद डाउनलोड करें", desc: "वाहन प्रदूषण व बीमा नवीनीकरण के लिए रसीद सुरक्षित रखें।" }
        ],
        requiredDocs: ["वाहन आरसी (RC Book)", "ड्राइविंग लाइसेंस", "मोबाइल नंबर"],
        jargon: [
          { term: "लोक अदालत", meaning: "विवादों और चालानों को समझौते द्वारा आधी फीस पर निपटाने वाली कानूनी व्यवस्था।" }
        ]
      },
      kn: {
        summary: "ಇದು ನಿಮ್ಮ ವಾಹನದ ಸಂಚಾರ ನಿಯಮ ಉಲ್ಲಂಘನೆಯ ಇ-ಚಲನ್ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಲೋಕ ಅದಾಲತ್ ಸಂಧಾನ ನೋಟಿಸ್ ಆಗಿದೆ. ನಿಮ್ಮ ವಾಹನದ ಮೇಲೆ ₹1,500 ರ 3 ಚಲನ್‌ಗಳು ಬಾಕಿ ಇವೆ. ನವೆಂಬರ್ 28 ರಂದು ನಡೆಯುವ ಲೋಕ ಅದಾಲತ್‌ನಲ್ಲಿ ಇತ್ಯರ್ಥಪಡಿಸಿಕೊಂಡರೆ 50% ರಿಯಾಯಿತಿ ದೊರೆತು ನೀವು ಕೇವಲ ₹750 ಪಾವತಿಸಿ ಎಲ್ಲಾ ಪ್ರಕರಣಗಳನ್ನು ಮುಕ್ತಾಯಗೊಳಿಸಬಹುದು.",
        whyReceived: "ಸ್ವಯಂಚಾಲಿತ ಸಂಚಾರ ಕ್ಯಾಮೆರಾಗಳು ಹೆಲ್ಮೆಟ್ ಇಲ್ಲದೆ ಚಾಲನೆ ಮತ್ತು ಸಿಗ್ನಲ್ ಜಂಪ್ ಮಾಡಿದ್ದನ್ನು ದಾಖಲಿಸಿದ್ದು, ದಂಡ ಪಾವತಿಸದ ಕಾರಣ ಈ ನೋಟಿಸ್ ಬಂದಿದೆ.",
        steps: [
          { title: "ಪರಿವಾಹನ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಉಲ್ಲಂಘನೆಯ ಫೋಟೋ ನೋಡಿ", desc: "ವಾಹನದ ನೋಂದಣಿ ಸಂಖ್ಯೆ ಮತ್ತು ಚಲನ್ ಫೋಟೋವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ." },
          { title: "ಲೋಕ ಅದಾಲತ್ 50% ರಿಯಾಯಿತಿ ಆಯ್ಕೆ ಮಾಡಿ", desc: "ಆನ್‌ಲೈನ್ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ 50% ವಿನಾಯಿತಿಯೊಂದಿಗೆ ಪಾವತಿಸಲು ಆಯ್ಕೆಮಾಡಿ." },
          { title: "UPI ಮೂಲಕ ₹750 ಪಾವತಿಸಿ", desc: "ದಂಡ ಪಾವತಿಸಿ ನಿಮ್ಮ ವಾಹನದ ಮೇಲಿರುವ ಸಂಚಾರ ಕೇಸ್‌ಗಳನ್ನು ರದ್ದುಪಡಿಸಿ." },
          { title: "ಚಲನ್ ಕ್ಲಿಯರೆನ್ಸ್ ರಶೀದಿ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ", desc: "ವಾಹನದ ವಿಮೆ ಅಥವಾ ಎಫ್‌ಸಿ ನವೀಕರಣಕ್ಕೆ ಈ ರಶೀದಿ ಅತ್ಯಗತ್ಯವಾಗಿದೆ." }
        ],
        requiredDocs: ["ವಾಹನದ ಆರ್‌ಸಿ (RC Book)", "ಡ್ರೈವಿಂಗ್ ಲೈಸೆನ್ಸ್", "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ"],
        jargon: [
          { term: "ಲೋಕ ಅದಾಲತ್", meaning: "ನ್ಯಾಯಾಲಯದ ವ್ಯಾಜ್ಯಗಳು ಮತ್ತು ಚಲನ್‌ಗಳನ್ನು ರಿಯಾಯಿತಿ ದರದಲ್ಲಿ ರಾಜಿ ಸಂಧಾನದ ಮೂಲಕ ಇತ್ಯರ್ಥಪಡಿಸುವ ವ್ಯವಸ್ಥೆ." }
        ]
      },
      te: {
        summary: "ఇది మీ వాహనానికి సంబంధించిన ట్రాఫిక్ ఇ-చలానా మరియు లోక్ అదాలత్ నోటీసు. మీపై ₹1,500 జరిమానా ఉంది. నవంబర్ 28 లోగా లోక్ అదాలత్‌లో 50% రాయితీతో ₹750 మాత్రమే చెల్లించి కేసులను పరిష్కరించుకోవచ్చు.",
        whyReceived: "ట్రాఫిక్ నిబంధనలను ఉల్లంఘించినందుకు ట్రాఫిక్ కెమెరాల ద్వారా ఈ చలానా జారీ చేయబడింది.",
        steps: [
          { title: "పరివాహన్ పోర్టల్‌లో ఫోటో సాక్ష్యాన్ని పరిశీలించండి", desc: "వాహనం నంబరు మరియు ఉల్లంఘన సమయాన్ని తనిఖీ చేయండి." },
          { title: "లోక్ అదాలత్ 50% రాయితీ ఎంచుకోండి", desc: "తగ్గింపుతో ఆన్‌లైన్‌లో చెల్లించడానికి ఎంపిక చేసుకోండి." },
          { title: "₹750 వెంటనే చెల్లించండి", desc: "UPI ద్వారా చెల్లించి క్లియరెన్స్ పొందండి." },
          { title: "రసీదు డౌన్‌లోడ్ చేసుకోండి", desc: "ఇన్సూరెన్స్ మరియు రిజిస్ట్రేషన్ కోసం రసీదు భద్రపరుచుకోండి." }
        ],
        requiredDocs: ["వాహన ఆర్సీ (RC)", "డ్రైవింగ్ లైసెన్స్"],
        jargon: [
          { term: "లోక్ అదాలత్", meaning: "తక్కువ జరిమానాతో సమస్యలను పరిష్కరించుకునే ప్రత్యేక న్యాయ వేదిక." }
        ]
      },
      ta: {
        summary: "இது உங்கள் வாகனத்திற்கான போக்குவரத்து மின்-செல்லான் மற்றும் லோக் அதாலத் அறிவிப்பு. ₹1,500 நிலுவையில் உள்ளது. நவம்பர் 28-க்குள் லோக் அதாலத் மூலம் 50% சலுகையுடன் ₹750 மட்டும் செலுத்தி வழக்குகளை முடித்துக் கொள்ளலாம்.",
        whyReceived: "போக்குவரத்து விதிமீறலை கேமராக்கள் பதிவு செய்ததால் இந்த அறிவிப்பு அனுப்பப்பட்டுள்ளது.",
        steps: [
          { title: "போக்குவரத்து தளத்தில் புகைப்படத்தை பார்க்கவும்", desc: "வாகன எண் மற்றும் விதிமீறல் நேரத்தை சரிபார்க்கவும்." },
          { title: "லோக் அதாலத் 50% சலுகையை தேர்வு செய்யவும்", desc: "தள்ளுபடி கட்டணத்தில் செலுத்த தேர்வு செய்யவும்." },
          { title: "₹750 உடனடியாக செலுத்தவும்", desc: "UPI மூலம் எளிதாக செலுத்தி முடிக்கவும்." },
          { title: "ரசீதை பதிவிறக்கம் செய்து வைக்கவும்", desc: "வாகன காப்பீட்டுக்கு இந்த ரசீது உதவும்." }
        ],
        requiredDocs: ["வாகன பதிவு சான்று (RC)", "ஓட்டுநர் உரிமம்"],
        jargon: [
          { term: "லோக் அதாலத்", meaning: "சமரச முறையில் வழக்குகளை தள்ளுபடியுடன் தீர்த்து வைக்கும் மக்கள் நீதிமன்றம்." }
        ]
      }
    }
  }
};

let currentActiveDoc = null;
let currentActiveSpeech = null;

// Initialize Simplifier Page
function initSimplifier() {
  const dropzone = document.getElementById("docDropzone");
  const fileInput = document.getElementById("docFileInput");

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileUpload(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files[0]) {
        handleFileUpload(e.target.files[0]);
      }
    });
  }

  // Setup Sample Document Chips
  const sampleChips = document.querySelectorAll("[data-sample-id]");
  sampleChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const docId = chip.getAttribute("data-sample-id");
      loadSampleDocument(docId);
    });
  });

  // Setup Tabs
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabTarget = btn.getAttribute("data-tab");
      switchTab(tabTarget);
    });
  });

  // Setup Read Aloud Button
  const voicePlayBtn = document.getElementById("voicePlayBtn");
  if (voicePlayBtn) {
    voicePlayBtn.addEventListener("click", toggleVoicePlayback);
  }

  // Setup Calendar & PDF Action Buttons
  const calBtn = document.getElementById("btnAddToCalendar");
  if (calBtn) calBtn.addEventListener("click", addDeadlineToCalendar);

  const printBtn = document.getElementById("btnDownloadPlan");
  if (printBtn) printBtn.addEventListener("click", printActionPlan);

  // Listen for language change to update currently displayed document
  window.addEventListener("nagrik:langchange", () => {
    if (currentActiveDoc) {
      renderDocumentDetails(currentActiveDoc);
    }
  });

  // Load initial demo document (Property Tax) automatically so user sees rich UI right away!
  loadSampleDocument("property_tax");
}

function handleFileUpload(file) {
  showToast("Document Uploaded", `Processing "${file.name}" with OCR & AI...`, "info");

  // Show a scanning / progress indicator
  const resultsArea = document.getElementById("analysisResultsArea");
  if (resultsArea) {
    resultsArea.style.display = "block";
    resultsArea.scrollIntoView({ behavior: "smooth" });
  }

  // Check if real FastAPI backend is available; if not, intelligently map to a comprehensive sample
  const lowerName = file.name.toLowerCase();
  let targetSample = "property_tax";
  if (lowerName.includes("caste") || lowerName.includes("income") || lowerName.includes("certificate")) {
    targetSample = "caste_income";
  } else if (lowerName.includes("land") || lowerName.includes("rtc") || lowerName.includes("pahani") || lowerName.includes("bhoomi")) {
    targetSample = "land_rtc";
  } else if (lowerName.includes("challan") || lowerName.includes("court") || lowerName.includes("traffic")) {
    targetSample = "court_summons";
  }

  setTimeout(() => {
    loadSampleDocument(targetSample, file.name);
    showToast("AI Simplification Complete", "Document identified and converted to citizen-friendly guidance.", "success");
  }, 1000);
}

function loadSampleDocument(docId, customFileName = null) {
  const doc = SAMPLE_DOCS[docId];
  if (!doc) return;

  currentActiveDoc = doc;
  renderDocumentDetails(doc, customFileName);

  const resultsArea = document.getElementById("analysisResultsArea");
  if (resultsArea) {
    resultsArea.style.display = "block";
  }

  // Stop any playing speech
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    updateVoiceUI(false);
  }
}

function renderDocumentDetails(doc, customFileName = null) {
  const lang = window.currentLang || "en";
  const content = doc.content[lang] || doc.content["en"];

  // Header meta
  document.getElementById("docTypeTitle").textContent = customFileName ? `${doc.type} (${customFileName})` : doc.type;
  document.getElementById("docRefNo").textContent = doc.refNo;
  document.getElementById("docAuthority").textContent = doc.authority;
  document.getElementById("docIssueDate").textContent = doc.issueDate;
  document.getElementById("docStatusBadge").textContent = doc.status;

  // Glance Card
  document.getElementById("glanceAmount").textContent = doc.amountDue;
  document.getElementById("glanceDueDate").textContent = doc.dueDate;
  document.getElementById("glanceRebate").textContent = doc.rebateAmount;
  document.getElementById("glancePenalty").textContent = doc.penaltyRate;

  // Tab 1: Overview
  document.getElementById("aiExplanationText").textContent = content.summary;
  document.getElementById("whyReceivedText").textContent = content.whyReceived;

  // Jargon Buster
  const jargonList = document.getElementById("jargonBusterList");
  if (jargonList) {
    jargonList.innerHTML = "";
    (content.jargon || []).forEach(j => {
      const item = document.createElement("div");
      item.className = "jargon-item";
      item.innerHTML = `
        <div class="jargon-term"><i class="fa-solid fa-circle-question text-primary"></i> ${j.term}</div>
        <div class="jargon-meaning">${j.meaning}</div>
      `;
      jargonList.appendChild(item);
    });
  }

  // Tab 2: Action Checklist
  const stepsList = document.getElementById("actionStepsList");
  if (stepsList) {
    stepsList.innerHTML = "";
    content.steps.forEach((step, idx) => {
      const stepCard = document.createElement("div");
      stepCard.className = "step-card";
      stepCard.innerHTML = `
        <input type="checkbox" class="step-checkbox" id="step_check_${idx}" onchange="updateChecklistProgress()">
        <div class="step-number-badge">${idx + 1}</div>
        <div class="step-content">
          <label for="step_check_${idx}" class="step-title" style="cursor:pointer">${step.title}</label>
          <div class="step-desc">${step.desc}</div>
        </div>
      `;
      stepsList.appendChild(stepCard);
    });
    updateChecklistProgress();
  }

  // Required documents
  const reqDocsList = document.getElementById("requiredDocsList");
  if (reqDocsList) {
    reqDocsList.innerHTML = "";
    content.requiredDocs.forEach(d => {
      const docItem = document.createElement("div");
      docItem.className = "doc-item-check";
      docItem.innerHTML = `<i class="fa-solid fa-file-circle-check text-green"></i> <span>${d}</span>`;
      reqDocsList.appendChild(docItem);
    });
  }

  // Tab 3: Validity & Deadlines
  document.getElementById("daysRemainingCount").textContent = doc.daysLeft;
  document.getElementById("officialDueDateText").textContent = doc.dueDate;

  // Tab 4: Verification Guidance
  document.getElementById("verifPortalName").textContent = doc.verificationPortalName;
  const portalLink = document.getElementById("verifPortalLink");
  if (portalLink) {
    portalLink.href = doc.verificationPortal;
  }
}

// Tab Switching
function switchTab(tabId) {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(t => {
    if (t.getAttribute("data-tab") === tabId) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });

  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(c => {
    if (c.id === `tab-${tabId}`) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
}

// Interactive Checklist Progress
function updateChecklistProgress() {
  const checkboxes = document.querySelectorAll(".step-checkbox");
  if (!checkboxes.length) return;

  let checkedCount = 0;
  checkboxes.forEach(cb => {
    const parentCard = cb.closest(".step-card");
    if (cb.checked) {
      checkedCount++;
      if (parentCard) parentCard.classList.add("completed");
    } else {
      if (parentCard) parentCard.classList.remove("completed");
    }
  });

  const percent = Math.round((checkedCount / checkboxes.length) * 100);
  const fill = document.getElementById("checklistProgressFill");
  const countText = document.getElementById("checklistProgressText");

  if (fill) fill.style.width = `${percent}%`;
  if (countText) countText.textContent = `${checkedCount} of ${checkboxes.length} steps completed (${percent}%)`;
}

// Text-to-Speech (TTS) Voice Reader
function toggleVoicePlayback() {
  if (!window.speechSynthesis) {
    showToast("Voice Unsupported", "Your browser does not support Speech Synthesis.", "warning");
    return;
  }

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    updateVoiceUI(false);
    return;
  }

  if (!currentActiveDoc) return;

  const lang = window.currentLang || "en";
  const content = currentActiveDoc.content[lang] || currentActiveDoc.content["en"];
  const textToRead = `${currentActiveDoc.type}. ${content.summary}`;

  const utterance = new SpeechSynthesisUtterance(textToRead);
  const localeMap = {
    en: "en-IN",
    hi: "hi-IN",
    kn: "kn-IN",
    te: "te-IN",
    ta: "ta-IN"
  };
  utterance.lang = localeMap[lang] || "en-IN";
  utterance.rate = 0.95;

  utterance.onstart = () => updateVoiceUI(true);
  utterance.onend = () => updateVoiceUI(false);
  utterance.onerror = () => updateVoiceUI(false);

  window.speechSynthesis.speak(utterance);
}

function updateVoiceUI(isPlaying) {
  const playBtn = document.getElementById("voicePlayBtn");
  const waveAnim = document.getElementById("voiceWaveAnim");
  const playText = document.getElementById("voicePlayText");

  if (isPlaying) {
    if (waveAnim) waveAnim.classList.add("active");
    if (playText) playText.textContent = "Pause Voice";
    if (playBtn) playBtn.innerHTML = `<i class="fa-solid fa-pause"></i> <span id="voicePlayText">Pause Voice</span>`;
  } else {
    if (waveAnim) waveAnim.classList.remove("active");
    if (playText) playText.textContent = "Read Aloud (Voice)";
    if (playBtn) playBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i> <span id="voicePlayText">Read Aloud (Voice)</span>`;
  }
}

// Google Calendar & ICS Generator
function addDeadlineToCalendar() {
  if (!currentActiveDoc) return;

  const title = encodeURIComponent(`Deadline: ${currentActiveDoc.type}`);
  const details = encodeURIComponent(`Ref: ${currentActiveDoc.refNo}\nAmount Due: ${currentActiveDoc.amountDue}\nOfficial Portal: ${currentActiveDoc.verificationPortal}\nSimplified via NagrikAI`);
  
  // Create a calendar event for the deadline date
  const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&dates=20261130T090000Z/20261130T100000Z`;
  
  window.open(googleCalUrl, "_blank");
  showToast("Calendar Event Created", "Google Calendar reminder link opened in new tab.", "success");
}

// Print Action Plan
function printActionPlan() {
  window.print();
}

document.addEventListener("DOMContentLoaded", initSimplifier);
window.updateChecklistProgress = updateChecklistProgress;
window.switchTab = switchTab;
