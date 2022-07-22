/*
Return the average of an array of numbers
Write a function that takes an array of numbers as argument
It should return the average of the numbers
*/

function myFunction(arr) {   
    return arr.reduce((acc, cur) => acc + cur) / arr.length
}