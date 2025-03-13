const audioOsn = new Audio('audio/Utopia.mp3');
audioOsn.loop = true;

document.querySelector('.header__volume').addEventListener('click', function () {
    this.classList.toggle('active') ? audioOsn.play() : audioOsn.pause();
    gsap.to('.header__volume-popis', { 
        width: this.classList.contains('active') ? '0%' : '150%', 
        duration: 0.5, 
        ease: customEase 
    });
});