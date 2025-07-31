const financeImg1 = document.querySelector('.f-img1');
const financeText1 = document.querySelector('.finance-text-2to4');

const startFImg1Y = 10541;
const endFImg1Y = 11260;
const startFText1Y = 11485;
const endFText1Y = 11885;

window.addEventListener('scroll', () => {
    
    if (scrollY <= startFImg1Y) {
        financeImg1.style.opacity = 0;
    }
    else if (scrollY >= endFImg1Y) {
        financeImg1.style.opacity = 1;
    }
    else {
        const Fratio1 = (scrollY - startFImg1Y) / (endFImg1Y - startFImg1Y);
        financeImg1.style.opacity = `${Fratio1}`;
    }
});

window.addEventListener('scroll', () => {
    
    if (scrollY <= startFText1Y) {
        financeText1.style.opacity = 0;
    }
    else if (scrollY >= endFText1Y) {
        financeText1.style.opacity = 1;
    }
    else {
        const Fratio2 = (scrollY - startFText1Y) / (endFText1Y - startFText1Y);
        financeText1.style.opacity = `${Fratio2}`;
    }
});