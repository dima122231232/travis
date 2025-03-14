const mediaQuery = window.matchMedia('(max-aspect-ratio: 1/1), (max-width: 450px)');

document.querySelectorAll('.section__info-text').forEach(item => {const words = item.innerText.split(' ');item.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');});

// document.querySelectorAll('.fly-text__item').forEach(item => {const words = item.innerText.split(' ');item.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');});
// gsap.utils.toArray('.fly-text__item span').forEach(span => {
//     span.addEventListener('mouseenter', () => gsap.to(span, { fontSize:"40px",duration:.2 }));
//     span.addEventListener('mouseleave', () => gsap.to(span, { fontSize:"30px" ,duration:.2}));
//   });


window.addEventListener("load", () => {

    gsap.fromTo(".section__info-text span",{opacity: .1},{opacity: 1,stagger:1,scrollTrigger: {trigger: ".section__info", start: "top bottom",endTrigger: ".section__transition",end:"center bottom", scrub: true}});
    gsap.fromTo("#video",{opacity:1},{opacity:.2,scrollTrigger: page1});
    gsap.fromTo("#video",{height:"82%"},{height:"100%",scrollTrigger: page1});

    // if(!window.matchMedia('(max-aspect-ratio: 1/1), (max-width: 780px)').matches){}
    if (mediaQuery.matches) {
        gsap.fromTo(".smallPhoro", { right: "6%",bottom:"75vw", width: "50vw",rotate:3}, { right: "calc(50% - 40vw)",bottom:"calc(50% - 13vw)", width: "80vw",rotate:0,ease:customEase, scrollTrigger: page1 });
        gsap.fromTo('.rounded-div-wrap',{height:"18vh"},{height:"0vh",ease:"none",scrollTrigger:{trigger: ".section__transition",start: "top bottom",end: "bottom bottom",scrub: true}})
        gsap.set("#video",{height:"0%"});
    } else{
        gsap.fromTo(".header", { y: "0vh" }, { y: "-100%", duration: .5, scrollTrigger: { trigger: ".section__info",start: "center top", end:"bottom top",scrub:true}});
        gsap.fromTo('.main',{y:'0vh'},{y:'270vh',ease:"none",scrollTrigger:{trigger: ".main",start: "top top",endTrigger: ".section__info",end: "bottom top",scrub: true}})
        gsap.fromTo(".smallPhoro", { right: "6%",bottom:"10vw", width: "20vw",rotate:3}, { right: "calc(50% - 18vw)",bottom:"calc(50% - 13vw)", width: "36vw",rotate:0,ease:customEase, scrollTrigger: page1 });
        gsap.fromTo('.rounded-div-wrap',{height:"50vh"},{height:"5vh",ease:"none",scrollTrigger:{trigger: ".section__transition",start: "top bottom",end: "bottom bottom",scrub: true,}})
        gsap.fromTo(".section__info-text span",{color:"#fff"},{color:"#E6508F",scrollTrigger: {trigger: ".section__info", start: "center bottom",endTrigger: ".section__transition",end:"center bottom", scrub: true}});
    }
    
});