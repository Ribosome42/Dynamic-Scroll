document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: '.scroll',
            start: 'top top',
            end: '+=10000 bottom',
            scrub: 0.5,
            pin: true,
            snap: {
                snapTo: [0.2, 0.4, 0.6, 0.8],
                delay: 0,
                duration: { min: 0.2, max: 0.5 },
            },
        }
    })
    .to('.c3', { scale: 0.8, duration: 0.1, opacity: 1, filter: 'blur(4px)' }, 0)
    .to('.c2', { scale: 0.7, duration: 0.1, filter: 'blur(8px)' }, 0)
    .to('.c1', { scale: 0.6, duration: 0.1, filter: 'blur(12px)' }, 0)
    
    .to('.c3', { scale: 1, duration: 0.1, opacity: 1, filter: 'blur(0px)' }, 0.1)
    .to('.c2', { scale: 0.8, duration: 0.1, opacity: 1, filter: 'blur(4px)' }, 0.1)
    .to('.c1', { scale: 0.7, duration: 0.1, filter: 'blur(8px)' }, 0.1)
    
    .to('.c2', { scale: 1, duration: 0.1, opacity: 1, filter: 'blur(0px)' }, 0.2)
    .to('.c1', { scale: 0.8, duration: 0.1, opacity: 1, filter: 'blur(4px)' }, 0.2)
    
    .to('.c1', { scale: 1, duration: 0.1, opacity: 1, filter: 'blur(0px)' }, 0.3)
    
    .to('.c4', { scale: 3, left: '0', opacity: 0, duration: 0.1 }, 0.1)
    .to('.c3', { scale: 3, left: '100%', opacity: 0, duration: 0.1 }, 0.2)
    .to('.c2', { scale: 3, left: '0', opacity: 0, duration: 0.1 }, 0.3)
    .to('.c1', { scale: 3, left: '100%', opacity: 0, duration: 0.1 }, 0.4);
});
