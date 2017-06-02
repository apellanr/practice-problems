/*
Given the following function call:
    - character_convert('the cat in the hat');

And the resulting output:
    - "11610410132999711632105110321161041013210497116";

Create a function definition that achieves the output with the given input.
*/

var charStr = '';

function charConvert(str) {
    for(var i = 0; i < str.length; i++) {
        charStr += str.charCodeAt(i);
    }
    return charStr;
}

console.log(charConvert('the cat in the hat'));
// output: "11610410132999711632105110321161041013210497116"
