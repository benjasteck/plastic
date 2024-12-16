let currentSlide = 0;
let isManualChange = false; // Flag to track manual changes
let slideInterval; // To store the interval ID
const slides = document.querySelectorAll('input[name="slider"]');

// Function to change the slide
function changeSlide() {
    // Uncheck the current radio button
    slides[currentSlide].checked = false;

    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length;

    // Check the next radio button
    slides[currentSlide].checked = true;
}

// Change slide every 10 seconds (10000 milliseconds)
function startSlideInterval() {
    // Clear any existing interval
    clearInterval(slideInterval);

    // Start a new interval
    slideInterval = setInterval(changeSlide, 10000);
}

// Initially start the automatic slide change
startSlideInterval();

// Listen for manual changes to radio buttons
slides.forEach((slide, index) => {
    slide.addEventListener('change', () => {
        // When the user manually selects a radio button
        isManualChange = true;
        currentSlide = index; // Update the current slide to the manually selected one

        // Clear the automatic slide interval when the user manually selects a radio button
        clearInterval(slideInterval);

        // Optionally, restart the automatic slide after some delay if desired
        setTimeout(() => {
            isManualChange = false; // Resume automatic cycling
            startSlideInterval(); // Restart the slide interval
        }, 5000); // Restart the interval after 5 seconds if no other manual change happens
    });
});
