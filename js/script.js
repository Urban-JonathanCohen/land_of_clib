// Web App URL
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzg34AIGQWX5hv1pe26DlpHJOxxmjr0FBSQmfL5Rgw-QBPC-U2gMO7Li8BuBj9tORnPUg/exec';

// Key to track if user has voted
const STORAGE_KEY = 'trollhatan_climbing_response';

document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const maybeBtn = document.getElementById('maybeBtn');
  const noBtn = document.getElementById('noBtn');
  const responseStats = document.getElementById('responseStats');
  const buttonGroup = document.querySelector('.button-group');

  // If already voted → show response and hide buttons
  if (localStorage.getItem(STORAGE_KEY)) {
    buttonGroup.style.display = 'none';
    responseStats.classList.remove('hidden');
    return;
  }

  // Click handlers
  yesBtn.addEventListener('click', () => handleVote('Yes'));
  maybeBtn.addEventListener('click', () => handleVote('Maybe'));
  noBtn.addEventListener('click', () => handleVote('No'));

  function handleVote(value) {
    // Prevent double voting
    if (localStorage.getItem(STORAGE_KEY)) return;

    sendToGoogle(value);

    // Save vote in localStorage
    localStorage.setItem(STORAGE_KEY, value);

    // Highlight selected button
    if (value === 'Yes') yesBtn.classList.add('selected');
    if (value === 'Maybe') maybeBtn.classList.add('selected');
    if (value === 'No') noBtn.classList.add('selected');

    // Hide all buttons
    buttonGroup.style.display = 'none';

    // Show thank you + survey
    responseStats.classList.remove('hidden');
  }
});

// Send vote to Google Sheets
function sendToGoogle(response) {
  const data = new URLSearchParams();
  data.append('response', response);

  fetch(GOOGLE_SHEET_URL, {
    method: 'POST',
    body: data
  })
    .then(() => console.log('Vote sent:', response))
    .catch(err => console.error('Send failed:', err));
}
