const remitTextFirst = document.querySelector('.remit-text-box1');
const remitBox2 = document.querySelector('.remit-box2');
const remitBox3 = document.querySelector('.remit-box3');
const remitBox4 = document.querySelector('.remit-box4');


let remitObserver = new IntersectionObserver((e) => {
    e.forEach((box) => {
        if(box.isIntersecting) {
            box.target.style.opacity = 1;
            box.target.style.transform = 'translateY(0)';
        }
    })
})

remitObserver.observe(remitTextFirst);
remitObserver.observe(remitBox2);
remitObserver.observe(remitBox3);
remitObserver.observe(remitBox4);