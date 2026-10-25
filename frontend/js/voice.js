/**
 * NagrikAI - Multilingual Citizen Voice Assistant
 * Implements Web Speech API (STT SpeechRecognition + TTS SpeechSynthesis)
 * Supports Kannada (kn-IN), Hindi (hi-IN), Telugu (te-IN), Tamil (ta-IN), and English (en-IN).
 */

const VOICE_LOCALES = {
  en: "en-IN",
  hi: "hi-IN",
  kn: "kn-IN",
  te: "te-IN",
  ta: "ta-IN"
};

// Multilingual Knowledge Base for Citizen Voice Q&A
const KNOWLEDGE_RESPONSES = {
  property_tax: {
    en: "Property tax notices must be paid before November 30 to avoid a 2% monthly penalty. If you pay before November 15, BBMP provides a 5% early-bird discount on the total amount.",
    hi: "संपत्ति कर का भुगतान 30 नवंबर से पहले करना अनिवार्य है ताकि 2% मासिक जुर्माने से बचा जा सके। 15 नवंबर से पहले भुगतान करने पर नगर निगम द्वारा 5% की छूट दी जा रही है।",
    kn: "ಆಸ್ತಿ ತೆರಿಗೆಯನ್ನು ನವೆಂಬರ್ 30 ರೊಳಗೆ ಪಾವತಿಸದಿದ್ದರೆ ತಿಂಗಳಿಗೆ 2% ದಂಡ ವಿಧಿಸಲಾಗುತ್ತದೆ. ಆದರೆ ನವೆಂಬರ್ 15 ರೊಳಗೆ ಪಾವತಿಸಿದರೆ ಪಾಲಿಕೆಯಿಂದ 5% ರಿಯಾಯಿತಿ ದೊರೆಯುತ್ತದೆ.",
    te: "ఆస్తి పన్నును నవంబర్ 30 లోగా చెల్లించాలి, లేకపోతే నెలకు 2% జరిమానా విధిస్తారు. నవంబర్ 15 లోపు చెల్లిస్తే 5% తగ్గింపు లభిస్తుంది.",
    ta: "சொத்து வரியை நவம்பர் 30-க்குள் செலுத்த வேண்டும், இல்லையெனில் மாதத்திற்கு 2% அபராதம் விதிக்கப்படும். நவம்பர் 15-க்குள் செலுத்தினால் 5% தள்ளுபடி கிடைக்கும்."
  },

  pm_kisan: {
    en: "Under PM-Kisan Samman Nidhi, eligible small and marginal farmers receive ₹6,000 every year directly in their bank accounts in three equal installments of ₹2,000 via DBT. You need your Aadhaar-linked bank account and landholding RTC to register.",
    hi: "पीएम-किसान योजना के तहत पात्र किसानों को सालाना ₹6,000 की राशि ₹2,000 की तीन किस्तों में सीधे बैंक खाते में दी जाती है। इसके लिए आधार से जुड़ा बैंक खाता और जमीन की खतौनी आवश्यक है।",
    kn: "ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆಯಡಿ ಅರ್ಹ ರೈತರಿಗೆ ಪ್ರತಿ ವರ್ಷ ₹6,000 ಹಣವನ್ನು ₹2,000 ರಂತೆ ಮೂರು ಕಂತುಗಳಲ್ಲಿ ನೇರವಾಗಿ ಬ್ಯಾಂಕ್ ಖಾತೆಗೆ ಜಮೆ ಮಾಡಲಾಗುತ್ತದೆ. ಇದಕ್ಕೆ ಜಮೀನಿನ ಪಹಣಿ (RTC) ಮತ್ತು ಆಧಾರ್ ಜೋಡಣೆಯಾಗಿರುವ ಬ್ಯಾಂಕ್ ಖಾತೆ ಅಗತ್ಯವಿದೆ.",
    te: "పీఎం-కిసాన్ పథకం కింద రైతులకు ఏడాదికి ₹6,000 మూడు విడతల్లో నేరుగా బ్యాంక్ ఖాతాలో జమ చేస్తారు. దీనికి ఆధార్ లింక్ అయిన బ్యాంక్ ఖాతా మరియు పట్టాదారు పాస్ పుస్తకం అవసరం.",
    ta: "பிஎம்-கிசான் திட்டத்தின் கீழ் தகுதியுள்ள விவசாயிகளுக்கு ஆண்டுக்கு ₹6,000 மூன்று தவணைகளில் நேரடியாக வங்கிக் கணக்கில் வழங்கப்படுகிறது. இதற்கு பட்டா மற்றும் ஆதார் இணைக்கப்பட்ட வங்கிக் கணக்கு தேவை."
  },

  land_rtc: {
    en: "To verify your Land Record (RTC / Pahani) in Karnataka, visit the official Bhoomi portal at landrecords.karnataka.gov.in. Enter your District, Taluk, Hobli, Village, and Survey Number to view official mutation status and ownership details.",
    hi: "अपनी जमीन के रिकॉर्ड (खतौनी/RTC) का सत्यापन करने के लिए आधिकारिक 'भूमि' पोर्टल पर जाएं। अपना जिला, तहसील, गांव और खसरा नंबर डालकर स्वामित्व की स्थिति की जांच करें।",
    kn: "ನಿಮ್ಮ ಜಮೀನಿನ ಪಹಣಿ (RTC) ಪರಿಶೀಲಿಸಲು ಕರ್ನಾಟಕ ಸರ್ಕಾರದ ಅಧಿಕೃತ ಭೂಮಿ ಪೋರ್ಟಲ್ landrecords.karnataka.gov.in ಗೆ ಭೇಟಿ ನೀಡಿ. ಜಿಲ್ಲೆ, ತಾಲೂಕು, ಹೋಬಳಿ, ಗ್ರಾಮ ಮತ್ತು ಸರ್ವೆ ನಂಬರ್ ನಮೂದಿಸಿ ಅಧಿಕೃತ ವಿವರಗಳನ್ನು ಪಡೆಯಿರಿ.",
    te: "మీ భూమి రికಾರ್డుల ధృవీకరణ కోసం అధికారిక రెవెన్యూ పోర్టల్ మీసేవ లేదా భూమి వెబ్‌సైట్ సందర్శించి, జిల్లా మరియు సర్వే నంబరు ద్వారా పరిశీలించవచ్చు.",
    ta: "உங்கள் நிலத்தின் பட்டா/சிட்டா ஆவணத்தை சரிபார்க்க தமிழக அரசின் eservices.tn.gov.in தளத்திற்கு சென்று மாவட்டம் மற்றும் சர்வே எண்ணை உள்ளிட்டு சரிபார்க்கலாம்."
  },

  caste_certificate: {
    en: "For Caste & Income Certificate renewal, you need: 1. Applicant Aadhaar card, 2. Ration card, 3. Father or Mother's caste certificate, and 4. Income proof from employer or village accountant. Apply online at Seva Sindhu or Nadakacheri.",
    hi: "जाति एवं आय प्रमाण पत्र के लिए आवश्यक दस्तावेज हैं: आवेदक का आधार कार्ड, राशन कार्ड, माता-पिता का जाति प्रमाण पत्र, और आय प्रमाण पत्र। आप सेवा सिंधु या जन सेवा केंद्र पर आवेदन कर सकते हैं।",
    kn: "ಜಾತಿ ಮತ್ತು ಆದಾಯ ಪ್ರಮಾಣಪತ್ರಕ್ಕೆ ಬೇಕಾಗುವ ದಾಖಲೆಗಳು: 1. ಅರ್ಜಿದಾರರ ಆಧಾರ್ ಕಾರ್ಡ್, 2. ರೇಷನ್ ಕಾರ್ಡ್, 3. ತಂದೆ ಅಥವಾ ತಾಯಿಯ ಜಾತಿ ಪ್ರಮಾಣಪತ್ರ, ಮತ್ತು 4. ಆದಾಯದ ದೃಢೀಕರಣ ಪತ್ರ. ನೀವು ಸೇವಾ ಸಿಂಧು ಅಥವಾ ನಾಡಕಚೇರಿಯಲ್ಲಿ ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು.",
    te: "కుల మరియు ఆదాయ ధృవీకరణ పత్రం కోసం ఆధార్ కార్డు, రేషన్ కార్డు, తల్లిదండ్రుల కుల ధృవీకరణ పత్రం మరియు ఆదాయ రుజువు అవసరం. మీసేవలో దరఖాస్తు చేసుకోవచ్చు.",
    ta: "சாதி மற்றும் வருமான சான்றிதழ் பெற ஆதார் அட்டை, குடும்ப அட்டை, பெற்றோரின் சாதி சான்றிதழ் மற்றும் வருமான சான்று தேவை. இ-சேவை மையத்தில் விண்ணப்பிக்கலாம்."
  },

  default: {
    en: "I am NagrikAI, your citizen assistance assistant. You can ask me to explain any official notice, check government scheme eligibility, or find official verification portals.",
    hi: "मैं नागरिकAI हूँ, आपका नागरिक सहायक। आप मुझसे किसी भी सरकारी नोटिस को समझाने, योजनाओं की पात्रता जांचने या आधिकारिक पोर्टलों के बारे में पूछ सकते हैं।",
    kn: "ನಾನು ನಾಗರಿಕ್ AI, ನಿಮ್ಮ ನಾಗರಿಕ ಸಹಾಯ ಸಹಾಯಕ. ನೀವು ಯಾವುದೇ ಸರ್ಕಾರಿ ನೋಟಿಸ್‌ನ ಅರ್ಥ, ಯೋಜನೆಗಳ ಅರ್ಹತೆ ಅಥವಾ ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳ ಬಗ್ಗೆ ನನ್ನನ್ನು ಧ್ವನಿಯ ಮೂಲಕ ಕೇಳಬಹುದು.",
    te: "నేను నాగరిక్ AI, మీ పౌర సహాయకుడిని. ప్రభుత్వ పత్రాలు లేదా పథకాల గురించి మీరు నన్ను నేరుగా వాయిస్ ద్వారా అడగవచ్చు.",
    ta: "நான் நாக்ரிக் AI, உங்கள் குடிமக்கள் வழிகாட்டி. அரசு ஆவணங்கள் மற்றும் திட்டங்கள் பற்றி என்னிடம் நேரடியாக குரல் மூலம் கேட்டு தெரிந்து கொள்ளலாம்."
  }
};

