const loanTextFirst = document.querySelector('.loan-left-top');
const loanPhone = document.querySelector('.loan-right');
const loanTextSecond= document.querySelector('.left-bottom-text');
const loanTextThird = document.querySelector('.left-bottom-sub');


let loanObserver = new IntersectionObserver((e) => {
    e.forEach((box) => {
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0)';
        }
    })
})

loanObserver.observe(loanTextFirst);
loanObserver.observe(loanPhone);
loanObserver.observe(loanTextSecond);
loanObserver.observe(loanTextThird);