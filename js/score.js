const scoreTextFirst = document.querySelector('.score-text-box1');
const scoreBoxes = document.querySelectorAll('.grid-item-box');


let scoreObserver = new IntersectionObserver((e) => {
    e.forEach((box) => {
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0)';
        }
    })
})


scoreObserver.observe(scoreTextFirst);

scoreBoxes.forEach((box) => {
    scoreObserver.observe(box);
});