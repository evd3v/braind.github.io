window.onload = function() {

    let bg = document.querySelector('.header .background');
    let count = 0;
    const IMAGES = 3;

    let sliderDots = document.querySelectorAll('.header .nav-slider li');
    
    let sliderControl = document.querySelector('.header .nav-slider');

    setInterval(function() {
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
    }, 5000);

    sliderControl.onclick = function(event) {
        let currentItem = event.target;
        let currentCount = +currentItem.id[4];

        if(isNaN(+currentItem.id[4])) {
            return 0;
        }
        count = currentCount;
        for(let i = 0; i < 3; i++) {
            sliderDots[i].classList.remove('active');
            bg.classList.remove('bg-' + i);
        }
        console.log(count);
        sliderDots[count].classList.add('active');
        bg.classList.add('bg-' + count);
    };
};