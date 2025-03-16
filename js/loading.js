const customEase = CustomEase.create("custom", "M0,0 C.7,0 .3,1 1,1");
const main__title = document.querySelector(".main__title");

const page1 = {trigger: ".main",start: "top top",end: "bottom top",scrub: true};

document.documentElement.style.setProperty('--safe-area-bottom', 
    (window.innerHeight - document.documentElement.clientHeight) + 'px'
);
window.onload = function () {
    const tl = gsap.timeline();

    tl.fromTo(".loading__div-progres", { x: "0%" }, { x: "-100%", duration: 1, ease: "power4.in" })
      .to(".loading__block-progres", { top: "calc(50% - calc(var(--index)*2))", right: "calc(var(--index)*-2.3)", duration: 0 })
      .call(() => { document.querySelector(".loading__div-progres").textContent = "66%"; })
      .fromTo(".loading__div-progres", { x: "100%" }, { x: "0%", duration: 1, ease: "power4.out" })
      .to(".loading__div-progres", { x: "-100%", duration: 1, ease: "power4.in" });
    if (!window.matchMedia('(max-width: 450px)').matches) {
      tl.to(".loading__block-progres", { top: "calc(100% - calc(var(--index)*4)", right: "calc(var(--index)*-3.6)", duration: 0 });
    }
    else{
        tl.to(".loading__block-progres", { top: "calc(100% - calc(var(--index)*4) - var(--safe-area-bottom))", right: "calc(var(--index)*-3.6)", duration: 0 });
    }
    tl.call(() => { document.querySelector(".loading__div-progres").textContent = "100%"; })
      .fromTo(".loading__div-progres", { x: "100%" }, { x: "0%", duration: 1, ease: "power4.out" })
      .to(".loading__div-progres", { x: "-100%", duration: 1, ease: "power4.in" })
      .add(() => {
        document.querySelectorAll('.ld_div-text').forEach((el, idx) => {
          gsap.fromTo(el, { y: "-100%" }, { y: "0%", duration: 0.5, ease: customEase, delay: idx * 0.1 });
        });
        document.querySelector('.loading-text').style.pointerEvents = "auto";
      });
        gsap.set(".loading__div-progres", { x: "0%" });
};
function Start(){

    document.querySelector('.loading').style.pointerEvents = "none";
    document.querySelector('.loading').style.zIndex = -1;
    document.body.style.overflow = "auto";

    document.querySelectorAll('.ld_div-text').forEach((el, idx) => {
        gsap.fromTo(el, { y: "0%" }, { y: "-100%", duration: 0.25,ease:customEase, delay: idx * 0.1 });
    });

    gsap.fromTo(".fly-text", {opacity:1}, {opacity:0,scrollTrigger: page1 });

    // gsap.to(".loading-thumbnail-img",{display:"none",delay:.75})

    if(!window.matchMedia('(max-width: 450px)').matches){
        gsap.timeline()
        // .to(".loading-thumbnail-img:nth-of-type(1)",{height:"80%",width:"100%",duration:.5,ease:customEase})
        // .to(".loading-thumbnail-img:nth-of-type(2)",{height:"80%",width:"100%",duration:.5,ease:customEase},.1)
        .to("#video",{height:"82dvh",width:"100%",duration:.5,delay:.5,ease:customEase})
        .to("#video-fake",{opacity:1,duration:0});

        gsap.fromTo(".main__title span", {top: "17vw"},{top: "0vw",stagger: 0.025,delay:.5,ease:customEase});

    }
    else{
        gsap.timeline()
        // .to(".loading-thumbnail-img:nth-of-type(1)",{height:"80%",width:"200%",duration:1,ease:customEase})
        // .to(".loading-thumbnail-img:nth-of-type(2)",{height:"80%",width:"200%",duration:1,ease:customEase},.2)
        .to("#video",{height:"82dvh",width:"100%",duration:.5,delay:.5,ease:customEase})
        .to("#video-fake",{opacity:1,duration:0});

        gsap.fromTo(".tkk", {top: "36vw"},{top: "0vw",delay:.5,ease:customEase});
    }
    gsap.set(".main__title span",{top: "17vw"})

    gsap.fromTo(".fly-text", {opacity:0},{opacity:1,delay:.8,duration:1});

    gsap.fromTo(".header", {y:"-100%"},{y:"0%",delay:.5,duration:1});
    gsap.to(".smallPhoro",{opacity:1,delay:.8,duration:1});

  document.getElementById('video').play();
  document.getElementById('video-fake').play();
}

if(!window.matchMedia('(max-width: 450px)').matches){ 
    main__title.innerHTML = main__title.textContent.split('').map(char => `<span>${char}</span>`).join('');
    gsap.fromTo(".main__title span", { top: "0vw" }, { top: "17vw", duration: 2.5, stagger: { each: 0.25, from: "end" }, ease:"none", scrollTrigger: page1 });
}else{
    main__title.innerHTML = main__title.textContent.trim().split(" ").map(word => `<div class="imm"><div class="tkk">${word}</div></div>`).join(" ");
    gsap.fromTo(".tkk", { y:"0%" }, { y:"140%", ease:customEase, scrollTrigger: page1 });
}