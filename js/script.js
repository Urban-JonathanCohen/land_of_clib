// Google Apps Script URL for sending responses to Google Sheet
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzg34AIGQWX5hv1pe26DlpHJOxxmjr0FBSQmfL5Rgw-QBPC-U2gMO7Li8BuBj9tORnPUg/exec';

// Response Tracking (Yes/No/Maybe)
function initializeResponseTracking() {
    const responsesKey = 'trollhatan_climbing_response';
    
    const yesBtn = document.getElementById('yesBtn');
    const maybeBtn = document.getElementById('maybeBtn');
    const noBtn = document.getElementById('noBtn');
    const responseStats = document.getElementById('responseStats');
    
    // Check if user has already voted
    const userResponse = localStorage.getItem(responsesKey);
    
    // Function to send response to Google Sheet
    function sendResponseToSheet(response) {
        const data = new URLSearchParams();
        data.append('response', response);
        
        fetch(GOOGLE_SHEET_URL, {
            method: 'POST',
            body: data
        })
        .then(response => {
            console.log('Response recorded successfully!');
            // Show thank you message
            responseStats.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Error recording response:', error);
            // Still show thank you message even if there's an error
            responseStats.classList.remove('hidden');
        });
    }
    
    // Load initial state
    function loadInitialState() {
        // Disable buttons if user has already voted
        if (userResponse) {
            yesBtn.disabled = true;
            maybeBtn.disabled = true;
            noBtn.disabled = true;
            responseStats.classList.remove('hidden');
        }
    }
    
    // Handle Yes response
    yesBtn.addEventListener('click', function() {
        if (!userResponse) {
            sendResponseToSheet('Yes');
            localStorage.setItem(responsesKey, 'yes');
            yesBtn.classList.add('selected');
            disableAllButtons();
        }
    });
    
    // Handle Maybe response
    maybeBtn.addEventListener('click', function() {
        if (!userResponse) {
            sendResponseToSheet('Maybe');
            localStorage.setItem(responsesKey, 'maybe');
            maybeBtn.classList.add('selected');
            disableAllButtons();
        }
    });
    
    // Handle No response
    noBtn.addEventListener('click', function() {
        if (!userResponse) {
            sendResponseToSheet('No');
            localStorage.setItem(responsesKey, 'no');
            noBtn.classList.add('selected');
            disableAllButtons();
        }
    });
    
    function disableAllButtons() {
        yesBtn.disabled = true;
        maybeBtn.disabled = true;
        noBtn.disabled = true;
    }
    
    // Load initial state on page load
    loadInitialState();
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeResponseTracking();
});
