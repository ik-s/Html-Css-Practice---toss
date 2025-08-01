const businessTitle = document.querySelector('.business-title');
const businessSub = document.querySelector('.business-title-sub-box');
const businessNav = document.querySelector('.business-nav');



let businessObserver = new IntersectionObserver((e) => {
    e.forEach((box) => {
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0)';
        }
    })
})


businessObserver.observe(businessTitle);
businessObserver.observe(businessSub);
businessObserver.observe(businessNav);