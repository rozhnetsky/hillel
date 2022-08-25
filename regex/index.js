const upperCase = string => {
  const letter = string.match(/^[A-Z]/);
  if (letter === null) {
    console.log(`String's "${string}" first character is NOT uppercase`)
    return;
  }
  console.log(`String's "${string}" first character is uppercase`);
};

const isDateString = string => {
  const checkPattern = string.match(/^([0-2]\d|3[0-1])\/(0[1-9]|1[0-2]])\/([1-2]\d\d\d)$/);
  return checkPattern !== null;
}

const trim = string => string.replace(/^\s|\s$/g, "");

const vowelCount = string => string.match(/[aeiouy]/g).length;

const isUSZipCode = string => {
  const checkPattern = string.match(/^\w{5}-\w{4}$/);
  return checkPattern !== null;
}

upperCase('Abcd'); // String's first character is uppercase
upperCase('abcd'); // String's first character is not uppercase

console.log(isDateString("01/01/2015")); // true
console.log(isDateString("32/01/2015")); // false


console.log(trim(' ololo ')); // ololo

console.log(vowelCount('The quick brown fox jumps over the lazy dog')); // 12

console.log(isUSZipCode("03201-2150")); // true
console.log(isUSZipCode("7892")); // false