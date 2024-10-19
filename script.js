// Array of favicon frames (icon paths)
const faviconFrames = [
    '/images/favicon-frame1.png',
    '/images/favicon-frame2.png',
    '/images/favicon-frame3.png',
    '/images/favicon-frame4.png'
];

// Function to change the favicon
function changeFavicon(src) {
    const favicon = document.getElementById('favicon');
    favicon.href = src;
}

// Animation interval
let currentFrame = 0;
const animationSpeed = 500; // Change frame every 500ms (0.5 seconds)
const loadingAnimation = setInterval(() => {
    currentFrame = (currentFrame + 1) % faviconFrames.length;
    changeFavicon(faviconFrames[currentFrame]);
}, animationSpeed);

// Stop the animation when the page is fully loaded
window.addEventListener('load', () => {
    clearInterval(loadingAnimation);
    // Optionally, set back to the default favicon
    changeFavicon('/images/favicon-frame1.png');
});
