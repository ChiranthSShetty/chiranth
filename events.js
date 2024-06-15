document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.event');

    const revealEvents = () => {
        events.forEach((event, index) => {
            setTimeout(() => {
                event.style.opacity = '1';
                event.style.transform = 'translateY(0)';
                event.style.animation = 'slideIn 0.6s ease-out';
            }, index * 300);
        });
    };

    // Trigger the animations when the page loads
    revealEvents();
});
