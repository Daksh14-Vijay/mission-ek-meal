// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


// Fade In Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".about, .card, .join")
.forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});


// Hero Text Animation

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0px)";

    }, 300);

});


// Button Hover Sound Effect (Optional)

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px) scale(1.03)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px) scale(1)";

    });

});


// Smooth Reveal Cards

document.querySelectorAll(".card").forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.2}s`;

});