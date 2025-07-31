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

// 9575 ~ 10384 까지 블록이 줄어듬