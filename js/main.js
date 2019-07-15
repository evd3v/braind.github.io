window.onload = function() {

    let bg = document.querySelector('.header .background');
    let count = 0;
    const IMAGES = 3;

    let sliderDots = document.querySelectorAll('.header .nav-slider li');
    let sliderControl = document.querySelector('.header .nav-slider');

    let modalWindow = document.querySelector('.modal-window');
    let modalOverlay = document.querySelector('.modal-overlay');

    let navBar = document.querySelector('.navbar');
    let close = document.querySelector('.close');

    let sliderOn = setInterval(slider, 5000);

    let unFadeId,
    fadeId;

    sliderControl.onclick = function(event) {
        
        let currentItem = event.target;
        let currentCount = +currentItem.id[4];

        if(isNaN(+currentItem.id[4])) {
            return 0;
        }
        clearInterval(sliderOn);
        bg.classList.remove('bg-' + count);
        sliderDots[count].classList.remove('active');
        count = currentCount;
        console.log(count);
        sliderDots[count].classList.add('active');
        bg.classList.add('bg-' + count);
        sliderOn = setInterval(slider, 5000);
    };

    function slider() {
        bg.classList.remove('bg-' + count);
        sliderDots[count].classList.remove('active');
        if(count === 2) {
           count = 0;
           bg.classList.add('bg-' + count);
           sliderDots[count].classList.add('active');
           return true;
        }
        count++;
        bg.classList.add('bg-' + count);
        sliderDots[count].classList.add('active');
    }


    function showModal() {
        if(window.screen.width < 1024) {
            return 0;
        }
        modalWindow.style.display = 'block';
        modalOverlay.style.display = 'block';
        modalOverlay.style.opacity = 0;
        modalWindow.style.opacity = 0;
        let modalUnFade = setInterval(unFade, 50);
        unFadeId = modalUnFade;
    }

    function hideModal() {
        if(window.screen.width < 1024) {
            return 0;
        }
        let modalFade = setInterval(fade, 50);
        fadeId = modalFade;
    }

    navBar.onclick = function(event) {
        if(window.screen.width < 1024) {
            return 0;
        }
        showModal();
        document.body.style.overflow = 'hidden';
    };

    modalOverlay.onclick = function(event) {
        if(window.screen.width < 1024) {
            return 0;
        }
        hideModal();
    };

    close.onclick = function() {
        if(window.screen.width < 1024) {
            return 0;
        }
        modalWindow.style.display = 'none';
        modalOverlay.style.display = 'none';
        modalOverlay.style.opacity = '0';
        modalWindow.style.opacity = '0';
        document.body.style.overflow = 'auto';
    };

    function fade() {
        if(window.screen.width < 1024) {
            return 0;
        }
        if(modalOverlay.style.opacity != 0) {
            console.log(modalWindow.style.opacity);
            modalWindow.style.opacity = +modalWindow.style.opacity - 0.2;
            modalOverlay.style.opacity = +modalOverlay.style.opacity - 0.1;
        } else {
            setTimeout(function() {
                modalWindow.style.display = 'none';
                modalOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 250);
            clearInterval(fadeId);
        }
    }
    
    function unFade() {
        if(window.screen.width < 1024) {
            return 0;
        }
        if(modalOverlay.style.opacity < 0.55) {
            console.log(modalWindow.style.opacity);
            modalWindow.style.opacity = +modalWindow.style.opacity + 0.2;
            modalOverlay.style.opacity = +modalOverlay.style.opacity + 0.1;
        } else {
            clearInterval(unFadeId);
        }
    }

};
