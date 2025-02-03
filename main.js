// var tl = gsap.timeline({scrollTrigger:{
//     trigger:".two",
//     start:"0% 95%",
//     end:"80% 60%",
//     scrub:true
// }})

// tl.to("#heroimage",{
//     top:"120%",
//     left:"77%",
//     width:"30%",
//     rotate:"-30deg"
// },'heroimage')

// // tl.to("#oven",{
// //     top:"153%",
// //     rotate:"0deg",
// //     left:"75%",
// //     width:"12%"
// // },'heroimage')

// // tl.to("#beater",{
// //     top:"114%",
// //     rotate:"100deg",
// //     left:"5%",
// //     width:"5%"
// // },'heroimage')

// // tl.to("#tray",{
// //     top:"125%",
// //     rotate:"100deg",
// //     left:"83%",
// //     width:"12%"
// // },'heroimage')

// var tl2 = gsap.timeline({scrollTrigger:{
//     trigger:".three",
//     start:"0% 95%",
//     end:"20% 50%",
//     scrub:true
// }})

// tl2.to("#heroimage",{
//     top:"212%",
//     left:"50%",
//     width:"30%",
//     rotate:"0deg"
// },'heroimage')

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