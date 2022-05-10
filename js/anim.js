const button = document.querySelectorAll('.keyboardkey');
const buttonmore = document.querySelectorAll('.keyboardkeymore');
const back = document.querySelector('.Backquote');
const Dig1 = document.querySelector('.Digit1');
const Dig2 = document.querySelector('.Digit2');
const Dig3 = document.querySelector('.Digit3');
const Dig4 = document.querySelector('.Digit4');
const Dig5 = document.querySelector('.Digit5');
const Dig6 = document.querySelector('.Digit6');
const Dig7 = document.querySelector('.Digit7');
const Dig8 = document.querySelector('.Digit8');
const Dig9 = document.querySelector('.Digit9');
const Dig0 = document.querySelector('.Digit0');
const Digmin = document.querySelector('.Digitminus');
const Digplus = document.querySelector('.Digitplus');
const backspa = document.querySelector('.Backspace');
const Ta = document.querySelector('.Tab');
const Q = document.querySelector('.KeyQ');
const W = document.querySelector('.KeyW');
const E = document.querySelector('.KeyE');
const R = document.querySelector('.KeyR');
const T = document.querySelector('.KeyT');
const Y = document.querySelector('.KeyY');
const U = document.querySelector('.KeyU');
const I = document.querySelector('.KeyI');
const O = document.querySelector('.KeyO');
const P = document.querySelector('.KeyP');
const BracketL = document.querySelector('.BracketLeft');
const BracketR = document.querySelector('.BracketRight');
const Backsl = document.querySelector('.Backslash');
const Del = document.querySelector('.Delete');
const CapsL = document.querySelector('.CapsLock');
const A = document.querySelector('.KeyA');
const S = document.querySelector('.KeyS');
const D = document.querySelector('.KeyD');
const F = document.querySelector('.KeyF');
const G = document.querySelector('.KeyG');
const H = document.querySelector('.KeyH');
const J = document.querySelector('.KeyJ');
const K = document.querySelector('.KeyK');
const L = document.querySelector('.KeyL');
const Semi = document.querySelector('.Semicolon');
const Quot = document.querySelector('.Quote');
const Ent = document.querySelector('.Enter');

const ShiftL = document.querySelector('.ShiftLeft');
const Z = document.querySelector('.KeyZ');
const X = document.querySelector('.KeyX');
const C = document.querySelector('.KeyC');
const V = document.querySelector('.KeyV');
const B = document.querySelector('.KeyB');
const N = document.querySelector('.KeyN');
const M = document.querySelector('.KeyM');
const Com = document.querySelector('.Comma');
const Perid = document.querySelector('.Period');
const Sla = document.querySelector('.Slash');
const ArrUp = document.querySelector('.ArrowUp');
const ShiftR = document.querySelector('.ShiftRight');
const CtrlL = document.querySelector('.CtrlLeft');
const Wi = document.querySelector('.Win');
const AltL = document.querySelector('.AltLeft');
const Sp = document.querySelector('.Space');
const AltR = document.querySelector('.AltRight');
const ArrL = document.querySelector('.ArrowLeft');
const ArrDw = document.querySelector('.ArrowDown');
const ArrR = document.querySelector('.ArrowRight');
const CtrlR = document.querySelector('.CtrlRight');


function animation() {
    button.forEach(span => {
        span.classList.add('active');
    })
    buttonmore.forEach(span => {
        span.classList.add('active');
    })
}
setInterval(unAnimation, 700)
function unAnimation() {
    button.forEach(span => {
        span.classList.remove('active');
    })
    buttonmore.forEach(span => {
        span.classList.remove('active');
    })
}