let recognitionInstance = null;
let isCurrentlyListening = false;

function initVoiceAssistant() {
  const micBtn = document.getElementById("voiceMainMicBtn");
  const textInput = document.getElementById("chatTextInput");
  const sendBtn = document.getElementById("chatSendBtn");

  // Setup Web Speech Recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = false;
    recognitionInstance.interimResults = false;

    recognitionInstance.onstart = () => {
      isCurrentlyListening = true;
      updateListeningState(true);
    };

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleCitizenVoiceQuery(transcript);
    };

    recognitionInstance.onerror = (event) => {
      console.warn("Speech recognition error:", event.error);
      isCurrentlyListening = false;
      updateListeningState(false);
      showToast("Voice Input", "Could not catch voice clearly. Please try again or type below.", "info");
    };

    recognitionInstance.onend = () => {
      isCurrentlyListening = false;
      updateListeningState(false);
    };
  }

  if (micBtn) {
    micBtn.addEventListener("click", () => {
      if (!recognitionInstance) {
        showToast("Browser Compatibility", "Web Speech API is best supported in Google Chrome, Edge, or Android browsers. You can also type your question below!", "warning");
        return;
      }

      if (isCurrentlyListening) {
        recognitionInstance.stop();
      } else {
        const lang = window.currentLang || "en";
        recognitionInstance.lang = VOICE_LOCALES[lang] || "en-IN";
        try {
          recognitionInstance.start();
        } catch (e) {
          console.error(e);
        }
      }
    });
  }

  // Quick Prompt Chips
  const promptChips = document.querySelectorAll(".prompt-chip");
  promptChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const query = chip.getAttribute("data-query") || chip.textContent.replace(/"/g, '').trim();
      handleCitizenVoiceQuery(query);
    });
  });

  // Text fallback send
  if (sendBtn && textInput) {
    sendBtn.addEventListener("click", () => {
      const val = textInput.value.trim();
      if (val) {
        handleCitizenVoiceQuery(val);
        textInput.value = "";
      }
    });

    textInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const val = textInput.value.trim();
        if (val) {
          handleCitizenVoiceQuery(val);
          textInput.value = "";
        }
      }
    });
  }
}

