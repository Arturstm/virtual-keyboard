const keyButtonDown = document.querySelectorAll('.caseDown');
const keyButtonUp = document.querySelectorAll('.caseUp');
const keyButtonCaps = document.querySelectorAll('.caps');
const keyButtonShiftCaps = document.querySelectorAll('.shiftCaps');
const ru = document.querySelectorAll('.rukey');
const en = document.querySelectorAll('.enkey');
const CapsL = document.querySelector('.CapsLock');
const ShiftL = document.querySelector('.ShiftLeft');

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

CapsL.addEventListener('click', function(event) {
    if (event.target.classList.contains("CapsLock")) {
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

ShiftL.addEventListener('click', function(event) {
    if (event.target.classList.contains("ShiftLeft")) {
        keyButtonDown.forEach(span => {
            span.classList.toggle('hidden')
        })
        keyButtonShiftCaps.forEach(span => {
            span.classList.add('hidden')
        })
        keyButtonUp.forEach(span => {
            span.classList.toggle('hidden')
        })
        keyButtonCaps.forEach(span => {
            span.classList.add('hidden')
        })
    }
  });

export default event;