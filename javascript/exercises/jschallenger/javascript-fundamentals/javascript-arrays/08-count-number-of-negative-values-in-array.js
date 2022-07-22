/*
Count number of negative values in array
Write a function that takes an array of numbers as argument
Return the number of negative values in the array
*/

function myFunction(a) {
    return a.filter((value) => value < 0).length
}