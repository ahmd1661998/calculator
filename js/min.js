/*=================== All Variable ===================*/
let result = document.querySelector('#result');
let resultAll = document.querySelector('#result_all');
const btnAc = document.querySelector('.btn-ac');
const btnCe = document.querySelector('.btn-ce');
const btnC = document.querySelector('.btn-c');

const calcOperator = document.querySelectorAll('.calc-operator');
const btnMod = document.querySelector('.btn-mod');
const btnSqrt = document.querySelector('.btn-sqrt');
const btnPow = document.querySelector('.btn-pow');
const btnPlusMinus = document.querySelector('.btn-plusMinus');
const btnDivide = document.querySelector('.btn-divide');
const btnMultiply = document.querySelector('.btn-multiply');
const btnMinus = document.querySelector('.btn-minus');
const btnPlus = document.querySelector('.btn-plus');
const btnDot = document.querySelector('.btn-dot');
const btnEqual = document.querySelector('.btn-equl');

const btnNumbers = document.querySelectorAll('.btn_Nummber');
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

let value = '0';
let pendingValue;
let evalStringArr = [];
/*=================== All Functions ===================*/

// Clear allScreen
function allClearBtn() {
    value = '0';
    pendingValue = '0';
    evalStringArr = [];
    result.innerText = "0";
    displayValue();
};

btnC.addEventListener('click', allClearBtn, false);

// clear one result
btnCe.addEventListener('click', () => {
    resultAll.innerHTML = "0";
});

//backspace
btnAc.addEventListener('click', () => {
    let length = value.length;
    if (length > 0) {
        value = value.slice(0, length - 1);
    } else {
        value = " ";
    }
    displayValue();
});

//Decimal
btnDot.addEventListener('click', () => {
    if(!value.includes('.') && value.length < 9) {
        value += '.';
        displayValue();
    }
});

//PlusMinus
btnPlusMinus.addEventListener('click', () => {
    if(!value.includes('-')) {
        value = '-' + value;
    }
    else {
        value = value.slice(1);
    }
    displayValue();
});


//dispaly Vlaue
function displayValue() {
    resultAll.innerText = value;
};

// display result


//check Value
function checkValue(num) {
    let btnText = num.target.innerText;

    if(value === '0') {
        value = '';
    }

    if (value.length < 10) {
        value += btnText;
        displayValue();
    }
};

//sqrt
btnSqrt.addEventListener('click', () => {
    pendingValue = value;
    value = ' ';
    resultAll.innerText = value;
    evalStringArr.push(Math.sqrt(pendingValue));
    result.innerText = evalStringArr.join(' ');
});


//add event for number
for (let i = 0; i < btnNumbers.length; i++) {
    btnNumbers[i].addEventListener('click', checkValue, false);
};

//calculation eval
function calcEval(num) {
    let opretor = num.target.innerText;
    switch(opretor) {
        case '+':
        case '-':
            pendingValue = value;
            value = '0';
            resultAll.innerText = value;
            evalStringArr.push(pendingValue);
            evalStringArr.push(opretor);
            result.innerText = evalStringArr.join(' ');
            break;

        case '×':
            pendingValue = value;
            value = '0';
            resultAll.innerText = value;
            evalStringArr.push(pendingValue);
            evalStringArr.push('*');
            result.innerText = evalStringArr.join(' ');
            break;

        case '÷':
            pendingValue = value;
            value = '0';
            resultAll.innerText = value;
            evalStringArr.push(pendingValue);
            evalStringArr.push('/');
            result.innerText = evalStringArr.join(' ');
            break;

        case '%':
            pendingValue = value;
            value = '0';
            resultAll.innerText = value;
            evalStringArr.push(pendingValue);
            evalStringArr.push(opretor);
            result.innerText = evalStringArr.join(' ');
            break;
        
        case 'x²':
            pendingValue = value;
            value = ' ';
            resultAll.innerText = value;
            evalStringArr.push(Math.pow(pendingValue, 2));
            result.innerText = evalStringArr.join(' ');
            break;

        default:
            break;
    }
}

//add event for opretor
for (let i = 0; i < calcOperator.length; i++) {
    calcOperator[i].addEventListener('click', calcEval, false);
};

//evaluation
function short(evaluation) {
    return evaluation.toString().split('').slice(0, 10).join('');
}

btnEqual.addEventListener('click', () => {
    
    evalStringArr.push(value);
    let evaluation = eval(evalStringArr.join(" "));
    let shorten = short(evaluation);
    result.innerText = evalStringArr.join(' ');
    resultAll.innerText = shorten;
    evalStringArr = [];
    return evaluation;

});