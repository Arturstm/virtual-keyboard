const quote = document.querySelector('.Backquote');

function animation() {
    quote.classList.add('action');
}

window.addEventListener('load', animation);

export default animation;