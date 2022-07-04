const fieldName = document.getElementById("user-name");
const fieldSurname = document.getElementById("user-surname");
const fieldEmail = document.getElementById("user-email");
const fieldBday = document.getElementById("user-bday");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

let inputName;
let inputSurname;
let inputEmail;
let inputAge;

const removeWhiteSpaceBrackets = fieldValue => {
  let updatedFieldValue = fieldValue.replace(/\s\s+/g, " ");
  updatedFieldValue = updatedFieldValue.replace(/^\s+|\s+$/g, "");
  return updatedFieldValue;
};

const removeAllWhiteSpaces = fieldValue => {
  let updatedFieldValue = fieldValue.replace(/\s+/g, "");
  return updatedFieldValue;
};

fieldName.addEventListener("change", field => {
  let name = field.target.value;
  name = removeWhiteSpaceBrackets(name);
  field.target.value = name;
  inputName = name;
});

fieldSurname.addEventListener("change", field => {
  let surname = field.target.value;
  surname = removeWhiteSpaceBrackets(surname);
  field.target.value = surname;
  inputSurname = surname;
});

fieldEmail.addEventListener("change", field => {
  const inputValue = field.target.value;
  let email;
  email = removeAllWhiteSpaces(inputValue);
  email = email.toLowerCase();
  let outputMessage;
  let emailLength = email.length  - 1;
  const checkEmailSymbol = email.indexOf("@");
  
  switch (checkEmailSymbol) {
    case -1:
      outputMessage = `not valid email <b>${email}</b> (symbol @ not exist)`;
      break;
    case 0:
      outputMessage = `not valid email <b>${email}</b> (symbol @ find in first place)`;
      break;
    case emailLength:
      outputMessage = `not valid email <b>${email}</b> (symbol @ find in last place)`;
      break;
    default:
      outputMessage = email;
  }
  
  field.target.value = email;
  inputEmail = outputMessage;
});

fieldBday.addEventListener("change", field => {
  let bDay = field.target.value;
  bDay = removeAllWhiteSpaces(bDay);
  const currYear = new Date().getFullYear();
  const age = currYear - bDay;
  field.target.value = bDay;
  inputAge = age;
});

submit.addEventListener("click", e => {
  e.preventDefault();

  const outputName = inputSurname && inputName ? "Ім'я: " + inputSurname + " " + inputName : "Введіть ім'я та фамілію";
  const outputEmail = inputEmail ? "Email: " + inputEmail : "Введіть email";
  const outputAge = inputAge ? "Вік: " + inputAge : "Введіть дату народження";
  
  result.innerHTML = 
    `
      <div class='result__row'>${outputName}</div>
      <div class='result__row'>${outputEmail}</div>
      <div class='result__row'>${outputAge}</div>
    `
});