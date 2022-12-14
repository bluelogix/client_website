gsap.registerPlugin(ScrollTrigger);
const burger = document.querySelector('nav svg');

burger.addEventListener('click', () => {
    if(burger.classList.contains('active')) {
        gsap.to('.links', {x: '100%'});
        gsap.set('body', {overflow: 'auto'})
        gsap.set('body', {overflowX: 'hidden'})

    }else {
        gsap.to('.links', {x: '0%'});
        gsap.fromTo('.links a', {opacity: 0}, {opacity: 1, delay: 0.2, stagger: 0.25})
        gsap.set('body', {overflow: 'hidden'})
    }
    burger.classList.toggle('active')
})

const videos = gsap.utils.toArray('.video');

let mm = gsap.matchMedia();
console.log(mm)
mm.add('(min-width: 500px)', () => {
gsap.set(videos, {opacity: 0})
videos.forEach((video) => {
        ScrollTrigger.create({
            trigger: video,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
            onEnter: () => {
                gsap.to(video, {opacity:1});
                video.play();
            },
            onEnterBack: () => video.play(),
            onLeave: () => video.pause(),
            onLeaveBack: () => video.pause()
        })
    })
})

    



