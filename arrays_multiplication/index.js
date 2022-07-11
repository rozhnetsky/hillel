const arr1 = [3, 45, 23, 78, 34];
const arr2 = [4, 2, 34, 4,12, 1];
let nerArr = [];

const arrMultiplication = (array1, array2) => {
  const longestArray = array1.length > array2.length ? array1.length : array2.length;
  let i = 0;
  do {
    const _array1 = array1[i] || 1;
    const _array2 = array2[i] || 1;
    nerArr.push(_array1 * _array2);
    i++;
  } while (i < longestArray)
}

arrMultiplication(arr1, arr2);

document.write(nerArr.join(', '));