const quote = document.getElementById('Backquote')
const dig1 = document.getElementById('Digit1')
const dig2 = document.getElementById('Digit2')
const dig3 = document.getElementById('Digit3')
const dig4 = document.getElementById('Digit4')
const dig5 = document.getElementById('Digit5')
const dig6 = document.getElementById('Digit6')
const dig7 = document.getElementById('Digit7')
const dig8 = document.getElementById('Digit8')
const dig9 = document.getElementById('Digit9')
const dig0 = document.getElementById('Digit0')
const digmin = document.getElementById('Digitminus')
const digpus = document.getElementById('Digitplus')
const back = document.getElementById('Backspace')

function animation() {
    quote.classList.add('action');
}
setInterval(unAnimation, 700)
function unAnimation() {
    quote.classList.remove('action');
}

quote.addEventListener('click', animation, unAnimation);

export default animation;