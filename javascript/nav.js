//Preloader
const preloader = document.querySelector("[data-preload]");

window.addEventListener("load" , function()  {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

//Smooth scrolling with lenis
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)