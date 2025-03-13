const dates = ["28 jul 2023", "27 dec 2019", "3 aug 2018", "21 dec 2017", "2 sep 2016", "4 sep 2015", "18 aug 2014", "21 may 2013"];
const mainText = [
    "'Utopia' by Travis Scott is one of the most highly anticipated albums in the music world. Following the phenomenal success of 'Astroworld,' Scott's latest project promises to take listeners on a journey into an idealized world. Travis has described 'Utopia' as an exploration of a brighter, more positive vision of the future, a stark contrast to the chaotic and dystopian themes of his previous work.",
     "JACKBOYS is a hip-hop collective formed under Travis Scott's Cactus Jack Records. The group includes artists like Sheck Wes, Don Toliver, and producer Chase B. They released their self-titled debut compilation album 'JACKBOYS' in December 2019. The album features collaborative tracks and includes hit songs like 'GANG GANG' and 'OUT WEST,' showcasing a blend of innovative beats and energetic performances.", 
     "'Astroworld' is a highly celebrated album by Travis Scott, named after a defunct amusement park in Houston, Texas, that played a significant role in his childhood. The album takes listeners on a thrilling ride through a mix of trap beats, psychedelic elements, and introspective lyrics, reflecting both the playful and dark sides of amusement parks",
     "'Huncho Jack, Jack Huncho' is a powerful collaboration between two big names in the rap scene, Travis Scott and Quavo. This album captures the dynamic synergy between Travis’s signature atmospheric vibes and Quavo’s melodic flow. It's a journey through high-energy anthems and hypnotic beats, peppered with memorable hooks and clever wordplay.",
     "'Birds in the Trap Sing McKnight' is Travis Scott's second studio album, consolidating his status in the contemporary music scene. The album features a blend of trap and psychedelic influences, creating a unique atmosphere that permeates every track. The album title is a metaphor expressing a sense of entrapment. 'Birds' symbolize artists striving to break free from the trap of life circumstances.",
     "By narrating personal experiences and fantasies, 'Rodeo' immerses listeners into Travis Scott's world, full of vivid imagery and emotions. This album is not just a collection of tracks, but a true musical journey with hits that have firmly taken root in the hearts of fans.  By narrating personal experiences and fantasies, 'Rodeo' immerses listeners into Travis Scott's world, full of vivid imagery and emotions.",
     "'Days Before Rodeo' is Travis Scott's second mixtape, which became a breakthrough in his career and solidified his status as one of the most promising artists of his time. This album is a powerful blend of hip-hop, trap, and atmospheric elements, creating a dark and mesmerizing soundscape. ",
     "'Owl Pharaoh' is Travis Scott's debut mixtape, which immediately caught attention with its unique sound and creative approach. This album is a blend of hip-hop, trap, and experimental elements, creating a captivating and atmospheric musical palette. From the first tracks, listeners are immersed in a world filled with deep bass, unusual melodies, and innovative production."
    ];
const miniText1 = [
    "The album's concept revolves around the idea of creating a perfect society through music, embracing themes of growth",
    " The project received positive reviews and debuted at number one on the Billboard 200 chart.",
    "This project isn't just an album—it's an immersive experience that stays true to its nostalgic yet futuristic theme.",
    " It’s a must-listen for fans of either artist, showcasing their ability to elevate each other's strengths in an exciting musical partnership.",
    "This album is not just a collection of songs, but a whole epic of feelings and experiences that Scott",
    "Travis Scott actively participated in producing the album, collaborating with renowned producers like Mike Dean and Metro Boomin.",
    "Each track on Days Before Rodeo is a unique piece that tells its own story and conveys strong emotions.",
    "With the release of Owl Pharaoh, Travis Scott demonstrated his potential as an innovator and creative artist"
];
const miniText2 = [
    "Travis has been tight-lipped about the specific details",
    "The album features contributions from Quavo and Offset.",
    "Astroworld won the 2019 BET Hip Hop Award for Best Album.CopyGood responseBad response",
    "Huncho Jack, Jack Huncho is its cover, which was created by the  Ralph Steadman",
    "The tracks goosebumps, pick up the phone, became hits.",
    "90210: A reference to the postal code of Beverly Hills.",
    "This mixtape showcased his ability to create complex and emotionally rich tracks.",
    "Each track is a little story filled with emotions and energy."
];
const miniText3 = [
    "Whether you're a long-time fan or a new listener, Utopia is set to be an unforgettable",
    "The album includes the hit song OUT WEST featuring Travis Scott and Young Thug.",
    "Travis's attention to detail shines here, with seamless transitions between tracks",
    "The chemistry between the two artists is evident, creating a seamless blend that allows each ",
    "The album features notable collaborations with artists such as Kendrick Lamar",
    "Critics praised the innovative sound and unique style.",
    "Days Before Rodeo became an important milestone in Travis Scott's career.",
    "This album became the starting point for his rise to the top of the musical Olympus."
];
const nameText = [
    "utopia",
    "jackboys",
    "astroworld",
    "Huncho Jack",
    "BIRDS IN THE TRAP",
    "RODEO",
    "days before rodeo",
    "owl pharaoh"
];
const name = [
    "TIL FURTHER NOTICE",
    "HIGHEST IN THE ROOM",
    "WAKE UP",
    "Huncho Jack",
    "goosebumps (feat. Kendrick Lamar)",
    "Mamacita ",
    "Days Before Rodeo: The Prayer",
    "Meadow Creek"
];

