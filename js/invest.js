const investTextFirst = document.querySelector('.invest-text-box1');
const investPhone = document.querySelector('.invest-phone-box');
const investText2 = document.querySelector('.invest-text-box2');
const investText3 = document.querySelector('.invest-text-box3');
const investText4 = document.querySelector('.invest-text-box4');



let investObserver = new IntersectionObserver((e) => {
    e.forEach((box) => {
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0)';
        }
    })
})


investObserver.observe(investTextFirst);
investObserver.observe(investPhone);
investObserver.observe(investText2);
investObserver.observe(investText3);
investObserver.observe(investText4);