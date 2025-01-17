let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const dotsContainer = document.querySelector('.slider-container::after');

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].style.display = "block";  

    // Add active dot
    const dots = document.querySelectorAll('.slider-container::after div');
    dots.forEach((dot, index) => {
        dot.classList.remove('active-dot');
        if (index === slideIndex - 1) {
            dot.classList.add('active-dot');
        }
    });
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); // Start the slide show


document.addEventListener('DOMContentLoaded', function() {
    const eventDate = new Date('2025-06-01T00:00:00'); // Set the event date (e.g., anniversary)
    
    function updateCountdown() {
        const now = new Date();
        const timeRemaining = eventDate - now;
        
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        
        const timer = document.getElementById('timer');
        timer.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to display the timer immediately
});

