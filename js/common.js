function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
}

function closeMenu() {
    const navLinks = document.querySelector(".nav-links");
    const hamburger = document.querySelector(".hamburger");
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
}

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#667eea" },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: false,
            anim: { enable: false },
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#667eea",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
        },
    },
    retina_detect: true,
});

function handleSubmit(e) {
    e.preventDefault();
    alert("🎉 Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.");
    e.target.reset();
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = "fadeInUp 1s ease forwards";

            if (entry.target.id === "skills") {
                const progressBars =
                    entry.target.querySelectorAll(".progress-fill");
                progressBars.forEach((bar, index) => {
                    setTimeout(() => {
                        bar.style.width = bar.style.width;
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
});

window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.style.color = "#fff";
        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#667eea";
        }
    });
});

document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
});

document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
    });
});

const heroContent = document.querySelector(".hero-content");
let floatDirection = 1;

setInterval(() => {
    const currentTransform = heroContent.style.transform || "translateY(0px)";
    const currentY = parseFloat(
        currentTransform.match(/translateY\(([-\d.]+)px\)/) || [0, 0]
    )[1];

    if (currentY >= 10) floatDirection = -1;
    if (currentY <= -10) floatDirection = 1;

    heroContent.style.transform = `translateY(${currentY + floatDirection}px)`;
    heroContent.style.transition = "transform 0.5s ease";
}, 50);


