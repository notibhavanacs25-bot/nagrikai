
const fileInput = document.getElementById("document");
const analyzeBtn = document.getElementById("analyzeBtn");
const uploadStatus = document.getElementById("uploadStatus");
const schemeBtn = document.getElementById("schemeBtn");
const schemeResults = document.getElementById("schemeResults");
const voiceBtn = document.getElementById("voiceBtn");

analyzeBtn.addEventListener("click", () => {
  const file = fileInput.files[0];

  if (!file) {
    uploadStatus.textContent = "Please select a document first.";
    return;
  }

  const allowedTypes = [
    "application/pdf",
    "image/png",
    "image/jpeg"
  ];

  if (!allowedTypes.includes(file.type)) {
    uploadStatus.textContent =
      "Please select a PDF, PNG or JPEG file.";
    return;
  }

  uploadStatus.textContent =
    `Selected: ${file.name}. OCR integration is the next step.`;
});

schemeBtn.addEventListener("click", async () => {
  schemeResults.textContent = "Loading schemes...";

  try {
    const response = await fetch(
      "http://localhost:3000/api/schemes"
    );

    if (!response.ok) {
      throw new Error("Unable to retrieve schemes");
    }

    const schemes = await response.json();

    schemeResults.replaceChildren();

    if (schemes.length === 0) {
      schemeResults.textContent =
        "No schemes are available yet.";
      return;
    }

    for (const scheme of schemes) {
      const article = document.createElement("article");
      const title = document.createElement("h3");
      const description = document.createElement("p");

      title.textContent = scheme.name;
      description.textContent = scheme.description;

      article.append(title, description);
      schemeResults.appendChild(article);
    }
  } catch (error) {
    schemeResults.textContent =
      "Could not connect to the backend. Check the server.";
  }
});

voiceBtn.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) {
    alert("Speech output is not supported by this browser.");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(
    "Welcome to NagrikAI. Your citizen assistant."
  );

  utterance.lang = "en-IN";
  window.speechSynthesis.speak(utterance);
});
