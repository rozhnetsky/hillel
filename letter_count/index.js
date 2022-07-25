const submit = document.getElementById("submit");
const inputWord = document.getElementById("input-word");
const inputLetter = document.getElementById("input-letter");
const outputResult = document.getElementById("result");

inputLetter.addEventListener("change", e => {
  if (e.target.value.length > 1) {
    e.target.value = e.target.value[0];
  }
});

submit.addEventListener("click", e => {
  e.preventDefault();

  const letter = inputLetter.value;
  const word = inputWord.value;

  let i = 0;
  let count = 0;
  do {
    count = letter === word[i] ? count+1 : count;
    i++;
  } while ( i < word.length);

  outputResult.innerText = "The string contains the following number of '"+letter+"' letter: "+count;
});