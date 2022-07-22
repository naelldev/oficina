/*
Sort an array of numbers in descending order
Write a function that takes an array of numbers as argument
It should return an array with the numbers sorted in descending order
*/

function myFunction(arr) {
    return arr.sort().reverse()
}

// or

function myFunction( arr ) {
    return arr.sort((a, b) => b - a)
}