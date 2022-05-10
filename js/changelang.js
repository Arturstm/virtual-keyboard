const keyButtonDown = document.querySelectorAll('.caseDown');
const keyButtonUp = document.querySelectorAll('.caseUp');
const keyButtonCaps = document.querySelectorAll('.caps');
const keyButtonShiftCaps = document.querySelectorAll('.shiftCaps');
const ru = document.querySelectorAll('.rukey');
const en = document.querySelectorAll('.enkey');


document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.altKey) {
        en.forEach(span => {
            span.classList.toggle('hidden')
        })
        ru.forEach(span => {
            span.classList.toggle('hidden')
        })
    }
  });

export default event;