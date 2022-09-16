import './less/index.less'

// Your code goes here!
console.log('hello')

//1 LOAD
window.onload = function(evt){
    console.log(`event ${evt.type} fired! Ready to go!`)
const heading = document.querySelector('h1')
heading.textContent = 'READY TO GO!'

//2 COPY
window.addEventListener('copy', ()=>{
    navigator.clipboard.readText()
    .then(text =>{
        heading.textContent += text
    })
})
// 3 CLICK
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})
//4 DBLCLICK
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})
// 5 KEYDOWN
window.addEventListener('keydown', evt => {
    if(evt.key == 6) {
       document.body.innerHTML = '<h1>YOU HIT  A 6'
    }
})
// 6 MOUSEMOVE
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
    //console.log(`mouse is at ${clientX},${clientY}`)
})
//7 MOUSEENTER
//8 MOUSELEAVE
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}





}