window.addEventListener("load", () => {
    const arrows = document.querySelectorAll(".control__arrow");
    const sliderImages = document.querySelectorAll('.slider__albom-photo');
    const musicImages = document.querySelectorAll('.music__info-img');

    let currentIndex = 0; // Текущий индекс активного элемента

    function handleMediaQueryChange(e) {
        if (e.matches) {
            updateTextContentMobile(currentIndex, 40)
            initClickHandlers();
        } else {
            updateTextContent(currentIndex, 40);
            initClickHandlers();
        }
    }

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);

    // Функция для обновления контента и запуска анимации по индексу
    function updateSlide(index) {
        // Защита от выхода за пределы массива слайдов
        if (index < 0) {
            currentIndex = sliderImages.length - 1; // Перемещаемся на последний слайд
        } else if (index >= sliderImages.length) {
            currentIndex = 0; // Перемещаемся на первый слайд
        } else {
            currentIndex = index;
        }

        gsap.to(".slider-pick", { top: `${12 * currentIndex}vh`, duration: 1.5, ease: customEase });

        sliderImages.forEach((img, idx) => {
            gsap.to(img, { opacity: idx === currentIndex ? 1 : 0.2 });
        });


        if (mediaQuery.matches) {gsap.fromTo(".block--description-animation-name",{y:"0%"},{y: "100%",duration: .75, ease: customEase });}
    
        document.querySelectorAll('.block--description-animation').forEach((el, idx) => {
            gsap.fromTo(el, { y: "0%" }, { y: "100%", duration: .5, delay: idx * 0.03 });
        });

        // Временно отключаем кнопки
        arrows.forEach(arrow => arrow.style.pointerEvents = 'none');
        document.querySelector(".slider").style.pointerEvents = 'none';
        setTimeout(() => {
            arrows.forEach(arrow => arrow.style.pointerEvents = 'auto'); // Восстанавливаем кнопки через 1.5 секунды
            document.querySelector(".slider").style.pointerEvents = 'auto';
        }, 2000);

        setTimeout(() => {
            // document.querySelector('.date-animation').textContent = dates[currentIndex];
                if (mediaQuery.matches) {
                updateTextContentMobile(currentIndex, 40);
                } else {
                updateTextContent(currentIndex, 40);
                }


            document.querySelectorAll('.block--description-animation').forEach((el, idx) => {
                gsap.fromTo(el, { y: "100%" }, { y: "0%", duration: .5, delay: idx * 0.03, ease: customEase });
            });

            // Переключение изображений
            musicImages.forEach((image, idx) => {
                gsap.to(image, { opacity: idx === currentIndex ? 1 : 0, zIndex: idx === currentIndex ? 2 : 1, duration: .5 });
            });
            if (mediaQuery.matches) {gsap.fromTo(".block--description-animation-name",{y:"100%"},{y: "0%",duration: .5, ease: customEase });}
        }, 1000);
    }


    // Функция для установки обработчиков кликов
    function initClickHandlers() {
        sliderImages.forEach((sliderImage, index) => {
            sliderImage.addEventListener('click', () => updateSlide(index));
        });

        arrows[0].addEventListener('click', () => updateSlide(currentIndex - 1)); // Переключение назад
        arrows[1].addEventListener('click', () => updateSlide(currentIndex + 1)); // Переключение вперед
    }

    // Функция для обновления текстового контента
    function updateDescriptionText(blockSelector, textArray, index, maxLineLength = 40) {
        const blocks = document.querySelectorAll(blockSelector);

        blocks.forEach(block => {
            block.innerHTML = "";

            const words = textArray[index].split(' ');
            let line = '';
            let lines = [];

            words.forEach(word => {
                line += word + ' ';
                if (line.length > maxLineLength) {
                    lines.push(line.trim());
                    line = '';
                }
            });
            if (line) lines.push(line.trim());

            lines.forEach(line => {
                const outerDiv = document.createElement('div');
                outerDiv.classList.add('block--description-div');

                const innerDiv = document.createElement('div');
                
                // Проверяем медиазапрос и класс 'winding-name'
                if (mediaQuery.matches && block.classList.contains('music__info-block--name')) {
                    innerDiv.classList.add('block--description-animation-name');
                } else {
                    innerDiv.classList.add('block--description-animation');
                }

                innerDiv.textContent = line;

                outerDiv.appendChild(innerDiv);
                block.appendChild(outerDiv);
            });
        });
    }

    function updateTextContent(index, maxLineLength) {
        updateDescriptionText('.music__info-block--date', dates, index, 60);
        updateDescriptionText('.music__info-block--description', mainText, index, 40);
        updateDescriptionText('.mini-description-first', miniText1, index, 17);
        updateDescriptionText('.mini-description-two', miniText2, index, 17);
        updateDescriptionText('.mini-description-three', miniText3, index, 17);
        updateDescriptionText('.music__info-block--name', nameText, index, 120);
        updateDescriptionText('.winding-name', name, index, 120);
    }
    function updateTextContentMobile(index, maxLineLength) {
        updateDescriptionText('.music__info-block--date', dates, index, 60);
        updateDescriptionText('.music__info-block--description', mainText, index, 60);
        updateDescriptionText('.music__info-block--name', nameText, index, 120);
        updateDescriptionText('.winding-name', name, index, 120);
    }

    // Обработчик клика по изображениям слайдера
    sliderImages.forEach((sliderImage, index) => {
        sliderImage.addEventListener('click', () => {
            // Применяем анимацию ко всем изображениям
            musicImages.forEach((image, imageIndex) => {
                if (imageIndex === index) {
                    // Для выбранного изображения: opacity 1, z-index 2
                    gsap.to(image, { opacity: 1, zIndex: 2, duration: .5 });
                } else {
                    // Для остальных изображений: opacity 0, z-index 1
                    gsap.to(image, { opacity: 0, zIndex: 1, duration: .5 });
                }
            });
        });
    });
});