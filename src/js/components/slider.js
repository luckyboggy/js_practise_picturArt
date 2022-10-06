const slider = (slidesSlelector, direction, prev, next) => {
    const slides = document.querySelectorAll(slidesSlelector);


    let slideIndex = 1,
        paused = false;

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });
        slides[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            changeSlide(-1);
            slides[slideIndex - 1].classList.remove('slideInLeft');
            slides[slideIndex - 1].classList.add('slideInRight');

        });

        nextBtn.addEventListener('click', () => {
            changeSlide(1);
            slides[slideIndex - 1].classList.remove('slideInRight');
            slides[slideIndex - 1].classList.add('slideInLeft');
        });

    } catch (err) { }

    function activateAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(() => {
                changeSlide(1);
                slides[slideIndex - 1].classList.add('slideInDown');
            }, 6000);
        } else {
            paused = setInterval(() => {
                changeSlide(1);
                slides[slideIndex - 1].classList.remove('slideInRight');
                slides[slideIndex - 1].classList.add('slideInLeft');
            }, 6000);
        }
    }

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

    activateAnimation();
};

export default slider;