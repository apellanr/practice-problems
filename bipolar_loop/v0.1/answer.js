/*Bipolar Loop

 Create a single loop that simultaneously counts up on one variable, while counting down on another.
 The only code inside the for loop should be a console.log that lists both variables.

 Put your solution in answer.js

 hint: You can have multiple initiators, conditionals, and incrementers/decrementers in the same for loop.

 For example:
 for(<initiator 1>,<initiator 2>; <check 1>,<check2>; <increment 1>,<increment 2>){
 //do work
 }
 */

function bipolarLoop(arr) {
    for(var i = 0, j = arr.length - 1; i < arr.lengthr, j >= 0; i+=1, j-=1) {
        console.log('i value: ',arr[i] + ' and j value: ', arr[j]);
    }
    return arr;
}

var numberArr = [1,2,3,4,5];
bipolarLoop(numberArr);