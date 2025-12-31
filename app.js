async function generateVoice() {
  const text = document.getElementById("textInput").value;

  // Placeholder: replace with your real TTS API call
  alert("Voice generation would happen here for: " + text);

  // When you have audio:
  // document.getElementById("audioPlayer").src = "audio-file-url";
}
async function generateVoice() {
  const text = document.getElementById("textInput").value;

  // Free Parler-TTS Space endpoint (no API key needed)
  const apiUrl = "https://huggingface.co/spaces/parler-tts/parler-tts/+/api/predict";

  const payload = {
    data: [text]
  };

  // Call the free Parler-TTS Space
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await response.json();

  // The Space returns a base64 WAV file
  const audioBase64 = result.data[0];
  const audioUrl = "data:audio/wav;base64," + audioBase64;

  // Play it
  document.getElementById("audioPlayer").src = audioUrl;
}
