document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Capture form data
    const studentName = document.getElementById('studentName').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const course = document.getElementById('course').value;
    document.addEventListener('DOMContentLoaded', () => {
        // JavaScript code can be added here for further interactivity
    })
    // Simple validation check
    if (studentName && studentEmail && course) {
        // Normally, here you would send the data to the server using AJAX
        // For this example, we'll just display a success message
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'block';
        successMessage.classList.add('fade-in');
    } else {
        alert('Please fill out all fields.');
    }
});