const textarea = document.querySelector("textarea");
const ShiftL = document.querySelector('.ShiftLeft');
const CapsL = document.querySelector('.CapsLock');
const backspa = document.querySelector('.Backspace');
let shiftOn = false
let capsOn = false
let currentLanguage = false

const handleClick = event => {
let value = event.target
if (value.classList.contains('keyboardkey') && currentLanguage === false && shiftOn === true) {
        value = value.children[1].children[1].textContent
} else if (value.classList.contains('keyboardkey') && currentLanguage === true && shiftOn === true) {
        value = value.children[0].children[1].textContent
} else if (value.classList.contains('keyboardkey') && currentLanguage === false && capsOn === true) {
        value = value.children[1].children[2].textContent
} else if (value.classList.contains('keyboardkey') && currentLanguage === false) {
        value = value.children[1].children[0].textContent
} else if (value.classList.contains('keyboardkey') && currentLanguage === true && capsOn === true) {
        value = value.children[0].children[2].textContent
} else if (value.classList.contains('keyboardkey') && currentLanguage === true && capsOn === false) {
        value = value.children[0].children[0].textContent
} else {
        value = value.textContent
}
textarea.value += `${value}`
}

document.querySelectorAll(".keyboardkey").forEach(item => 
        item.addEventListener("click", handleClick))

function Delete() {
        textarea.value = textarea.value.substring(0, textarea.value.length - 1)
}
backspa.addEventListener('click', Delete);


document.addEventListener('keydown', function(event) {
if (event.shiftKey && event.altKey && currentLanguage === false) {
        currentLanguage = true;
}
else if (event.shiftKey && event.altKey && currentLanguage === true) {
        currentLanguage = false;
}
});

document.addEventListener('keydown', function(event) {
        if (event.code === 'CapsLock' && capsOn === false) {
                capsOn = true;
}
else if (event.code === "CapsLock" && capsOn === true) {
        capsOn = false;
}
});
CapsL.addEventListener('click', function(e) {
        if (e.target.classList.contains("CapsLock") && capsOn === false) {
                capsOn = true;
}
else if (e.target.classList.contains("CapsLock") && capsOn === true) {
        capsOn = false;
}
});
document.addEventListener('keydown', function(event) {
        if (event.code == 'ShiftLeft') {
                shiftOn = true;
}
});
document.addEventListener('keyup', function(event) {
        if (event.code == 'ShiftLeft') {
                shiftOn = false;
}
});
ShiftL.addEventListener('click', function(e) {
        if (e.target.classList.contains("ShiftLeft") && shiftOn === false) {
                shiftOn = true;
} else if (e.target.classList.contains("ShiftLeft") && shiftOn === true) {
        shiftOn = false;
}
});

export default activate;