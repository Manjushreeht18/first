//take the value from active class and remove previous active 
//class and add active class to new element

//use quuery selector to

const boxes = document.querySelectorAll('.box')
boxes.forEach(box => {
    box.addEventListener("click", () => {
        removeActiveClasses()
        box.classList.add('active')
    })
})

function removeActiveClasses() {
    boxes.forEach(box => {
        box.classList.remove('active')
    })
}