function updateListeningState(isListening) {
  const micBtn = document.getElementById("voiceMainMicBtn");
  const statusText = document.getElementById("voiceStatusText");
  const soundBars = document.getElementById("liveSoundBars");

  if (isListening) {
    if (micBtn) micBtn.classList.add("active-listening");
    if (soundBars) soundBars.classList.add("active");
    if (statusText) statusText.textContent = t("voice_listening", "Listening... Speak in your language");
  } else {
    if (micBtn) micBtn.classList.remove("active-listening");
    if (soundBars) soundBars.classList.remove("active");
    if (statusText) statusText.textContent = t("voice_mic_tap", "Tap the microphone to speak");
  }
}

function handleCitizenVoiceQuery(userQuery) {
  appendMessageToLog("user", userQuery);

  // Match answer from multilingual knowledge base
  const lower = userQuery.toLowerCase();
  let topic = "default";

  if (lower.includes("tax") || lower.includes("bbmp") || lower.includes("property") || lower.includes("ತೆರಿಗೆ") || lower.includes("कर")) {
    topic = "property_tax";
  } else if (lower.includes("kisan") || lower.includes("farmer") || lower.includes("ಕಿಸಾನ್") || lower.includes("ರೈತ") || lower.includes("किसान")) {
    topic = "pm_kisan";
  } else if (lower.includes("land") || lower.includes("rtc") || lower.includes("pahani") || lower.includes("bhoomi") || lower.includes("ಪಹಣಿ") || lower.includes("ಭೂಮಿ") || lower.includes("खतौनी")) {
    topic = "land_rtc";
  } else if (lower.includes("caste") || lower.includes("income") || lower.includes("certificate") || lower.includes("ಜಾತಿ") || lower.includes("ಆದಾಯ") || lower.includes("प्रमाण पत्र")) {
    topic = "caste_certificate";
  }

  const lang = window.currentLang || "en";
  const answer = KNOWLEDGE_RESPONSES[topic][lang] || KNOWLEDGE_RESPONSES[topic]["en"];

  setTimeout(() => {
    appendMessageToLog("ai", answer);
    speakAloudResponse(answer, lang);
  }, 600);
}

