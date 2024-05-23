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
        duration: 1.5,
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