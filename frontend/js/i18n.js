/**
 * NagrikAI - Multilingual Translation Dictionary (i18n)
 * Supports English, Hindi (हिंदी), Kannada (ಕನ್ನಡ), Telugu (తెలుగు), Tamil (தமிழ்)
 */

const I18N_DATA = {
  en: {
    // Nav
    "nav_brand": "NagrikAI",
    "nav_home": "Home",
    "nav_simplify": "Document Simplifier",
    "nav_schemes": "Scheme Finder",
    "nav_voice": "Voice Assistant",
    "nav_updates": "Govt Updates",
    "nav_badge": "Citizen Portal",

    // Trust Banner
    "trust_disclaimer": "NagrikAI is an AI citizen-support assistant. We provide plain-language guidance and official verification links. We do not provide legal advice or represent government authorities.",

    // Hero
    "hero_pill": "Empowering Indian Citizens with AI",
    "hero_title": "Simplify Complex Official Documents & Discover Government Schemes",
    "hero_desc": "Upload notices, certificates, property documents or challans. Get crystal-clear explanations in simple language, step-by-step action checklists, validity alerts, and official verification links in your mother tongue.",
    "hero_btn_upload": "Simplify a Document",
    "hero_btn_schemes": "Find Eligible Schemes",
    "hero_btn_voice": "Try Voice Assistant",

    // Document Simplifier Page
    "simplify_title": "AI Document Simplifier",
    "simplify_subtitle": "Upload any Indian government, legal, revenue, or municipal notice to understand what it means, what to pay, and what action is required.",
    "upload_drag_title": "Drag & Drop your document here",
    "upload_drag_subtitle": "Supports PDF, JPG, PNG (Max 15MB) • Clear photos of physical letters work great",
    "upload_browse_btn": "Browse Document",
    "or_demo_label": "Or try with pre-loaded official Indian documents:",
    "sample_property_tax": "Property Tax Notice (BBMP)",
    "sample_caste_income": "Income & Caste Certificate Notice",
    "sample_land_rtc": "Land Record (Pahani / RTC)",
    "sample_court_summons": "Traffic E-Challan & Lok Adalat Notice",

    // Simplifier Output Tabs & Labels
    "tab_overview": "Overview & Meaning",
    "tab_actions": "What Should I Do Next?",
    "tab_deadlines": "Validity & Deadlines",
    "tab_verification": "Official Verification",
    
    "doc_type_detected": "Detected Document Type",
    "ai_explanation_label": "Plain Citizen Explanation",
    "why_received": "Why Did You Receive This?",
    "important_details": "Key Details At A Glance",
    "fees_payable": "Fees / Amount Due",
    "doc_ref_no": "Reference / Application No",
    "issuing_authority": "Issuing Authority",

    // Action Checklist
    "checklist_title": "Step-by-Step Action Plan",
    "checklist_subtitle": "Follow these simple steps to resolve or complete the requirements for this document.",
    "required_docs_title": "Required Supporting Documents to Carry",
    "where_to_go_title": "Where & How to Proceed",
    "btn_download_plan": "Download Action Plan (PDF)",
    "btn_add_calendar": "Add Deadline to Calendar",
    "btn_listen_audio": "Read Aloud (Voice)",

    // Scheme Finder Page
    "schemes_title": "Citizen Welfare Scheme Finder",
    "schemes_subtitle": "Enter your profile details to discover welfare schemes, subsidies, and grants for which you may be eligible.",
    "filter_state": "State / UT",
    "filter_age": "Your Age",
    "filter_gender": "Gender",
    "filter_occupation": "Primary Occupation",
    "filter_income": "Annual Household Income",
    "filter_category": "Social Category",
    "btn_find_schemes": "Search Eligible Schemes",
    "schemes_matching_title": "Schemes You May Be Eligible For",
    "view_scheme_details": "View Full Details & Apply",

    // Voice Assistant Page
    "voice_title": "Multilingual Citizen Voice Assistant",
    "voice_subtitle": "Speak directly in your preferred Indian language to ask questions about your documents, deadlines, or welfare schemes.",
    "voice_mic_tap": "Tap the microphone to speak",
    "voice_listening": "Listening... Speak now",
    "voice_speaking": "Answering in your language...",
    "voice_quick_prompt_1": "\"Explain my property tax notice\"",
    "voice_quick_prompt_2": "\"Am I eligible for PM-Kisan scheme?\"",
    "voice_quick_prompt_3": "\"How do I verify my land RTC record?\"",
    "voice_quick_prompt_4": "\"What documents are needed for caste certificate?\"",

    // Common
    "verified_official": "Verified Official Portal",
    "ai_generated": "AI Simplified Content",
    "last_updated": "Last Verified",
    "status_urgent": "Urgent Action Required",
    "status_valid": "Active & Valid"
  },

  hi: {
    // Nav
    "nav_brand": "नागरिकAI",
    "nav_home": "होम",
    "nav_simplify": "दस्तावेज़ समझें",
    "nav_schemes": "सरकारी योजनाएं",
    "nav_voice": "वॉइस सहायक",
    "nav_updates": "सरकारी सूचनाएं",
    "nav_badge": "नागरिक पोर्टल",

    // Trust Banner
    "trust_disclaimer": "नागरिकAI एक AI नागरिक सहायता मंच है। हम सरल भाषा में मार्गदर्शन और आधिकारिक सत्यापन लिंक प्रदान करते हैं। यह कानूनी सलाह या सरकारी प्राधिकार का विकल्प नहीं है।",

    // Hero
    "hero_pill": "AI द्वारा सशक्त भारतीय नागरिक",
    "hero_title": "कठिन सरकारी दस्तावेज़ों को सरल बनाएं और सरकारी योजनाएं खोजें",
    "hero_desc": "किसी भी सरकारी नोटिस, प्रमाणपत्र, जमीन के कागजात या चालान की फोटो अपलोड करें। अपनी मातृभाषा में आसान भाषा में स्पष्टीकरण, समय-सीमा चेतावनी और क्या करना है की सूची पाएं।",
    "hero_btn_upload": "दस्तावेज़ सरल बनाएं",
    "hero_btn_schemes": "योजनाएं खोजें",
    "hero_btn_voice": "वॉइस सहायक आज़माएं",

    // Document Simplifier Page
    "simplify_title": "AI दस्तावेज़ विश्लेषक",
    "simplify_subtitle": "किसी भी सरकारी या कानूनी नोटिस को अपलोड करें और समझें कि इसका क्या मतलब है, कितनी फीस देनी है और आगे क्या करना है।",
    "upload_drag_title": "यहाँ अपना दस्तावेज़ खींचें और छोड़ें",
    "upload_drag_subtitle": "PDF, JPG, PNG स्वीकार्य (अधिकतम 15MB) • कागज़ के पत्र की स्पष्ट फोटो भी काम करेगी",
    "upload_browse_btn": "दस्तावेज़ चुनें",
    "or_demo_label": "या पहले से लोड किए गए आधिकारिक भारतीय दस्तावेज़ों से देखें:",
    "sample_property_tax": "संपत्ति कर नोटिस (Property Tax)",
    "sample_caste_income": "आय एवं जाति प्रमाण पत्र सूचना",
    "sample_land_rtc": "जमीन का रिकॉर्ड (पाहणी / खतौनी)",
    "sample_court_summons": "ई-चालान एवं लोक अदालत नोटिस",

    // Output Tabs
    "tab_overview": "अवलोकन और अर्थ",
    "tab_actions": "मुझे आगे क्या करना चाहिए?",
    "tab_deadlines": "वैधता और समय-सीमा",
    "tab_verification": "आधिकारिक सत्यापन",

    "doc_type_detected": "पहचाना गया दस्तावेज़ प्रकार",
    "ai_explanation_label": "सरल नागरिक भाषा में व्याख्या",
    "why_received": "आपको यह दस्तावेज़ क्यों मिला?",
    "important_details": "मुख्य विवरण एक नज़र में",
    "fees_payable": "देय शुल्क / जुर्माना राशि",
    "doc_ref_no": "संदर्भ / आवेदन संख्या",
    "issuing_authority": "जारी करने वाला विभाग",

    // Action Checklist
    "checklist_title": "कदम-दर-कदम कार्य योजना",
    "checklist_subtitle": "इस दस्तावेज़ की आवश्यकताओं को पूरा करने के लिए इन सरल चरणों का पालन करें।",
    "required_docs_title": "साथ ले जाने वाले आवश्यक दस्तावेज़",
    "where_to_go_title": "कहाँ और कैसे आगे बढ़ें",
    "btn_download_plan": "कार्य योजना डाउनलोड करें (PDF)",
    "btn_add_calendar": "कैलेंडर में समय-सीमा जोड़ें",
    "btn_listen_audio": "बोलकर सुनें (Voice)",

    // Scheme Finder Page
    "schemes_title": "नागरिक कल्याण योजना खोजक",
    "schemes_subtitle": "अपनी जानकारी दर्ज करें और जानें कि आप किन सरकारी कल्याणकारी योजनाओं और सब्सिडी के पात्र हैं।",
    "filter_state": "राज्य / केंद्र शासित प्रदेश",
    "filter_age": "आपकी आयु",
    "filter_gender": "लिंग",
    "filter_occupation": "व्यवसाय",
    "filter_income": "वार्षिक पारिवारिक आय",
    "filter_category": "सामाजिक श्रेणी",
    "btn_find_schemes": "योजनाएं खोजें",
    "schemes_matching_title": "योजनाएं जिनके आप पात्र हो सकते हैं",
    "view_scheme_details": "पूर्ण विवरण और आवेदन प्रक्रिया",

    // Voice Assistant Page
    "voice_title": "बहुभाषी नागरिक वॉइस सहायक",
    "voice_subtitle": "अपने दस्तावेज़ों, समय-सीमाओं या सरकारी योजनाओं के बारे में अपनी भाषा में सीधे बोलकर पूछें।",
    "voice_mic_tap": "बोलने के लिए माइक दबाएं",
    "voice_listening": "सुन रहे हैं... अब बोलें",
    "voice_speaking": "आपकी भाषा में उत्तर दे रहे हैं...",
    "voice_quick_prompt_1": "\"मेरे संपत्ति कर नोटिस को समझाएं\"",
    "voice_quick_prompt_2": "\"क्या मैं पीएम-किसान योजना के लिए पात्र हूँ?\"",
    "voice_quick_prompt_3": "\"अपनी जमीन के रिकॉर्ड का सत्यापन कैसे करें?\"",
    "voice_quick_prompt_4": "\"जाति प्रमाण पत्र के लिए कौन से दस्तावेज चाहिए?\"",

    // Common
    "verified_official": "सत्यापित आधिकारिक पोर्टल",
    "ai_generated": "AI सरल सामग्री",
    "last_updated": "अंतिम सत्यापन",
    "status_urgent": "तत्काल कार्रवाई आवश्यक",
    "status_valid": "सक्रिय एवं मान्य"
  },

  kn: {
    // Nav
    "nav_brand": "ನಾಗರಿಕ್ AI",
    "nav_home": "ಮುಖಪುಟ",
    "nav_simplify": "ದಾಖಲೆ ಸರಳೀಕರಣ",
    "nav_schemes": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು",
    "nav_voice": "ಧ್ವನಿ ಸಹಾಯಕ",
    "nav_updates": "ಸರ್ಕಾರಿ ಪ್ರಕಟಣೆಗಳು",
    "nav_badge": "ನಾಗರಿಕ ಪೋರ್ಟಲ್",

    // Trust Banner
    "trust_disclaimer": "ನಾಗರಿಕ್ AI ಒಂದು ನಾಗರಿಕ ಸಹಾಯ ತಾಣವಾಗಿದೆ. ನಾವು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಮಾಹಿತಿ ಮತ್ತು ಅಧಿಕೃತ ಪರಿಶೀಲನಾ ಲಿಂಕ್‌ಗಳನ್ನು ನೀಡುತ್ತೇವೆ. ಇದು ಕಾನೂನು ಅಥವಾ ಸರ್ಕಾರಿ ಸಲಹೆಯಲ್ಲ.",

    // Hero
    "hero_pill": "AI ಮೂಲಕ ಭಾರತೀಯ ನಾಗರಿಕರ ಸಬಲೀಕರಣ",
    "hero_title": "ಕ್ಲಿಷ್ಟಕರ ಸರ್ಕಾರಿ ದಾಖಲೆಗಳನ್ನು ಸರಳಗೊಳಿಸಿ ಮತ್ತು ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
    "hero_desc": "ಆಸ್ತಿ ತೆರಿಗೆ, ಪಹಣಿ/RTC, ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರ, ಅಥವಾ ನೋಟಿಸ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ಕನ್ನಡದಲ್ಲಿ ಸರಳ ವಿವರಣೆ, ಗಡುವು ಎಚ್ಚರಿಕೆ ಮತ್ತು ಹಂತ-ಹಂತದ ಮುಂದಿನ ಕ್ರಮಗಳನ್ನು ತಿಳಿಯಿರಿ.",
    "hero_btn_upload": "ದಾಖಲೆ ಸರಳಗೊಳಿಸಿ",
    "hero_btn_schemes": "ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
    "hero_btn_voice": "ಧ್ವನಿ ಸಹಾಯಕ ಬಳಸಿ",

    // Document Simplifier Page
    "simplify_title": "AI ದಾಖಲೆ ಸರಳೀಕರಣ",
    "simplify_subtitle": "ಯಾವುದೇ ಸರ್ಕಾರಿ ಅಥವಾ ಕಂದಾಯ ನೋಟಿಸ್ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, ಅದರ ಅರ್ಥ, ಪಾವತಿಸಬೇಕಾದ ಶುಲ್ಕ ಮತ್ತು ಮುಂದಿನ ಕ್ರಮಗಳನ್ನು ತಿಳಿಯಿರಿ.",
    "upload_drag_title": "ಇಲ್ಲಿ ನಿಮ್ಮ ದಾಖಲೆಯನ್ನು ಎಳೆಯಿರಿ ಮತ್ತು ಬಿಡಿ",
    "upload_drag_subtitle": "PDF, JPG, PNG (ಗರಿಷ್ಠ 15MB) • ಸ್ಪಷ್ಟ ಫೋಟೋಗಳನ್ನು ಸಹ ಅಪ್‌ಲೋಡ್ ಮಾಡಬಹುದು",
    "upload_browse_btn": "ದಾಖಲೆಯನ್ನು ಆರಿಸಿ",
    "or_demo_label": "ಅಥವಾ ಮಾದರಿ ಸರ್ಕಾರಿ ದಾಖಲೆಗಳೊಂದಿಗೆ ಪರೀಕ್ಷಿಸಿ:",
    "sample_property_tax": "ಆಸ್ತಿ ತೆರಿಗೆ ನೋಟಿಸ್ (BBMP)",
    "sample_caste_income": "ಆದಾಯ ಮತ್ತು ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ ನೋಟಿಸ್",
    "sample_land_rtc": "ಭೂ ದಾಖಲೆ (ಪಹಣಿ / RTC - ಭೂಮಿ)",
    "sample_court_summons": "ಟ್ರಾಫಿಕ್ ಇ-ಚಲನ್ ಮತ್ತು ಲೋಕ ಅದಾಲತ್ ನೋಟಿಸ್",

    // Output Tabs
    "tab_overview": "ವಿವರಣೆ ಮತ್ತು ಉದ್ದೇಶ",
    "tab_actions": "ನಾನು ಮುಂದೆ ಏನು ಮಾಡಬೇಕು?",
    "tab_deadlines": "ಮಾನ್ಯತೆ ಮತ್ತು ಗಡುವು",
    "tab_verification": "ಅಧಿಕೃತ ಪರಿಶೀಲನೆ",

    "doc_type_detected": "ದಾಖಲೆಯ ಪ್ರಕಾರ",
    "ai_explanation_label": "ಸರಳ ಕನ್ನಡದಲ್ಲಿ ವಿವರಣೆ",
    "why_received": "ನಿಮಗೆ ಇದು ಏಕೆ ಬಂದಿದೆ?",
    "important_details": "ಮುಖ್ಯ ವಿವರಗಳು",
    "fees_payable": "ಪಾವತಿಸಬೇಕಾದ ಶುಲ್ಕ / ದಂಡ",
    "doc_ref_no": "ಉಲ್ಲೇಖ / ಅರ್ಜಿ ಸಂಖ್ಯೆ",
    "issuing_authority": "ನೀಡಿದ ಪ್ರಾಧಿಕಾರ / ಇಲಾಖೆ",

    // Action Checklist
    "checklist_title": "ಹಂತ-ಹಂತದ ಕ್ರಿಯಾ ಯೋಜನೆ",
    "checklist_subtitle": "ಈ ದಾಖಲೆಯ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಈ ಸರಳ ಹಂತಗಳನ್ನು ಅನುಸರಿಸಿ.",
    "required_docs_title": "ಜೊತೆಯಲ್ಲಿ ಕೊಂಡೊಯ್ಯಬೇಕಾದ ದಾಖಲೆಗಳು",
    "where_to_go_title": "ಎಲ್ಲಿಗೆ ಹೋಗಬೇಕು ಮತ್ತು ಹೇಗೆ ಮುಂದುವರಿಯಬೇಕು",
    "btn_download_plan": "ಕ್ರಿಯಾ ಯೋಜನೆ ಡೌನ್‌ಲೋಡ್ (PDF)",
    "btn_add_calendar": "ಕ್ಯಾಲೆಂಡರ್‌ಗೆ ಗಡುವು ಸೇರಿಸಿ",
    "btn_listen_audio": "ಧ್ವನಿಯಲ್ಲಿ ಆಲಿಸಿ (Voice)",

    // Scheme Finder Page
    "schemes_title": "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಹುಡುಕಾಟ",
    "schemes_subtitle": "ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ನೀವು ಅರ್ಹರಾಗಿರುವ ಯೋಜನೆಗಳು, ಸಬ್ಸಿಡಿಗಳನ್ನು ಕಂಡುಕೊಳ್ಳಿ.",
    "filter_state": "ರಾಜ್ಯ",
    "filter_age": "ನಿಮ್ಮ ವಯಸ್ಸು",
    "filter_gender": "ಲಿಂಗ",
    "filter_occupation": "ಉದ್ಯೋಗ",
    "filter_income": "ವಾರ್ಷಿಕ ಕುಟುಂಬ ಆದಾಯ",
    "filter_category": "ಸಾಮಾಜಿಕ ವರ್ಗ",
    "btn_find_schemes": "ಅರ್ಹ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ",
    "schemes_matching_title": "ನೀವು ಅರ್ಹತೆ ಹೊಂದಿರುವ ಯೋಜನೆಗಳು",
    "view_scheme_details": "ಸಂಪೂರ್ಣ ವಿವರ ಮತ್ತು ಅರ್ಜಿ ವಿಧಾನ",

    // Voice Assistant Page
    "voice_title": "ಕನ್ನಡ ಧ್ವನಿ ಸಹಾಯಕ",
    "voice_subtitle": "ನಿಮ್ಮ ದಾಖಲೆಗಳು, ಗಡುವುಗಳು ಅಥವಾ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಬಗ್ಗೆ ನೇರವಾಗಿ ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಿ ಕೇಳಿ.",
    "voice_mic_tap": "ಮಾತನಾಡಲು ಮೈಕ್ ಒತ್ತಿರಿ",
    "voice_listening": "ಕೇಳಿಸಿಕೊಳ್ಳುತ್ತಿದ್ದೇವೆ... ಈಗ ಮಾತನಾಡಿ",
    "voice_speaking": "ಕನ್ನಡದಲ್ಲಿ ಉತ್ತರಿಸುತ್ತಿದ್ದೇವೆ...",
    "voice_quick_prompt_1": "\"ನನ್ನ ಆಸ್ತಿ ತೆರಿಗೆ ನೋಟಿಸ್ ವಿವರಿಸಿ\"",
    "voice_quick_prompt_2": "\"ಗೃಹಲಕ್ಷ್ಮಿ ಮತ್ತು ಯುವನಿಧಿ ಯೋಜನೆಗೆ ನಾನು ಅರ್ಹನೇ?\"",
    "voice_quick_prompt_3": "\"ಭೂಮಿ ಪೋರ್ಟಲ್‌ನಲ್ಲಿ ಪಹಣಿ ಪರಿಶೀಲಿಸುವುದು ಹೇಗೆ?\"",
    "voice_quick_prompt_4": "\"ಜಾತಿ ಪ್ರಮಾಣಪತ್ರಕ್ಕೆ ಯಾವ ದಾಖಲೆಗಳು ಬೇಕು?\"",

    // Common
    "verified_official": "ಅಧಿಕೃತ ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್",
    "ai_generated": "AI ಸರಳೀಕೃತ ವಿವರಣೆ",
    "last_updated": "ಕೊನೆಯ ಪರಿಶೀಲನೆ",
    "status_urgent": "ತುರ್ತು ಕ್ರಮ ಅಗತ್ಯವಿದೆ",
    "status_valid": "ಸಕ್ರಿಯ ಮತ್ತು ಮಾನ್ಯವಾಗಿದೆ"
  },

  te: {
    // Nav
    "nav_brand": "నాగరిక్ AI",
    "nav_home": "హోమ్",
    "nav_simplify": "పత్రం సరళీకరణ",
    "nav_schemes": "ప్రభుత్వ పథకాలు",
    "nav_voice": "వాయిస్ అసిస్టెంట్",
    "nav_updates": "తాజా సమాచారం",
    "nav_badge": "పౌర వేదిక",

    // Trust Banner
    "trust_disclaimer": "నాగరిక్ AI పౌరులకు సులభమైన సమాచారం అందించే AI వేదిక. మేము అధికారిక ధృవీకరణ లింకులను అందిస్తాము. ఇది న్యాయ లేదా అధికారిక ప్రభుత్వ సలహా కాదు.",

    // Hero
    "hero_pill": "AIతో భారతీయ పౌరుల సాధికారత",
    "hero_title": "క్లిష్టమైన ప్రభుత్వ పత్రాలను సులభంగా అర్థం చేసుకోండి",
    "hero_desc": "మీ ఆస్తి పన్ను, పట్టాదారు పాస్ పుస్తకం, నోటీసులు లేదా చలానా ఫోటోను అప్‌లోడ్ చేయండి. తెలుగులో స్పష్టమైన వివరణ, ముఖ్యమైన తేదీలు మరియు చేయవలసిన పనుల జాబితా పొందండి.",
    "hero_btn_upload": "పత్రం విశ్లేషించండి",
    "hero_btn_schemes": "పథకాలను కనుగొనండి",
    "hero_btn_voice": "వాయిస్ అసిస్టెంట్",

    // Simplifier
    "simplify_title": "AI పత్రాల విశ్లేషణ",
    "simplify_subtitle": "ఏదైనా ప్రభుత్వ నోటీసును అప్‌లోడ్ చేసి, దాని పూర్తి వివరాలను సులభమైన తెలుగులో తెలుసుకోండి.",
    "upload_drag_title": "మీ పత్రాన్ని ఇక్కడ లాగి వదలండి",
    "upload_drag_subtitle": "PDF, JPG, PNG (గరిష్టంగా 15MB) మద్దతు ఇస్తుంది",
    "upload_browse_btn": "పత్రాన్ని ఎంచుకోండి",
    "or_demo_label": "లేదా ఉదాహరణ పత్రాలను పరిశీలించండి:",
    "sample_property_tax": "ఆస్తి పన్ను నోటీసు",
    "sample_caste_income": "ఆదాయ & కుల ధృవీకరణ నోటీసు",
    "sample_land_rtc": "భూమి రికార్డు (అడంగల్ / పహాణీ)",
    "sample_court_summons": "ట్రాఫిక్ చలానా & లోక్ అదాలత్ నోటీసు",

    "tab_overview": "సారాంశం & అర్థం",
    "tab_actions": "తదుపరి ఏమి చేయాలి?",
    "tab_deadlines": "చెల్లుబాటు & గడువు తేదీలు",
    "tab_verification": "అధికారిక ధృవీకరణ",

    "doc_type_detected": "గుర్తించిన పత్రం రకం",
    "ai_explanation_label": "సులభమైన తెలుగులో వివరణ",
    "why_received": "మీకు ఇది ఎందుకు వచ్చింది?",
    "important_details": "ముఖ్యమైన వివరాలు",
    "fees_payable": "చెల్లించవలసిన రుసుము",
    "doc_ref_no": "దరఖాస్తు / రిఫరెన్స్ సంఖ్య",
    "issuing_authority": "జారీ చేసిన విభాగం",

    "checklist_title": "చేయవలసిన పనుల జాబితా",
    "checklist_subtitle": "ఈ పత్రం కోసం క్రింది దశలను పూర్తి చేయండి.",
    "required_docs_title": "తీసుకువెళ్లవలసిన అవసరమైన పత్రాలు",
    "where_to_go_title": "ఎక్కడికి వెళ్లాలి & ఎలా దరఖాస్తు చేయాలి",
    "btn_download_plan": "ప్రణాళిక డౌన్‌లోడ్ (PDF)",
    "btn_add_calendar": "క్యాలెండర్‌కు జోడించండి",
    "btn_listen_audio": "వాయిస్‌లో వినండి",

    "schemes_title": "సంక్షేమ పథకాల శోధన",
    "schemes_subtitle": "మీ వివరాలను నమోదు చేసి, మీకు వర్తించే ప్రభుత్వ పథకాలను తెలుసుకోండి.",
    "filter_state": "రాష్ట్రం",
    "filter_age": "మీ వయస్సు",
    "filter_gender": "లింగం",
    "filter_occupation": "వృత్తి",
    "filter_income": "వార్షిక ఆదాయం",
    "filter_category": "సామాజిక వర్గం",
    "btn_find_schemes": "పథకాలను వెతకండి",
    "schemes_matching_title": "మీకు వర్తించే పథకాలు",
    "view_scheme_details": "పూర్తి వివరాలు & దరఖాస్తు విధానం",

    "voice_title": "తెలుగు వాయిస్ అసిస్టెంట్",
    "voice_subtitle": "మీ పత్రాలు లేదా ప్రభుత్వ పథకాల గురించి నేరుగా తెలుగులో అడగండి.",
    "voice_mic_tap": "మాట్లాడటానికి మైక్ నొక్కండి",
    "voice_listening": "వింటున్నాము... ఇప్పుడు మాట్లాడండి",
    "voice_speaking": "తెలుగులో సమాధానం ఇస్తున్నాము...",
    "voice_quick_prompt_1": "\"నా ఆస్తి పన్ను నోటీసు వివరించండి\"",
    "voice_quick_prompt_2": "\"పీఎం కిసాన్ పథకానికి నేను అర్హుడినా?\"",
    "voice_quick_prompt_3": "\"మీసేవలో ధృవీకరణ ఎలా చేసుకోవాలి?\"",
    "voice_quick_prompt_4": "\"కుల ధృవీకరణకు ఏ పత్రాలు కావాలి?\"",

    "verified_official": "ధృవీకరించబడిన అధికారిక పోర్టల్",
    "ai_generated": "AI సరళీకృత సమాచారం",
    "last_updated": "చివరి ధృవీకరణ",
    "status_urgent": "తక్షణ చర్య అవసరం",
    "status_valid": "చెల్లుబాటులో ఉంది"
  },

  ta: {
    // Nav
    "nav_brand": "நாக்ரிக் AI",
    "nav_home": "முகப்பு",
    "nav_simplify": "ஆவண விளக்கம்",
    "nav_schemes": "அரசு திட்டங்கள்",
    "nav_voice": "குரல் உதவியாளர்",
    "nav_updates": "அரசு அறிவிப்புகள்",
    "nav_badge": "குடிமக்கள் தளம்",

    // Trust Banner
    "trust_disclaimer": "நாக்ரிக் AI ஒரு குடிமக்கள் உதவி தளம். எளிய விளக்கம் மற்றும் அதிகாரப்பூர்வ சரிபார்ப்பு இணைப்புகளை நாங்கள் வழங்குகிறோம். இது சட்ட ஆலோசனை அல்ல.",

    // Hero
    "hero_pill": "AI மூலம் இந்திய குடிமக்கள் மேம்பாடு",
    "hero_title": "கடினமான அரசு ஆவணங்களை எளிதாக புரிந்து கொள்ளுங்கள்",
    "hero_desc": "சொத்து வரி, பட்டா/சிட்டா, சாதி/வருமான சான்றிதழ் அறிவிப்புகளை பதிவேற்றவும். தமிழில் எளிய விளக்கம், கடைசி தேதி எச்சரிக்கை மற்றும் அடுத்த கட்ட வழிமுறைகளை பெறுங்கள்.",
    "hero_btn_upload": "ஆவணத்தை விளக்கு",
    "hero_btn_schemes": "திட்டங்களை தேடு",
    "hero_btn_voice": "குரல் உதவியாளர்",

    // Simplifier
    "simplify_title": "AI ஆவண பகுப்பாய்வு",
    "simplify_subtitle": "அரசு அல்லது சட்ட அறிவிப்புகளை பதிவேற்றி எளிய தமிழில் முழு விவரங்களையும் புரிந்து கொள்ளுங்கள்.",
    "upload_drag_title": "உங்கள் ஆவணத்தை இங்கே பதிவேற்றவும்",
    "upload_drag_subtitle": "PDF, JPG, PNG (அதிகபட்சம் 15MB) ஏற்கப்படும்",
    "upload_browse_btn": "ஆவணத்தை தேர்வு செய்க",
    "or_demo_label": "அல்லது மாதிரி ஆவணங்களை சோதிக்கவும்:",
    "sample_property_tax": "சொத்து வரி அறிவிப்பு",
    "sample_caste_income": "வருமானம் மற்றும் சாதி சான்றிதழ்",
    "sample_land_rtc": "நில ஆவணம் (பட்டா / சிட்டா)",
    "sample_court_summons": "மின்-செல்லான் & லோக் அதாலத் அறிவிப்பு",

    "tab_overview": "சுருக்கம் & விளக்கம்",
    "tab_actions": "அடுத்து என்ன செய்ய வேண்டும்?",
    "tab_deadlines": "செல்லுபடியாகும் காலம் & காலக்கெடு",
    "tab_verification": "அதிகாரப்பூர்வ சரிபார்ப்பு",

    "doc_type_detected": "கண்டறியப்பட்ட ஆவண வகை",
    "ai_explanation_label": "எளிய தமிழில் விளக்கம்",
    "why_received": "இது உங்களுக்கு ஏன் வந்தது?",
    "important_details": "முக்கிய விவரங்கள்",
    "fees_payable": "செலுத்த வேண்டிய கட்டணம்",
    "doc_ref_no": "விண்ணப்ப / குறிப்பு எண்",
    "issuing_authority": "வழங்கிய துறை",

    "checklist_title": "படிப்படியான செயல் திட்டம்",
    "checklist_subtitle": "இந்த ஆவணத்திற்கான தேவைகளை பூர்த்தி செய்ய இந்த எளிய படிகளைப் பின்பற்றவும்.",
    "required_docs_title": "தேவையான ஆவணங்கள்",
    "where_to_go_title": "எங்கு செல்ல வேண்டும் & எப்படி விண்ணப்பிப்பது",
    "btn_download_plan": "செயல் திட்டம் பதிவிறக்கம் (PDF)",
    "btn_add_calendar": "காலெண்டரில் சேர்க்கவும்",
    "btn_listen_audio": "குரலில் கேளுங்கள்",

    "schemes_title": "அரசு நலத்திட்டங்கள் தேடல்",
    "schemes_subtitle": "உங்கள் விவரங்களை உள்ளிட்டு நீங்கள் தகுதியுள்ள நலத்திட்டங்களை கண்டறியுங்கள்.",
    "filter_state": "மாநிலம்",
    "filter_age": "உங்கள் வயது",
    "filter_gender": "பாலினம்",
    "filter_occupation": "தொழில்",
    "filter_income": "ஆண்டு குடும்ப வருமானம்",
    "filter_category": "சமூக பிரிவு",
    "btn_find_schemes": "திட்டங்களை தேடுங்கள்",
    "schemes_matching_title": "நீங்கள் தகுதியுள்ள திட்டங்கள்",
    "view_scheme_details": "முழு விவரங்கள் & விண்ணப்பிக்கும் முறை",

    "voice_title": "தமிழ் குரல் உதவியாளர்",
    "voice_subtitle": "உங்கள் ஆவணங்கள் மற்றும் அரசு திட்டங்கள் குறித்து நேரடியாக தமிழில் பேசி விளக்கம் பெறுங்கள்.",
    "voice_mic_tap": "பேச மைக் பொத்தானை அழுத்தவும்",
    "voice_listening": "கேட்கிறது... இப்போது பேசுங்கள்",
    "voice_speaking": "தமிழில் பதிலளிக்கிறது...",
    "voice_quick_prompt_1": "\"எனது சொத்து வரி நோட்டீஸை விளக்குங்கள்\"",
    "voice_quick_prompt_2": "\"நான் கலைஞர் மகளிர் உரிமைத் தொகைக்கு தகுதியானவரா?\"",
    "voice_quick_prompt_3": "\"பட்டா சிட்டா எப்படி சரிபார்ப்பது?\"",
    "voice_quick_prompt_4": "\"சாதிச் சான்றிதழுக்கு என்னென்ன ஆவணங்கள் தேவை?\"",

    "verified_official": "சரிபார்க்கப்பட்ட அதிகாரப்பூர்வ தளம்",
    "ai_generated": "AI எளிய விளக்கம்",
    "last_updated": "கடைசி சரிபார்ப்பு",
    "status_urgent": "உடனடி நடவடிக்கை தேவை",
    "status_valid": "செல்லுபடியாகும்"
  }
};