function appendMessageToLog(sender, text) {
  const log = document.getElementById("chatHistoryLog");
  if (!log) return;

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;

  const avatarIcon = sender === "user" ? "fa-user" : "fa-robot";
  bubble.innerHTML = `
    <div class="chat-bubble-avatar">
      <i class="fa-solid ${avatarIcon}"></i>
    </div>
    <div class="chat-bubble-msg">${text}</div>
  `;

  log.appendChild(bubble);
  log.scrollTop = log.scrollHeight;
}

function speakAloudResponse(text, lang) {
  if (!window.speechSynthesis) return;

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = VOICE_LOCALES[lang] || "en-IN";
  utterance.rate = 0.95;

  const soundBars = document.getElementById("liveSoundBars");
  const statusText = document.getElementById("voiceStatusText");

  utterance.onstart = () => {
    if (soundBars) soundBars.classList.add("active");
    if (statusText) statusText.textContent = t("voice_speaking", "Answering in your language...");
  };

  utterance.onend = () => {
    if (soundBars) soundBars.classList.remove("active");
    if (statusText) statusText.textContent = t("voice_mic_tap", "Tap the microphone to speak");
  };

  utterance.onerror = () => {
    if (soundBars) soundBars.classList.remove("active");
    if (statusText) statusText.textContent = t("voice_mic_tap", "Tap the microphone to speak");
  };

  window.speechSynthesis.speak(utterance);
}

document.addEventListener("DOMContentLoaded", initVoiceAssistant);
