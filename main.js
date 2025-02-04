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