back.addEventListener('click', function(e){
    if (e.target.classList.contains("Backquote")) {
        back.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Backquote') {
        back.classList.add('active');
    }
});
Dig1.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit1")) {
        Dig1.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit1') {
        Dig1.classList.add('active');
    }
});
Dig2.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit2")) {
        Dig2.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit2') {
        Dig2.classList.add('active');
    }
});
Dig3.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit3")) {
        Dig3.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit3') {
        Dig3.classList.add('active');
    }
});
Dig4.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit4")) {
        Dig4.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit4') {
        Dig4.classList.add('active');
    }
});
Dig5.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit5")) {
        Dig5.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit5') {
        Dig5.classList.add('active');
    }
});
Dig6.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit6")) {
        Dig6.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit6') {
        Dig6.classList.add('active');
    }
});
Dig7.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit7")) {
        Dig7.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit7') {
        Dig7.classList.add('active');
    }
});
Dig8.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit8")) {
        Dig8.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit8') {
        Dig8.classList.add('active');
    }
});
Dig9.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit9")) {
        Dig9.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit9') {
        Dig9.classList.add('active');
    }
});
Dig0.addEventListener('click', function(e){
    if (e.target.classList.contains("Digit0")) {
        Dig0.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Digit0') {
        Dig0.classList.add('active');
    }
});
Digmin.addEventListener('click', function(e){
    if (e.target.classList.contains("Digitminus")) {
        Digmin.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Minus') {
        Digmin.classList.add('active');
    }
});
Digplus.addEventListener('click', function(e){
    if (e.target.classList.contains("Digitplus")) {
        Digplus.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Equal') {
        Digplus.classList.add('active');
    }
});
backspa.addEventListener('click', function(e){
    if (e.target.classList.contains("Backspace")) {
        backspa.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Backspace') {
        backspa.classList.add('active');
    }
});
Ta.addEventListener('click', function(e){
    if (e.target.classList.contains("Tab")) {
        Ta.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Tab') {
        Ta.classList.add('active');
    }
});
Q.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyQ")) {
        Q.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyQ') {
        Q.classList.add('active');
    }
});
W.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyW")) {
        W.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyW') {
        W.classList.add('active');
    }
});
E.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyE")) {
        E.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyE') {
        E.classList.add('active');
    }
});
R.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyR")) {
        R.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyR') {
        R.classList.add('active');
    }
});
T.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyT")) {
        T.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyT') {
        T.classList.add('active');
    }
});
Y.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyY")) {
        Y.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyY') {
        Y.classList.add('active');
    }
});
U.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyU")) {
        U.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyU') {
        U.classList.add('active');
    }
});
I.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyI")) {
        I.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyI') {
        I.classList.add('active');
    }
});
O.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyO")) {
        O.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyO') {
        O.classList.add('active');
    }
});
P.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyP")) {
        P.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyP') {
        P.classList.add('active');
    }
});
BracketL.addEventListener('click', function(e){
    if (e.target.classList.contains("BracketLeft")) {
        BracketL.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'BracketLeft') {
        BracketL.classList.add('active');
    }
});
BracketR.addEventListener('click', function(e){
    if (e.target.classList.contains("BracketRight")) {
        BracketR.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'BracketRight') {
        BracketR.classList.add('active');
    }
});
Backsl.addEventListener('click', function(e){
    if (e.target.classList.contains("Backslash")) {
        Backsl.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Backslash') {
        Backsl.classList.add('active');
    }
});
Del.addEventListener('click', function(e){
    if (e.target.classList.contains("Delete")) {
        Del.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Delete') {
        Del.classList.add('active');
    }
});
CapsL.addEventListener('click', function(e){
    if (e.target.classList.contains("CapsLock")) {
        CapsL.classList.toggle('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'CapsLock') {
        CapsL.classList.toggle('active');
    }
});
A.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyA")) {
        A.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyA') {
        A.classList.add('active');
    }
});
S.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyS")) {
        S.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyS') {
        S.classList.add('active');
    }
});
D.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyD")) {
        D.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyD') {
        D.classList.add('active');
    }
});
F.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyF")) {
        F.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyF') {
        F.classList.add('active');
    }
});
G.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyG")) {
        G.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyG') {
        G.classList.add('active');
    }
});
H.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyH")) {
        H.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyH') {
        H.classList.add('active');
    }
});
J.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyJ")) {
        J.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyJ') {
        J.classList.add('active');
    }
});
K.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyK")) {
        K.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyK') {
        K.classList.add('active');
    }
});
L.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyL")) {
        L.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyL') {
        L.classList.add('active');
    }
});
Semi.addEventListener('click', function(e){
    if (e.target.classList.contains("Semicolon")) {
        Semi.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Semicolon') {
        Semi.classList.add('active');
    }
});
Quot.addEventListener('click', function(e){
    if (e.target.classList.contains("Quote")) {
        Quot.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Quote') {
        Quot.classList.add('active');
    }
});
Ent.addEventListener('click', function(e){
    if (e.target.classList.contains("Enter")) {
        Ent.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Enter') {
        Ent.classList.add('active');
    }
});
ShiftL.addEventListener('click', function(e){
    if (e.target.classList.contains("ShiftLeft")) {
        ShiftL.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'ShiftLeft') {
        ShiftL.classList.add('active');
    }
});
Z.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyZ")) {
        Z.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyZ') {
        Z.classList.add('active');
    }
});
X.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyX")) {
        X.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyX') {
        X.classList.add('active');
    }
});
C.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyC")) {
        C.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyC') {
        C.classList.add('active');
    }
});
V.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyV")) {
        V.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyV') {
        V.classList.add('active');
    }
});
B.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyB")) {
        B.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyB') {
        B.classList.add('active');
    }
});
N.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyN")) {
        N.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyN') {
        N.classList.add('active');
    }
});
M.addEventListener('click', function(e){
    if (e.target.classList.contains("KeyM")) {
        M.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'KeyM') {
        M.classList.add('active');
    }
});
Com.addEventListener('click', function(e){
    if (e.target.classList.contains("Comma")) {
        Com.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Comma') {
        Com.classList.add('active');
    }
});
Perid.addEventListener('click', function(e){
    if (e.target.classList.contains("Period")) {
        Perid.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Period') {
        Perid.classList.add('active');
    }
});
Sla.addEventListener('click', function(e){
    if (e.target.classList.contains("Slash")) {
        Sla.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Slash') {
        Sla.classList.add('active');
    }
});
ArrUp.addEventListener('click', function(e){
    if (e.target.classList.contains("ArrowUp")) {
        ArrUp.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'ArrowUp') {
        ArrUp.classList.add('active');
    }
});
ShiftR.addEventListener('click', function(e){
    if (e.target.classList.contains("ShiftRight")) {
        ShiftR.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'ShiftRight') {
        ShiftR.classList.add('active');
    }
});
CtrlL.addEventListener('click', function(e){
    if (e.target.classList.contains("CtrlLeft")) {
        CtrlL.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'ControlLeft') {
        CtrlL.classList.add('active');
    }
});
Wi.addEventListener('click', function(e){
    if (e.target.classList.contains("Win")) {
        Wi.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'MetaLeft') {
        Wi.classList.add('active');
    }
});
AltL.addEventListener('click', function(e){
    if (e.target.classList.contains("AltLeft")) {
        AltL.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'AltLeft') {
        AltL.classList.add('active');
    }
});
Sp.addEventListener('click', function(e){
    if (e.target.classList.contains("Space")) {
        Sp.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'Space') {
        Sp.classList.add('active');
    }
});
AltR.addEventListener('click', function(e){
    if (e.target.classList.contains("AltRight")) {
        AltR.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'AltRight') {
        AltR.classList.add('active');
    }
});
ArrL.addEventListener('click', function(e){
    if (e.target.classList.contains("ArrowLeft")) {
        ArrL.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'ArrowLeft') {
        ArrL.classList.add('active');
    }
});
ArrDw.addEventListener('click', function(e){
    if (e.target.classList.contains("ArrowDown")) {
        ArrDw.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'ArrowDown') {
        ArrDw.classList.add('active');
    }
});
ArrR.addEventListener('click', function(e){
    if (e.target.classList.contains("ArrowRight")) {
        ArrR.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'ArrowRight') {
        ArrR.classList.add('active');
    }
});
CtrlR.addEventListener('click', function(e){
    if (e.target.classList.contains("CtrlRight")) {
        CtrlR.classList.add('active');
    }
});
document.addEventListener('keydown', function(e) { 
    if (e.code == 'ControlRight') {
        CtrlR.classList.add('active');
    }
});



export default [animation, unAnimation];
