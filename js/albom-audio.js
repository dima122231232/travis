document.addEventListener("DOMContentLoaded", () => {
    const audio = document.querySelector('.albom-musik1');
    const seekBar = document.getElementById("seekBar");
    const playPauseBtns = document.querySelectorAll(".playPause");
    const albumCovers = document.querySelectorAll(".slider__albom-photo");
    const arrows = document.querySelectorAll(".control__arrow");

    const currentTimeEl = document.getElementById("currentTime");
    const durationEl = document.getElementById("duration");

    const tracks = [
        '/audio/Utopia.mp3',
        '/audio/HIGHEST IN THE ROOM.mp3',
        '/audio/Travis Scott - WAKE UP.mp3',
        '/audio/Huncho Jack.mp3',
        '/audio/goosebumps (feat. Kendrick Lamar).mp3',
        '/audio/Mamacita.mp3',
        '/audio/The Prayer.mp3',
        '/audio/Meadow Creek.mp3',
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        if (index < 0) index = tracks.length - 1;
        if (index >= tracks.length) index = 0;
        currentTrackIndex = index;

        let nextTrackDuration = audio.duration;
        const currentSeconds = audio.currentTime || 0;

        audio.pause();
        gsap.to(".play", { opacity: 1, duration: 0.1 });
        gsap.to(".pause", { opacity: 0, duration: 0.1 });

        gsap.to(seekBar, {
            value: 0,
            "--progress": "0%",
            duration: 1.5,
            ease: "power4.inOut",
            onUpdate: () => {
                seekBar.style.setProperty("--progress", `${seekBar.value}%`);
            }
        });

        gsap.to({ time: nextTrackDuration }, {
            time: 0,
            duration: 1.5,
            ease: "power4.inOut",
            onUpdate: function () {
                durationEl.textContent = formatTime(this.targets()[0].time);
            }
        });

        gsap.to({ time: currentSeconds }, {
            time: 0,
            duration: 1.5,
            ease: "power4.inOut",
            onUpdate: function () {
                currentTimeEl.textContent = formatTime(this.targets()[0].time);
            },
            onComplete: () => {
                seekBar.value = 0;
                seekBar.style.setProperty("--progress", "0%");
                currentTimeEl.textContent = "0:00";

                audio.src = tracks[currentTrackIndex];

                gsap.to(".play", { opacity: 0, duration: 0.1 });
                gsap.to(".pause", { opacity: 1, duration: 0.1 });

                audio.load();
                audio.play().catch(error => console.error("Ошибка воспроизведения:", error));

                audio.addEventListener("loadedmetadata", () => {
                    nextTrackDuration = audio.duration;
                    gsap.to({ time: 0 }, {
                        time: nextTrackDuration,
                        duration: 1.5,
                        ease: "power4.inOut",
                        onUpdate: function () {
                            durationEl.textContent = formatTime(this.targets()[0].time);
                        }
                    });
                });
            }
        });
    }

    playPauseBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const isPaused = audio.paused;
            audio[isPaused ? 'play' : 'pause']();
            gsap.to(".play", { opacity: isPaused ? 0 : 1, duration: 0.1 });
            gsap.to(".pause", { opacity: isPaused ? 1 : 0, duration: 0.1 });
        });
    });

    albumCovers.forEach((cover, index) => {
        cover.addEventListener("click", () => loadTrack(index));
    });

    audio.addEventListener("timeupdate", () => {
        if (!isNaN(audio.duration) && audio.duration > 0) {
            seekBar.value = (audio.currentTime / audio.duration) * 100;
            seekBar.style.setProperty("--progress", `${seekBar.value}%`);
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    });

    audio.addEventListener("loadedmetadata", () => {
        seekBar.value = 0;
        seekBar.style.setProperty("--progress", "0%");
        durationEl.textContent = formatTime(audio.duration);
    });

    seekBar.addEventListener("input", () => {
        if (!isNaN(audio.duration) && audio.duration > 0) {
            audio.currentTime = (seekBar.value / 100) * audio.duration;
        }
    });

    arrows[0].addEventListener("click", () => loadTrack(currentTrackIndex - 1)); // Назад
    arrows[1].addEventListener("click", () => loadTrack(currentTrackIndex + 1)); // Вперед

    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    }
});
