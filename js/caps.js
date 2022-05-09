const keyButtonDown = document.querySelectorAll('.caseDown');
const keyButtonUp = document.querySelectorAll('.caseUp');
const keyButtonCaps = document.querySelectorAll('.caps');
const keyButtonShiftCaps = document.querySelectorAll('.shiftCaps');
const ru = document.querySelectorAll('.rukey');
const en = document.querySelectorAll('.enkey');

document.addEventListener('keydown', function(event) {
    if (event.code == "CapsLock") {
        keyButtonDown.forEach(span => {
            span.classList.toggle('hidden')
        })
        keyButtonShiftCaps.forEach(span => {
            span.classList.add('hidden')
        })
        keyButtonUp.forEach(span => {
            span.classList.add('hidden')
        })
        keyButtonCaps.forEach(span => {
            span.classList.toggle('hidden')
        })
    }
  });

export default event;