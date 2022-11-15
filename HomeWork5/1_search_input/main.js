const input = document.querySelector('#search-field');
const dropdown = document.querySelector('#search-dropdown');

const eventHandler = () => {
    let timer;

    return (value) => {
        dropdown.classList.remove('search-dropdown_active');

        clearTimeout(timer);

        timer = setTimeout(() => {
            return (() => {
                if (value !== '') {
                    dropdown.classList.add('search-dropdown_active')
                }
            }).apply(eventHandler);
            }, 1000);
    };
}

const keyUpListener = eventHandler();

input.addEventListener('keyup',e => keyUpListener(e.target.value))