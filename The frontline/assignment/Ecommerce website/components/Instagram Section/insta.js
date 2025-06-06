const tickerTrack = document.getElementById('ticker-track');
const message = "✔ WELCOME TO OUR STORE ";
const repeatCount = 30; // Adjust for desired length

for (let i = 0; i < repeatCount; i++) {
  const span = document.createElement('span');
  // Alternate between solid and outline style
  span.classList.add(i % 2 === 0 ? 'solid-text' : 'outline-text');
  span.textContent = message;
  tickerTrack.appendChild(span);
}

