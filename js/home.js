const homeTextFirst = document.querySelector('.home-text-box1');
const homeImgRight = document.querySelector('.home-img-right');
const homeTextSecond = document.querySelector('.home-text-box2');
const homeImgLeft = document.querySelector('.home-img-left');


let observer = new IntersectionObserver((e) => {
    e.forEach((box) => {
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0)';
        }
    })
})

observer.observe(homeTextFirst);
observer.observe(homeImgRight);
observer.observe(homeImgLeft);
observer.observe(homeTextSecond);