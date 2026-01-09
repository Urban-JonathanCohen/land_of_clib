// ✅ Web App URL (this is correct)
const GOOGLE_SHEET_URL =
  'https://script.google.com/macros/s/AKfycbzg34AIGQWX5hv1pe26DlpHJOxxmjr0FBSQmfL5Rgw-QBPC-U2gMO7Li8BuBj9tORnPUg/exec';

const STORAGE_KEY = 'trollhatan_climbing_response';

document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const maybeBtn = document.getElementById('maybeBtn');
  const noBtn = document.getElementById('noBtn');
  const responseStats = document.getElementById('responseStats');

  // If already voted → disable buttons
  if (localStorage.getItem(STORAGE_KEY)) {
    disableButtons();
    responseStats?.classList.remove('hidden');
    return;
  }

  yesBtn.addEventListener('click', () => handleVote('Yes'));
  maybeBtn.addEventListener('click', () => handleVote('Maybe'));
  noBtn.addEventListener('click', () => handleVote('No'));

  function handleVote(value) {
    if (localStorage.getItem(STORAGE_KEY)) return;

    sendToGoogle(value);

    localStorage.setItem(STORAGE_KEY, value);
    disableButtons();

    responseStats?.classList.remove('hidden');
  }

function disableButtons() {
    yesBtn.style.display = 'none';
    maybeBtn.style.display = 'none';
    noBtn.style.display = 'none';
}


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
