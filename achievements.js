document.addEventListener('DOMContentLoaded', () => {
    const achievements = document.querySelectorAll('.achievement');

    const revealAchievements = () => {
        achievements.forEach((achievement, index) => {
            setTimeout(() => {
                achievement.style.opacity = '1';
                achievement.style.transform = 'translateY(0)';
            }, index * 300);
        });
    };

    // Trigger the animations when the page loads
    revealAchievements();
});
