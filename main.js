var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "top 85%",
        end: "+=100%",
        scrub: 1, // Increased scrub smoothness
        markers: false // Remove markers for production
    }
});

tl.to("#heroimage", {
    top: "120%",
    left: "77%",
    width: "30%",
    rotate: "-30deg",
    ease: "power1.out" // Added ease function
}, 'heroimage');

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "top 85%",
        end: "+=50%",
        scrub: 1, // Increased scrub smoothness
        markers: false // Remove markers for production
    }
});

tl2.to("#heroimage", {
    top: "212%",
    left: "50%",
    width: "30%",
    rotate: "0deg",
    ease: "power1.out" // Added ease function
}, 'heroimage');




// Mobile menu toggle
document.querySelector('.mobile-menu').addEventListener('click', () => {
    document.querySelector('.nav_links').classList.toggle('active');
});


// cake catogory script starts here 

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

// Observe all animated elements
document.querySelectorAll('.section-title, .cake-card').forEach((el) => {
    observer.observe(el);
});

// Add hover effect to cards
document.querySelectorAll('.cake-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});
// cake catogory script ends here 



// testimonials section js starts here 

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.testimonial-container');
    const slider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlider() {
        const testimonialsPerView = parseInt(getComputedStyle(container).getPropertyValue('--testimonials-per-view'));
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function nextSlide() {
        const testimonialsPerView = parseInt(getComputedStyle(container).getPropertyValue('--testimonials-per-view'));
        const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);
        
        currentIndex++;
        if (currentIndex >= totalSlides) {
            // Smoothly reset to first slide
            slider.style.transition = 'none';
            currentIndex = 0;
            slider.style.transform = `translateX(0)`;
            void slider.offsetWidth; // Trigger reflow
            slider.style.transition = 'transform 0.5s ease-in-out';
        }
        updateSlider();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000);
    }

    function handleResize() {
        currentIndex = 0;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(0)`;
        void slider.offsetWidth;
        slider.style.transition = 'transform 0.5s ease-in-out';
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Initialize slider
    updateSlider();
    startAutoSlide();

    // Handle window resize
    window.addEventListener('resize', handleResize);
});

// testimonials section js ends here 