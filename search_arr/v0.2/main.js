var outputArr = [];

function searchArray(arr1, arr2) {
    for(var i = 0; i < arr1.length; i++) {
        outputArr.push(arr1[i] + arr2[i]);
    }
    return outputArr
}

var testArr1 = [3,-5,15,4];
var testArr2 = [3,18,-5,-4];
console.log(searchArray(testArr1, testArr2)); // [6,13,10,0]
