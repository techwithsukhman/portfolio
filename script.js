 // Simple interactive greeting based on the time of day
        document.addEventListener('DOMContentLoaded', () => {
            const welcomeHeading = document.getElementById('welcome-text');
            const hours = new Date().getHours();
            let greeting = 'Hi';

            if (hours < 12) {
                greeting = 'Good Morning';
            } else if (hours < 18) {
                greeting = 'Good Afternoon';
            } else {
                greeting = 'Good Evening';
            }

            // Update placeholder text dynamically with greeting
            welcomeHeading.innerHTML = `${greeting}, I'm <span> Sukhmandeep Singh</span>`;
        });