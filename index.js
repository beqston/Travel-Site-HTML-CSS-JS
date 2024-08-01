const burgDivs = document.querySelector('header .burg-items')
const burgMenu = document.querySelector('.burg-menu')
const burgMenuImg = document.querySelector('.burg-menu img')

burgDivs.addEventListener('click', ()=> {
    burgMenu.style.display = 'flex'
    burgDivs.style.display = 'none'

})

burgMenuImg.addEventListener('click', ()=> {
    burgMenu.style.display = 'none'
    burgDivs.style.display = 'flex'
})