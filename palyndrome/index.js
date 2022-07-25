const submit = document.getElementById("submit");
const inputWord = document.getElementById("input-word");
const outputResult = document.getElementById("result");

const findPalindrome = input => {
  if (!isNaN(input) ) return false
  for (let i = 0; i < input.length / 2; i++) {
    let comparedIndex = input.length - i - 1;
    if (input[i] !== input[comparedIndex]) return false;
  }
  return true;
};


submit.addEventListener("click", e => {
  e.preventDefault();

  const isPalindrome = findPalindrome(inputWord.value);

  outputResult.innerText = isPalindrome ? `Yep! ${inputWord.value} is palindrome` : `Sorry, ${inputWord.value} is not a palindrome`;
});
