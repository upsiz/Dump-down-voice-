async function generateVoice() {
  alert("Button works");

  const text = document.getElementById("textInput").value;

  // Official HuggingFace Parler‑TTS Space endpoint
  const apiUrl = "https://huggingface.co/spaces/parler-tts/parler-tts/api/predict";

  const payload = {
    data: [text]
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

    // The Space returns base64 WAV in result.data[0]
    const audioBase64 = result.data[0];
    const audioUrl = "data:audio/wav;base64," + audioBase64;

    document.getElementById("audioPlayer").src = audioUrl;

  } catch (error) {
    console.error("TTS error:", error);
    alert("Voice generation failed. Check console for details.");
  }
}

