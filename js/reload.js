window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

const header = document.getElementById('header');

function border() {
    if(scrollY != 0)
        header.classList.add('borderBottom');
    else
        header.classList.remove('borderBottom');
}

border();

window.addEventListener('scroll', border);