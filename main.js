/**
 * Marquee Animation for Partners Section using GSAP ScrollTrigger
 * أنيميشن الشركاء المتحركة باستخدام GSAP والـ Scroll
 */
function initMarquee() {
    const marqueeContent = document.getElementById('CarouselmarqueeContent');
    if (!marqueeContent || typeof gsap === 'undefined') return;

    // نسخ العناصر للحركة السلسة
    const items = marqueeContent.querySelectorAll('.Carousel__card');
    items.forEach(item => {
        const clone = item.cloneNode(true);
        marqueeContent.appendChild(clone);
    });

    // تسجيل ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // حركة الـ Marquee مع scroll الصفحة
    gsap.to(marqueeContent, {
        x: -marqueeContent.scrollWidth / 2,  // حرك لليسار نص العرض
        scrollTrigger: {
            trigger: marqueeContent.parentElement,
            start: 'top center',      // ابدأ لما الـ marquee يصير في المنتصف
            end: 'bottom center',     // انتهي لما يطلع من الشاشة
            scrub: 1,                 // حرك مع الـ scroll (smooth = 1)
            markers: false            // بدون علامات تصحيح
        },
        ease: 'none'
    });

    console.log('✅ Marquee with ScrollTrigger initialized');
}

/**
 * GSAP Animations (if GSAP is available)
 */
function initGSAPAnimations() {
    if (typeof gsap === 'undefined') {
        console.log('⚠️ GSAP not loaded, skipping GSAP animations');
        return;
    }

    // Animate intro cards on scroll
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray('.intro-card').forEach(card => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    once: true
                },
                duration: 0.8,
                opacity: 0,
                y: 30,
                ease: 'power2.out'
            });
        });
    }
}


/**
 * Initialize all animations
 */
function initAnimations() {
    initMarquee();
    initGSAPAnimations();
    initParticles();
}