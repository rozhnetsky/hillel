const calc = document.getElementById("calc");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

const inputButton = document.querySelectorAll(".calculator__button--num");
const doButton = document.querySelectorAll(".calculator__button--control");

let firstValue = false;
let secondValue = false;
let dot = false;
let action = false;
let startNewStep = false;
let secondStep = false;

const setDefaultValues = () => {
    firstValue = false;
    secondValue = false;
    dot = false;
    action = false;
    startNewStep = false;
    secondStep = false;
}

const buttonInput = () => {
    inputButton.forEach(e => {
        e.addEventListener("click",() => {
            let buttonValue = e.getAttribute("value");

            if (startNewStep) {
                result.innerText = "";
                startNewStep = false;
            }

            if (buttonValue === ".") {
                if (dot) return;
                dot = true;
            }
            if (buttonValue === "0" && result.innerText === "0") return;
            if (buttonValue !== "." && result.innerText === "0") result.innerText = "";

            result.innerText += buttonValue;
            if (secondStep)
                secondValue = parseFloat(result.innerText);
            else
                firstValue = parseFloat(result.innerText);
        })
    });
}

const buttonDo = () => {
    doButton.forEach(e => {
        e.addEventListener("click",() => {
            action = e.getAttribute("action");
            updateInputValues();
        })
    });
}

const updateInputValues  = () => {
    if (!secondValue) {
        startNewStep = true;
        secondStep = true;
        dot = false;
        return;
    }
    calcResultInit();
}

const calcResultInit = () => {
  if (!firstValue || !secondValue || !action)
    return;
  let x = firstValue;
  let y = secondValue;
  let calcResult;
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
  secondStep = true;
  startNewStep = true;
  dot = false;
  action = false;
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