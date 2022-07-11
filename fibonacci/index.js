const submit = document.getElementById("submit");
const input = document.getElementById("input");
const outputResult = document.getElementById("result");

const calculation = (inputValue, outputMessage, bodyClass) => {

  let result = [];
  
  let i = 0;
  let summResult = 0;
  let newEncrease = 1;
  let lastEncrease = 0;

  do {
    summResult = summResult + lastEncrease;
    lastEncrease = newEncrease;
    newEncrease = summResult; 
    result.push(summResult);
    i++;
  } while (i < inputValue);

  if (outputMessage) {
    outputResult.innerText = outputMessage; 
  } else {
    outputResult.innerText = result.join(', ');
  }

  document.body.classList = bodyClass;
}

submit.addEventListener("click", e => {
  e.preventDefault();

  const inputValue = parseInt(input.value);
  let outputMessage;
  let bodyClass;

  if (isNaN(inputValue)) {
    outputMessage = `${input.value} — не число, не дури Фібоначчі`;
    bodyClass = "nan";
  } else if (inputValue < 1 || inputValue > 20) {
    outputMessage = "Друже, просили ж як людину, від 1 до 20";
    bodyClass = "large-num";
  } else {
    outputMessage = false;
    bodyClass = "success";
  }

  calculation(inputValue, outputMessage, bodyClass);
});