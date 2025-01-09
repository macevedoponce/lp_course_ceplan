document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });

    gsap.from("#about .bg-gray-50, #modules .bg-white, #benefits .bg-white, #methodology .bg-gray-50", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });

    gsap.to(".animate-pulse", {
        scale: 1.05,
        duration: 0.5,
        repeat: -1,
        yoyo: true
    });

    gsap.to("#methodology svg", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".text-future-gradient", {
        backgroundPosition: "200% center",
        duration: 5,
        repeat: -1,
        ease: "none"
    });

    const testimonials = document.querySelectorAll('#testimonials .bg-gray-50');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.classList.remove('hidden');
                gsap.from(testimonial, { opacity: 0, x: 50, duration: 0.5 });
            } else {
                testimonial.classList.add('hidden');
            }
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    setInterval(nextTestimonial, 5000);
    showTestimonial(currentTestimonial);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('alpine:init', () => {
    Alpine.data('faqAccordion', () => ({
        selected: null,
        toggle(index) {
            this.selected = this.selected === index ? null : index;
        }
    }));
});

