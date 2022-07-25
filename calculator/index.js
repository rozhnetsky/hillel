const calc = document.getElementById("calc");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

const inputButton = document.querySelectorAll(".calculator__button--num");
const doButton = document.querySelectorAll(".calculator__button--control");

let firstValue;
let secondValue;
let dot;
let action;
let calcResult;
let secondStep = false;

const setDefaultValues = () => {
    firstValue = false;
    secondValue = false;
    dot = false;
    action = false;
}

const buttonInput = () => {
    inputButton.forEach(e => {
        e.addEventListener("click",() => {
            let buttonValue = e.getAttribute("value");
            if (secondStep) {
                result.innerText = "";
                secondStep = false;
            }
            if (buttonValue === ".") {
                if (dot) return;
                dot = true;
            }
            if (buttonValue === "0" && result.innerText === "0") return;
            if (buttonValue !== "." && result.innerText === "0") result.innerText = "";

            result.innerText += buttonValue;
            calcResult = parseFloat(result.innerText);
        })
    });
}

const buttonDo = () => {
    doButton.forEach(e => {
        e.addEventListener("click",() => {
            const buttonAction = e.getAttribute("action");
            updateInputValues();
            action = buttonAction;
        })
    });
}

const updateInputValues  = () => {
    if (!firstValue) {
        firstValue = calcResult;
        calcResult = 0;
        secondStep = true;
        dot = false;
        return;
    }
    secondValue = calcResult;
    calcResultInit();
    console.log(firstValue, action, secondValue, calcResult);
}

const calcResultInit = () => {
  if (!firstValue && !secondValue && !action) return;
  const x = firstValue;
  const y = secondValue;
  switch(action) {
      case "multiply":
        calcResult = x * y;
        break;
      case "divide":
        calcResult = x / y;
        break;
      case "plus":
        calcResult = x + y;
        break;
      case "minus":
        calcResult = x - y;
        break;
      default:
        console.log("Calc Error");
  }
  result.innerText = parseFloat(calcResult.toFixed(12)).toString();
  firstValue = calcResult;
  secondValue = false;
  dot = false;
  calcResult = 0;
  secondStep = true;
}

const calcInit = () => {
    calc.addEventListener("click",() => {
        updateInputValues();
    })
}

const resetInput = () => {
    reset.addEventListener("click",() => {
        setDefaultValues();
        result.innerText = "0";
    })
}

setDefaultValues();
buttonInput();
buttonDo();
resetInput();
calcInit();