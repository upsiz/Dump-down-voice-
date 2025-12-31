async function generateVoice() {
  alert("Button works");

  const text = document.getElementById("textInput").value;

  // Working free Parler‑TTS proxy endpoint (Render)
  const apiUrl = "https://parler-tts-proxy.onrender.com/generate";

  const payload = {
    text: text
  };

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json();

    // result.audio is base64 WAV
    const audioBase64 = result.audio;
    const audioUrl = "data:audio/wav;base64," + audioBase64;

    document.getElementById("audioPlayer").src = audioUrl;

  } catch (error) {
    console.error("TTS error:", error);
    alert("Voice generation failed. Check console for details.");
  }
}

