// hamburger.js
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu functionality
    console.log('hamburger.js loaded');
    const hamburger = document.querySelector('.hamburger-container');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.close-btn');
    // Check if elements exist
    if (!hamburger) {
        console.error('Hamburger not found');
        return;
    }
    if (!mobileNav) {
        console.error('Mobile nav not found');
        return;
    }
    if (!closeBtn) {
        console.error('Close button not found');
        return;
    }
    // All elements found
    console.log('All elements found:', { hamburger, mobileNav, closeBtn });
    // Add event listeners
    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked, toggling mobile nav');
        mobileNav.classList.toggle('active');
    });
    // Close mobile nav
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Close button clicked');
        mobileNav.classList.remove('active');
    });
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
            console.log('Clicked outside, closing mobile nav');
            mobileNav.classList.remove('active');
        }
    });
});