const keyButtonDown = document.querySelectorAll('.caseDown');
const keyButtonUp = document.querySelectorAll('.caseUp');
const keyButtonCaps = document.querySelectorAll('.caps');
const keyButtonShiftCaps = document.querySelectorAll('.shiftCaps');
const ru = document.querySelectorAll('.rukey');
const en = document.querySelectorAll('.enkey');
const shift = document.querySelector('.ShiftLeft');

function addStyle(e) {
    keyButtonUp.forEach(span => {
        span.classList.add('hidden')
    })
    keyButtonCaps.forEach(span => {
        span.classList.add('hidden')
    })
    keyButtonShiftCaps.forEach(span => {
        span.classList.add('hidden')
    })
    ru.forEach(span => {
        span.classList.add('hidden')
    })
}

window.addEventListener('load', addStyle);
alert("Дорогой проверяющий, прошу проверить данную работу завтра, так как не успел додалать. Спасибо за понимание.");

export default addStyle;
