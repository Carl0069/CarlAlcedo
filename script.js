// "Read More" Button Functionality
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target');
        const moreInfo = document.getElementById(targetId);

        // Toggle visibility of the "more-info" div
        if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
            moreInfo.style.display = "block";
            button.textContent = "Read Less";
        } else {
            moreInfo.style.display = "none";
            button.textContent = "Read More";
        }
    });
});

// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                return;
            }

            if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Thank you for your message!');
        });
    }

    // Dark Mode/Light Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');

    // Check for saved theme in local storage
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    // Toggle the theme on button click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('theme', newTheme);
    });
});
