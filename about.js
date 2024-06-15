document.addEventListener('DOMContentLoaded', () => {
    const aboutContents = document.querySelectorAll('.about-content');

    const revealContents = () => {
        aboutContents.forEach((content, index) => {
            setTimeout(() => {
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, index * 300);
        });
    };

    // Trigger the animations when the page loads
    revealContents();
});
