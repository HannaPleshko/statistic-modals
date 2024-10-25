const buttons = document.querySelectorAll('.menu .menu-buttons .button')

buttons.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.style = 'background-color: #665F55; color: #E1D4C9;'
        el.childNodes[1].style = 'background-color: #E1D4C9'
    })
})

buttons.forEach(el => {
    el.addEventListener('mouseout', () => {
        el.style = 'background-color: #E1D4C9; color: #403F3D;'
        el.childNodes[1].style = 'background-color: #C1B6AD;'
    })
})
