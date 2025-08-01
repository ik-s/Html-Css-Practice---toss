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

const leftBlock = document.querySelector('.img-left-block');
const rightBlock = document.querySelector('.img-right-block');

const startY = 9575;
const endY = 10384;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY <= startY) {
        leftBlock.style.transform = 'translateX(0%)';
        rightBlock.style.transform = 'translateX(0%)';
    }
    else if (scrollY >= endY) {
        leftBlock.style.transform = 'translateX(-100%)';
        rightBlock.style.transform = 'translateX(100%)';
    }
    else {
        const ratio = (scrollY - startY) / (endY - startY);
        const percent = ratio * 100;
        leftBlock.style.transform = `translateX(-${percent}%)`;
        rightBlock.style.transform = `translateX(${percent}%)`;
    }
});

const fImg2 = document.querySelector('.f-img2');
const fImgText = document.querySelector('.finance-imgAndtext');
const fText5 = document.querySelector('.finance-text5');
const fImg4 = document.querySelector('.finance-img4');
const fText67 = document.querySelector('.finance-text-6to7');


const f2startY = 11853;
const f2endY = 12653;

const fITstartY = 12231;
const fITendY = 12731;

const fT5startY = 12831;
const fT5endY = 13109;

const fI4startY = 13109;
const fI4endY = 13709;

const fT67startY = 13888;
const fT67endY = 14188;



window.addEventListener('scroll', () => {
    
    if (scrollY <= f2startY) {
        fImg2.style.opacity = 0;
    }
    else if (scrollY >= f2endY) {
        fImg2.style.opacity = 1;
    }
    else {
        const Fratio2 = (scrollY - f2startY) / (f2endY - f2startY);
        fImg2.style.opacity = `${Fratio2}`;
    }
});

window.addEventListener('scroll', () => {
    
    if (scrollY <= fITstartY) {
        fImgText.style.opacity = 0;
    }
    else if (scrollY >= fITendY) {
        fImgText.style.opacity = 1;
    }
    else {
        const Fratio3 = (scrollY - fITstartY) / (fITendY - fITstartY);
        fImgText.style.opacity = `${Fratio3}`;
    }
});

window.addEventListener('scroll', () => {
    
    if (scrollY <= fT5startY) {
        fText5.style.opacity = 0;
    }
    else if (scrollY >= fT5endY) {
        fText5.style.opacity = 1;
    }
    else {
        const Fratio4 = (scrollY - fT5startY) / (fT5endY - fT5startY);
        fText5.style.opacity = `${Fratio4}`;
    }
});

window.addEventListener('scroll', () => {
    
    if (scrollY <= fI4startY) {
        fImg4.style.opacity = 0;
    }
    else if (scrollY >= fI4endY) {
        fImg4.style.opacity = 1;
    }
    else {
        const Fratio5 = (scrollY - fI4startY) / (fI4endY - fI4startY);
        fImg4.style.opacity = `${Fratio5}`;
    }
});

window.addEventListener('scroll', () => {
    
    if (scrollY <= fT67startY) {
        fText67.style.opacity = 0;
    }
    else if (scrollY >= fT67endY) {
        fText67.style.opacity = 1;
    }
    else {
        const Fratio6 = (scrollY - fT67startY) / (fT67endY - fT67startY);
        fText67.style.opacity = `${Fratio6}`;
    }
});