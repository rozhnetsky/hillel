let arr = [23,56,4,78,5,63,45,210,56];

const deleteElement = (array, element) => {
    array = array.filter(num => num !== element);
    return array;
}

arr = deleteElement(arr, 56)

const deleteResult = deleteElement(arr, 56);
const outputResult = deleteResult.join(" , ");


document.write( "[ "+outputResult+" ]" );

console.log( deleteResult );