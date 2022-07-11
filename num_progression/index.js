const submit = document.getElementById("submit");
const input = document.getElementById("input");
const outputResult = document.getElementById("result");

const calculation = (inputValue, outputMessage) => {


  if (outputMessage) {
    outputResult.innerText = outputMessage; 
  } else {
    let i = 1;
    let result = [];
    outputResult.innerHTML = "";

    do {
      result.push(i);
      i++;
      outputResult.innerHTML += "<span>"+result.join(', ')+"</span>";
    } while (i <= inputValue);
  }
}

submit.addEventListener("click", e => {
  e.preventDefault();
  const inputValue = parseInt(input.value);
  let outputMessage;
  if (isNaN(inputValue)) {
    outputMessage = `${input.value} — не число`
  } else if (inputValue < 1 || inputValue > 20) {
    outputMessage = "Введи число від 1 до 20"
  } else {
    outputMessage = false;
  }
  calculation(inputValue, outputMessage);
});