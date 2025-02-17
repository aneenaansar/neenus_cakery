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

let items = document.querySelectorAll('.slider .item');
let active = 3;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
     stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
   active = active + 1 < items.length ?  active + 1 : active;
   loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}

// testimonials section js ends here 