const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
//Toggle Nav
    burger.addEventListener('click' , () => {
        nav.classList.toggle('nav-active');
    });
//animate Links
    navLinks.forEach((link, index) => {
     if (link.style.animation) {
        link.style.animation = '';
     } else {
        link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 + 0.5}s`;
        
     }
     //burger animation
     burger.classList.toggle('toggle'); 
        
    });
}

navSlide();
  //explore portfolio
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');
