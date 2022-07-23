const flattenArr = (array) => {
    let resultArray = [];
    array.forEach((childArray, index) => resultArray = resultArray.concat(array[index]));
    return resultArray;
}

const flattenResult = flattenArr( [[1, 2, 3], [4, 5, 6], [7, 8, 9]] );
const outputResult = flattenResult.join(" , ");

document.write( "[ "+outputResult+" ]" );

console.log( flattenResult );