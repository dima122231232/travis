const customEase = CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1");

const main__title = document.querySelector(".main__title");
main__title.innerHTML = main__title.textContent.split('').map(char => `<span>${char}</span>`).join('');

document.querySelectorAll('.section__info-text').forEach(item => {const words = item.innerText.split(' ');item.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');});

// document.querySelectorAll('.fly-text__item').forEach(item => {const words = item.innerText.split(' ');item.innerHTML = words.map(word => `<span>${word}</span>`).join(' ');});
// gsap.utils.toArray('.fly-text__item span').forEach(span => {
//     span.addEventListener('mouseenter', () => gsap.to(span, { fontSize:"40px",duration:.2 }));
//     span.addEventListener('mouseleave', () => gsap.to(span, { fontSize:"30px" ,duration:.2}));
//   });


window.addEventListener("load", () => {
    gsap.fromTo(".section__info-text span",{opacity: .1},{opacity: 1,stagger:1,scrollTrigger: {trigger: ".section__info", start: "top bottom",endTrigger: ".section__transition",end:"center bottom", scrub: true}});
    gsap.fromTo(".section__info-text span",{color:"#fff"},{color:"#E6508F",scrollTrigger: {trigger: ".section__info", start: "center bottom",endTrigger: ".section__transition",end:"center bottom", scrub: true}});

    const page1 = {
        trigger: ".main",
        start: "top top",
        end: "bottom top",
        scrub: true
    };
    gsap.fromTo(".smallPhoro", { right: "6%",bottom:"10vw", width: "20vw",rotate:3}, { right: "calc(50% - 18vw)",bottom:"calc(50% - 13vw)", width: "36vw",rotate:0,ease:customEase, scrollTrigger: page1 });
    gsap.fromTo(".main__title span", { top: "0vw" }, { top: "17vw", duration: 2.5, stagger: { each: 0.25, from: "end" }, ease:"none", scrollTrigger: page1 });
    gsap.fromTo(".main__title span", {top: "17vw"},{top: "0vw",stagger: 0.025,ease:customEase});
    gsap.fromTo("#video", {opacity:1}, {opacity:.1,scrollTrigger: page1 });
    gsap.fromTo("#video",{opacity:0},{opacity:1,delay:.5}); 

    gsap.fromTo(".fly-text__item", {opacity:1}, {opacity:0,scrollTrigger: page1 });
    gsap.fromTo(".fly-text__item", {opacity:0},{opacity:1,delay:.5,duration:1});
    gsap.fromTo('.main',{y:'0vh'},{y:'270vh',ease:"none",scrollTrigger:{
        trigger: ".main",
        start: "top top",
        endTrigger: ".section__info",
        end: "bottom top",
        scrub: true
    }})

    gsap.fromTo('.rounded-div-wrap',{height:"50vh"},{height:"5vh",ease:"none",scrollTrigger:{
        trigger: ".section__transition",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
    }})

});