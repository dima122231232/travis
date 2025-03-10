document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const seekBar = document.getElementById("seekBar");
    
    document.querySelectorAll(".playPause").forEach(btn => {
        btn.addEventListener("click", () => {
            if (audio.paused) {
                audio.play();
                gsap.to(".play", { opacity: 0 ,duration:.1});
                gsap.to(".pause", { opacity: 1 ,duration:.1});
            } else {
                audio.pause();
                gsap.to(".play", { opacity: 1 ,duration:.1});
                gsap.to(".pause", { opacity: 0 ,duration:.1});
            }
        });
    });

    // Обновление ползунка при проигрывании
    audio.addEventListener("timeupdate", () => {
        seekBar.value = (audio.currentTime / audio.duration) * 100;
        seekBar.style.setProperty("--progress", `${seekBar.value}%`);  
        document.getElementById("currentTime").textContent = formatTime(audio.currentTime);
    });

    // Установка длительности при загрузке
    audio.addEventListener("loadedmetadata", () => {
        document.getElementById("duration").textContent = formatTime(audio.duration);
    });

    // Перемотка аудио через ползунок
    seekBar.addEventListener("input", () => {
        audio.currentTime = (seekBar.value / 100) * audio.duration;
    });

    // Форматирование времени
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    }
});
