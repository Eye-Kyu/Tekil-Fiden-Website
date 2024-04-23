const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
    if(entry.isIntersecting) {
        entry.target.classList.add('show');

    }else{
        entry.target.classList.remove('show');
    }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const inputs = document.querySelectorAll(".contact-input")

inputs.forEach(ipt => {
    ipt.addEventListener("focus", () =>{
     ipt.parentNode.classList.add("focus")
     ipt.parentNode.classList.add("not-empty")
    })
})
inputs.forEach(ipt => {
    if (ipt.value =="") {
     ipt.parentNode.classList.remove("not-empty")
    }
    ipt.addEventListener("blur", () =>{
    ipt.parentNode.classList.remove("focus")
    })
})
