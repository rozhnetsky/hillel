const arr = [4,2,34,4,1,12,1,4];
let newArr = [];

for(let i in arr) {
	const indexPosition = +i+1;
	if ( arr.indexOf(arr[i], indexPosition) >= 0 && newArr.indexOf(arr[i]) < 0) {
		newArr.push(arr[i])
	}
}

document.write(newArr);