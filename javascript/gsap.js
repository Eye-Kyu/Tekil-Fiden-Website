

//const timeline12 = new Timeline
gsap.registerPlugin(ScrollTrigger);

/* 
const magneto = document.querySelector('.magneto-batan')
const magnetoText = document.querySelector('.magneto-batan .text')
const dbgr = document.querySelector(' #debugger')

//mouse movement
const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect()
    const magnetoStrength = 60
    const magnetoTextStrength = 120
    const newX = ((event.clientX - boundBox.left)/magneto.offsetWidth) - 0.5
    const newY = ((event.clientY - boundBox.top)/magneto.offsetHeight) - 0.5

//Just for Debugging
dbgr.innerHTML = 'cursorX: ' + event.clientX
                + '<br>boxLeft: ' + Math.ceil(boundBox.left)
                + '<br>cursorInsideButton: ' + Math.ceil(event.clientX - boundBox.left)
                + '<br>relativeToTotalWidth: ' + ((event.clientX - boundBox.left)/magneto.offsetWidth).toFixed(2)
                + '<br>shifted: ' + ((event.clientX - boundBox.left)/magneto.offsetWidth - 0.5).toFixed(2)



//move mouse to new position
gsap.to(magneto, {
    duration: 1,
    x: newX * magnetoStrength,
    y:newY * magnetoStrength,
    ease: Power4.easeOut
})
//move mouseText to new position
gsap.to(magnetoText, {
    duration: 1,
    x: newX * magnetoTextStrength,
    y:newY * magnetoTextStrength,
    ease: Power4.easeOut
}) 
}

//MOuse leave Stuff
const resetMagneto = (event) => {
    gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease:Elastic.easeOutout
    })

    gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease:Elastic.easeOut
    })
}

//add EventLIsteners
magneto.addEventListener('mouseover', activateMagneto)
magneto.addEventListener('mouseleave', resetMagneto)



//Gsap scroll Trigger
const entries = document.querySelector('.entry')

entries.forEach(entry => {
    let reason = entry.querySelector('.reason') 
    

    gsap.set(reason, {
        xPercent: -100,
        opacity: 0
    })

    gsap.to(reason, {
        scrollTrigger: {
            trigger: entry,
            start: 'top-bottom',
            end: 'bottom 90%',
            markers: true,
            scrub: true
        },
        xPercent: 0,
        opacity: 1
    })
});
*/



document.addEventListener("DOMContentLoaded", function() {
    let activeItemIndicator = CSSRulePlugin.getRule(".menu-item p#active::after");
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;

    gsap.set(".menu-item p", {y: 225});


    const timeline = gsap.timeline({paused: true});

    timeline.to(".overlay", {
        //duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut"
    });

    timeline.to(".menu-item p", {
        duration: 1.5,
        y: 0,
        stagger: 0.3,
        ease: "power4.inOut"
    }, "-=1");

    timeline.to(activeItemIndicator, {
        width: "100%",
        duration: 1,
        ease: "power4.inOut",
        delay: 0.5
    }, "<");

    timeline.to(".sub-nav", {
        bottom: "10%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5
    }, "<");
    

    toggleButton.addEventListener("click", function() {
        if(isOpen) {
            timeline.reverse();
        }else {
            timeline.play();
        }
        isOpen = !isOpen;
    })
})

gsap.set('.mbisha', {
    y: 32,
    opacity : 0
})
gsap.set('.SMS', {
    y: 32,
    opacity : 0
})
gsap.set('.weoffer', {
    y: -12,
    opacity : 0
})

gsap.set('.def', {
    opacity : 0,
})

const tl2 = gsap.timeline({delay:0});


tl2.to(".mbisha", {
    top: 0,
    opacity : 1,
    duration: 2,
    ease: "power1.inOut"
});

tl2.to(".weoffer", {
    opacity: 1,
    duration: 1,
    y: 22,
    ease: "power2.inOut"
}, "-=1");
   tl2.to(".Clients", {
   backgroundColor: '#a5a5a5',
    scrollTrigger: {
        trigger: '.Clients',
        start: 'top 80%',
        end: "+=600",
        backgroundColor: '#a5a5a5',
        scrub: 1,
        duration: 1
    }
 });

//contact page 
gsap.to(".SMS", {
    top: 0,
    opacity : 1,
    duration: 2,
    ease: "power1.inOut"
});


 //sticky nav on Scroll
 gsap.set('.nav-bg', {
    backgroundColor: '#000',
    opacity: 0
 })
 gsap.set('b2top', {
    yPercent: -100
 })
 const tl1 = gsap.timeline({
    scrollTrigger: {
        start: 'top+=200',
        end: '+=1',
        toggleActions: 'play none none reverse',
        scrub: 2
    }
 })

 tl1.to('.nav-bg', {
    opacity: 1
 })


 //stagger scrolling (pg 2)
 const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.mboka',
        scrub: 1,
        start: 'top 80%', 
        end: "+=800",
        duration: 3,
        toggleActions: 'play none none reverse',
        ease: 'power4.inOut'
    }
})
.to ('.def', {
    stagger: .2,
    y: -100,
    opacity: 1,
    scrub: true
})
