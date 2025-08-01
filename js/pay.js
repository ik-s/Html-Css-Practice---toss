const payTextFirst = document.querySelector('.pay-text-box1');
const payPhone1 = document.querySelector('.pay-img-right');
const payText2 = document.querySelector('.pay-text-box2');
const payPhone2 = document.querySelector('.pay-img-left');
const payText3 = document.querySelector('.pay-text-box3');



let payObserver = new IntersectionObserver((e) => {
    e.forEach((box) => {
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0)';
        }
    })
})


payObserver.observe(payTextFirst);
payObserver.observe(payPhone1);
payObserver.observe(payText2);
payObserver.observe(payPhone2);
payObserver.observe(payText3);