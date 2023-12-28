const inputEmail = document.querySelector('#email');

const form = document.querySelector('.form');
form.addEventListener('submit', getEmail);

// FORM SUBMIT
function getEmail(e) {
    e.preventDefault();

    // Input validation
    const emailChecked = checkEmail(inputEmail);

    // Invalid email
    if(!emailChecked) return;

    // Add valid email in span
    const emailSpan = document.querySelector('.email-span');
    emailSpan.textContent = emailChecked;

    // Hide Subscribe Section
    const subscribeSection = document.querySelector('.subscribe-section');
    subscribeSection.style.display = 'none';
    
    // Show Success Alert
    const successAlert = document.querySelector('.success-alert');
    successAlert.style.display = 'flex';

    // Reload App
    const btnDismiss = document.querySelector('.success-alert button')
    btnDismiss.addEventListener('click', () => window.location.reload());
}

// INPUT VALIDATION
const checkEmail = input => {

    const email = input.value;

    if(email === '') {
        showError('Enter an email');
        return false; // Invalid email
    }

    // Regular expression to check the email
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!regex.test(email)) {
        showError('Valid email required');
        return false; // Invalid email
    }

    // Valid email
    return email;
}

// INPUT ERROR
function showError(message) {
    const alertMessage = document.querySelector('.alert-message');
    alertMessage.textContent = message;
    inputEmail.classList.add('input-error-state');
}