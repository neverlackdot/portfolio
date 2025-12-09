document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.getElementById("primary-nav");
    const navLinks = nav ? nav.querySelectorAll("a[href^='#']") : [];

    if (navToggle && nav) {
        navToggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");
            navToggle.setAttribute("aria-expanded", String(isOpen));
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            if (targetId && targetId.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                if (nav) {
                    nav.classList.remove("open");
                    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
                }
            }
        });
    });
});
