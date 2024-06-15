document.addEventListener('DOMContentLoaded', () => {
    const programs = document.querySelectorAll('.program');

    const revealPrograms = () => {
        programs.forEach((program, index) => {
            setTimeout(() => {
                program.style.opacity = '1';
                program.style.transform = 'translateY(0)';
            }, index * 300);
        });
    };

    // Trigger the animations when the page loads
    revealPrograms();
});
