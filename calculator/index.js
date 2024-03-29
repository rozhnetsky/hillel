const calc = document.getElementById("calc");
const result = document.getElementById("result");
const reset = document.getElementById("reset");

const inputButton = document.querySelectorAll(".calculator__button--num");
const doButton = document.querySelectorAll(".calculator__button--control");

let firstValue;
let secondValue;
let dot;
let action;
let startNewStep;
let secondStep;

const setDefaultValues = () => {
    firstValue = undefined;
    secondValue = undefined;
    dot = false;
    action = false;
    startNewStep = false;
    secondStep = false;
}

const buttonInput = () => {
    inputButton.forEach(e => {
        e.addEventListener("click",() => {
            let buttonValue = e.getAttribute("value");

            updateInput(buttonValue);

            result.innerText += buttonValue;
            if (secondStep)
                secondValue = parseFloat(result.innerText);
            else
                firstValue = parseFloat(result.innerText);
        })
    });
}

const updateInput = buttonValue => {
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
}

const buttonDo = () => {
    doButton.forEach(e => {
        e.addEventListener("click",() => {
            checkInputValues();
            action = e.getAttribute("action");
        })
    });
}

const checkInputValues  = () => {
    if (!secondStep) {
        startNewStep = true;
        secondStep = true;
        dot = false;
        return;
    }
    console.log(firstValue, secondValue, action);
    if (firstValue === undefined || secondValue === undefined || !action)
        return
    calcResultInit();
}

const calcResultInit = () => {
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
  console.log(calcResult);
  firstValue = calcResult;
  secondValue = undefined;
  secondStep = true;
  startNewStep = true;
  dot = false;
}

const calcInit = () => {
    calc.addEventListener("click",() => {
        checkInputValues();
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