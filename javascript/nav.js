//Preloader
const preloader = document.querySelector("[data-preload]");

window.addEventListener("load" , function()  {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});
  


//Smooth scrolling with lenis
const lenis = new lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

