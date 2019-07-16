window.onload = function() {

    let bg = document.querySelector('.header .background'); // bg image
    let count = 0; // number of current slide
    const IMAGES = 3; // count of slides

    let sliderDots = document.querySelectorAll('.header .nav-slider li'); 
    let sliderControl = document.querySelector('.header .nav-slider'); 

    let modalWindow = document.querySelector('.modal-window');
    let modalOverlay = document.querySelector('.modal-overlay');

    let navBar = document.querySelector('.navbar');
    let close = document.querySelector('.close');

    // id for clearInterfal
    let unFadeId,
    fadeId;

    const overlayOpacityStep = 0.1;
    const modalOpacityStep = 0.2; 

    let sliderOn = setInterval(slider, 5000);

    sliderControl.onclick = interraptSlider;
    
    navBar.onclick = showModal;

    modalOverlay.onclick = hideModal;

    close.onclick = closeModal;

    
    function interraptSlider(event) {
        
        let currentItem = event.target;
        console.dir(currentItem.classList);
        // drag number of nav onlick 
        let currentCount = parseInt(currentItem.classList[0].match(/\d+/)); 
        // check the correction of count
        if(isNaN(currentCount)) {
            return 0;
        }
        // when we click on slides nav - the interval is stopped
        clearInterval(sliderOn); 
        bg.classList.remove('bg-' + count);
        sliderDots[count].classList.remove('active');
        count = currentCount;
        sliderDots[count].classList.add('active');
        bg.classList.add('bg-' + count);
        // and than we start interval again
        sliderOn = setInterval(slider, 5000);

    }

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
    
    function fade() {
        if(modalOverlay.style.opacity != 0) {
            modalWindow.style.opacity -= modalOpacityStep;
            modalOverlay.style.opacity -= overlayOpacityStep;
        } else {
            setTimeout(function() {
                addStyleGroup([modalOverlay,
                    modalWindow], 'display', 'none');
                addStyleElement(document.body, 'overflow', 'auto');
            }, 250);
            clearInterval(fadeId);
        }
    }
    
    function unFade() {
        if(modalOverlay.style.opacity < 0.55) {
            modalWindow.style.opacity = +modalWindow.style.opacity +
                                        modalOpacityStep;

            modalOverlay.style.opacity = +modalOverlay.style.opacity + 
                                        overlayOpacityStep;
        } else {
            clearInterval(unFadeId);
        }
    }

    function showModal() {
        if(window.screen.width < 1024) {
            return false;
        }
        addStyleGroup([modalOverlay,
            modalWindow], 'display', 'block');
        addStyleGroup([modalOverlay,
            modalWindow], 'opacity', '0');  
        addStyleElement(document.body, 'overflow', 'hidden');    
        unFadeId = setInterval(unFade, 50);
    }

    function hideModal() {
        fadeId = setInterval(fade, 50);
    }

    function closeModal() {
        addStyleGroup([modalOverlay,
                        modalWindow], 'display', 'none');
        addStyleGroup([modalOverlay,
                        modalWindow], 'opacity', '0');  
        addStyleElement(document.body, 'overflow', 'auto');
    }


    function addStyleGroup(elements, changeStyle, value) {
        for(let i = 0; i < elements.length; i++) {
            elements[i].style[changeStyle] = value;
        }
    }


    function addStyleElement(element, changeStyle, value) {
        element.style[changeStyle] = value;
    }
};
