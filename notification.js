document.addEventListener('DOMContentLoaded', () => {
    const notifications = [
        { title: 'Midterm Exams', content: 'Midterm exams will start from March 15th.' },
        { title: 'Guest Lecture', content: 'A guest lecture by Dr. Smith on AI will be held on March 10th.' },
        { title: 'Sports Meet', content: 'Annual sports meet will be conducted on March 20th.' },
        { title: 'Library Closure', content: 'The library will be closed for maintenance on March 25th.' },
    ];

    const notificationContainer = document.getElementById('notification-container');

    notifications.forEach((notification, index) => {
        const notificationElement = document.createElement('div');
        notificationElement.classList.add('notification');
        
        const titleElement = document.createElement('h2');
        titleElement.textContent = notification.title;
        
        const contentElement = document.createElement('p');
        contentElement.textContent = notification.content;
        
        notificationElement.appendChild(titleElement);
        notificationElement.appendChild(contentElement);

        notificationContainer.appendChild(notificationElement);

        // Delay the animation for each notification
        setTimeout(() => {
            notificationElement.style.animationDelay = `${index * 0.2}s`;
        }, 0);
    });
});
