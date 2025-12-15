let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
    slides[index].classList.remove("show");    // hide current slide
    index = (index + 1) % slides.length;       // next slide
    slides[index].classList.add("show");       // show next slide
}, 10000); // 
let lines = document.querySelectorAll(".line");
let i = 0;

function animateItems(slide) {
    let items = slide.querySelectorAll(".appear-item");
    let i = 0;
    items.forEach(item => item.classList.remove("show"));
    function showNext() {
        if (i < items.length) {
            items[i].classList.add("show");
            i++;
            setTimeout(showNext, 1000);
        }
    }
    showNext();
}

window.onload = () => {
    let slides = document.querySelectorAll(".slide");
    let index = 0;
    animateItems(slides[index]);

    setInterval(() => {
        slides[index].classList.remove("show");
        index = (index + 1) % slides.length;
        slides[index].classList.add("show");
        animateItems(slides[index]);
    }, 8000);
};