let currentLang = localStorage.getItem("nagrik_lang") || "en";

function setLanguage(lang) {
  if (!I18N_DATA[lang]) {
    lang = "en";
  }
  currentLang = lang;
  localStorage.setItem("nagrik_lang", lang);

  // Update dropdown value if exists
  const langSelects = document.querySelectorAll(".lang-select");
  langSelects.forEach(select => {
    select.value = lang;
  });

  // Translate all marked elements
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (I18N_DATA[lang][key]) {
      el.textContent = I18N_DATA[lang][key];
    }
  });

  // Translate placeholders or attributes
  const attrElements = document.querySelectorAll("[data-i18n-attr]");
  attrElements.forEach(el => {
    const raw = el.getAttribute("data-i18n-attr"); // format: "placeholder:key,title:key"
    const pairs = raw.split(",");
    pairs.forEach(pair => {
      const [attr, key] = pair.split(":");
      if (I18N_DATA[lang][key]) {
        el.setAttribute(attr.trim(), I18N_DATA[lang][key]);
      }
    });
  });

  // Dispatch custom event for page-specific dynamic translations (e.g. active document summary)
  window.dispatchEvent(new CustomEvent("nagrik:langchange", { detail: { lang } }));
}

function t(key, fallback = "") {
  if (I18N_DATA[currentLang] && I18N_DATA[currentLang][key]) {
    return I18N_DATA[currentLang][key];
  }
  if (I18N_DATA["en"] && I18N_DATA["en"][key]) {
    return I18N_DATA["en"][key];
  }
  return fallback || key;
}

// Auto-initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
});
