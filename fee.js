document.addEventListener('DOMContentLoaded', () => {
    const feeItems = document.querySelectorAll('.fee-item');

    const revealFeeItems = () => {
        feeItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 300);
        });
    };

    // Trigger the animations when the page loads
    revealFeeItems();
});
