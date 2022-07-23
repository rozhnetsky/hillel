const flattenArr = (array) => {
    let resultArray = [];
    let outputResult;
    array.forEach((childArray, index) => {
        resultArray = resultArray.concat(array[index]);
    });
    console.log(resultArray);
    outputResult = resultArray.join(" , ")
    return("[ "+outputResult+" ]");
}

document.write( flattenArr( [[1, 2, 3], [4, 5, 6], [7, 8, 9]] ) );