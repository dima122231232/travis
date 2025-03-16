const mediaQuery = window.matchMedia('(max-aspect-ratio: 1/1), (max-width: 450px)');

document.querySelectorAll('.section__info-text').forEach(item => {const words = item.innerText.split(' ');item.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');});

// document.querySelectorAll('.fly-text__item').forEach(item => {const words = item.innerText.split(' ');item.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');});
// gsap.utils.toArray('.fly-text__item span').forEach(span => {
//     span.addEventListener('mouseenter', () => gsap.to(span, { fontSize:"40px",duration:.2 }));
//     span.addEventListener('mouseleave', () => gsap.to(span, { fontSize:"30px" ,duration:.2}));
//   });


window.addEventListener("load", () => {

    gsap.fromTo("#video, #video-fake",{opacity:.1},{opacity:0,scrollTrigger: {trigger: ".section__transition",start: "top-=10vh top",end: "top-=10vh top",scrub: true}});
    gsap.fromTo("#video, #video-fake",{opacity:1},{opacity:.1,scrollTrigger: page1});
    gsap.fromTo("#video , #video-fake",{width:"100%"},{height:"100%",scrollTrigger: page1});
    gsap.set("#video-fake",{opacity:0})

    // if(!window.matchMedia('(max-aspect-ratio: 1/1), (max-width: 780px)').matches){}
    if (mediaQuery.matches) {
        gsap.fromTo(".section__info-text span",{opacity: .1},{opacity: 1,stagger:1,scrollTrigger: {trigger: ".section__info", start: "top+=100vh bottom",end:"bottom bottom", scrub: true}});
        gsap.fromTo(".section__info-text span",{color:"#fff"},{color:"#E6508F",scrollTrigger: {trigger: ".section__info", start: "center bottom",end:"bottom bottom", scrub: true}});

        // gsap.fromTo(".smallPhoro", { right: "6%",bottom:"75vw", width: "50vw",rotate:3}, { right: "calc(50% - 40vw)",bottom:"calc(50% - 13vw)", width: "80vw",rotate:0,ease:customEase, scrollTrigger: page1 });
        gsap.fromTo(".smallPhoro", { width: "50vw",rotate:3}, { x: "-4vw", width: "80vw",rotate:0,ease:customEase, scrollTrigger: page1 });
        gsap.fromTo('.rounded-div-wrap',{height:"18vh"},{height:"0vh",ease:"none",scrollTrigger:{trigger: ".section__transition",start: "top bottom",end: "bottom bottom",scrub: true}})
        gsap.set("#video",{height:"0%"});
    } else{
        gsap.fromTo(".section__info-text span",{opacity: .1},{opacity: 1,stagger:1,scrollTrigger: {trigger: ".section__info", start: "top bottom",endTrigger: ".section__transition",end:"center bottom", scrub: true}});
        gsap.fromTo(".section__info-text span",{color:"#fff"},{color:"#E6508F",scrollTrigger: {trigger: ".section__info", start: "center bottom",endTrigger: ".section__transition",end:"center bottom", scrub: true}});

        gsap.fromTo(".header", { y: "0vh" }, { y: "-100%", duration: .5, scrollTrigger: { trigger: ".section__info",start: "center top", end:"bottom top",scrub:true}});
        gsap.fromTo('.main',{y:'0vh'},{y:'270vh',ease:"none",scrollTrigger:{trigger: ".main",start: "top top",endTrigger: ".section__info",end: "bottom top",scrub: true}})
        gsap.to(".smallPhoro", { x: "-26vw",y:"-8vh", width: "36vw",rotate:0,ease:customEase, scrollTrigger: page1 });
        gsap.fromTo('.rounded-div-wrap',{height:"50vh"},{height:"5vh",ease:"none",scrollTrigger:{trigger: ".section__transition",start: "top bottom",end: "bottom bottom",scrub: true,}})
    }
    
});
