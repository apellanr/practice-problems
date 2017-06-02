/*
Input: 2 arrays
    - haystack array, which has values to search through
    - needle array, which has values to search for
Output:
    - output array, which has all values in needle that are found in haystack
Example:
    - var haystack = ['cat','dog','bird','turtle','lizard'];
    - var needle = ['dog','lizard','flower','monkey','unicorn']
    - var output = null;

output = search_array(haystack,needle);
console.log(output); //outputs ['dog','lizard'];
*/

var outputArr = [];

function searchArr(haystackArr, needleArr) {
    for(var i = 0 ; i < haystackArr.length; i++) {
        for(j = 0; j < needleArr.length; j++){
            if(needleArr[j] !== haystackArr[i]) continue;
            else outputArr.push(needleArr[j]);
        }
    }
    return outputArr;
}


var haystack = ['cat','dog','bird','turtle','lizard'];
var needle = ['dog','lizard','flower','monkey','unicorn'];
console.log(searchArr(haystack, needle)); //outputs ['dog','lizard'];
