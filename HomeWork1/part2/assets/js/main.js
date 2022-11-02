const headerBurger = () => {
    let burgerLine = document.querySelector('.burger'),
        offCanvas = document.querySelector('.header__tools'),
        appLayout = document.querySelector('.app')

    burgerLine.addEventListener('click', ()=>{
        if (burgerLine.classList.contains('burger_active')) {
            burgerLine.classList.remove('burger_active');
        }
        else {
            burgerLine.classList.add('burger_active');
        }
        if (offCanvas.classList.contains('header__tools_active')) {
            offCanvas.classList.remove('header__tools_active');
        }
        else {
            offCanvas.classList.add('header__tools_active');
        }
    });
}

headerBurger();