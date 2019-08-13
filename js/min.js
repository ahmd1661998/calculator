/*=================== All Variable ===================*/
let result = document.querySelector('#result');
let resultAll = document.querySelector('#result_all');
const btnAc = document.querySelector('.btn-ac');
const btnCe = document.querySelector('.btn-ce');
const btnC = document.querySelector('.btn-c');

const btnMod = document.querySelector('.btn-mod');
const btnSqrt = document.querySelector('.btn-sqrt');
const btnPlusMinus = document.querySelector('.btn-plusMinus');
const btnDivide = document.querySelector('.btn-divide');
const btnMultiply = document.querySelector('.btn-multiply');
const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const btnDot = document.querySelector('.btn-dot');

const btnZero = document.querySelector('.btn0');
const btnOne = document.querySelector('.btn1');
const btnTwo = document.querySelector('.btn2');
const btnThree = document.querySelector('.btn3');
const btnFour = document.querySelector('.btn4');
const btnFive = document.querySelector('.btn5');
const btnSex = document.querySelector('.btn6');
const btnSeven = document.querySelector('.btn7');
const btnEight = document.querySelector('.btn8');
const btnNine = document.querySelector('.btn9');



/*=================== All Functions ===================*/

// function clearAll

//dispaly Vlaue


// Clear allScreen
btnC.addEventListener('click', () => {
    result.innerHTML = " ";
    resultAll.innerHTML = " "; 
});

// clear one result
btnCe.addEventListener('click', () => {
    resultAll.innerHTML = " ";
});

//backspace
btnAc.addEventListener('click', () => {
    let length = resultAll.length;
    if (1 < length) {
        resultAll = resultAll.slice(0, length - 1);
    } else {
        resultAll = "0";
    }
});

btnPlusMinus.addEventListener('click', () => {
    let result = resultAll.innerHTML;
    result.toggle('-');
});