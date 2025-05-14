function translate() {
  const link = document.getElementById('videoLink').value;
  if (!link.includes("youtube.com")) {
    alert("Please paste a valid YouTube link.");
    return;
  }

  const output = document.getElementById('output');
  output.innerHTML = `
    <p><strong>Simulated Translation:</strong> Playing in Hindi...</p>
    <iframe width="300" height="200" src="${link.replace("watch?v=", "embed/")}" frameborder="0" allowfullscreen></iframe>
    <p style="color:red;">*Note: Actual voice translation is under development.</p>
  `;
}
