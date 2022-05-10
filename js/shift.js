const keyButtonDown = document.querySelectorAll('.caseDown');
const keyButtonUp = document.querySelectorAll('.caseUp');
const keyButtonCaps = document.querySelectorAll('.caps');
const keyButtonShiftCaps = document.querySelectorAll('.shiftCaps');
const ru = document.querySelectorAll('.rukey');
const en = document.querySelectorAll('.enkey');

function pressShiftUp(event) {
    if (event.code == 'ShiftLeft') {
    keyButtonDown.forEach(span => {
        span.classList.remove('hidden')
    })
    keyButtonShiftCaps.forEach(span => {
        span.classList.add('hidden')
    })
    keyButtonUp.forEach(span => {
        span.classList.add('hidden')
    })
    keyButtonCaps.forEach(span => {
        span.classList.add('hidden')
    })
}
}
function pressShiftDown(event) {
    if (event.code == 'ShiftLeft') {
    keyButtonDown.forEach(span => {
        span.classList.add('hidden')
    })
    keyButtonShiftCaps.forEach(span => {
        span.classList.add('hidden')
    })
    keyButtonUp.forEach(span => {
        span.classList.remove('hidden')
    })
    keyButtonCaps.forEach(span => {
        span.classList.add('hidden')
    })
}
}

document.addEventListener('keydown', pressShiftDown);
document.addEventListener('keyup', pressShiftUp)

export default [pressShiftDown, pressShiftUp];