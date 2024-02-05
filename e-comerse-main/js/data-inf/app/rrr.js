


const slides = document.querySelector('.slides');
    const dotsContainer = document.querySelector('.dots');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentSlide = 0;

    // Crear puntos dinámicamente
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dotsContainer.appendChild(dot);
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
    }

    // Agregar clase 'active' al primer punto
    const dots = document.querySelectorAll('.dot');
    dots[currentSlide].classList.add('active');

    function goToSlide(index) {
        currentSlide = index;
        updateSlider();
    }

    function updateSlider() {
        slides.style.transform = `translateX(${-currentSlide * 100}%)`;

        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentSlide) {
                dot.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    setInterval(nextSlide, 5000);

    




    