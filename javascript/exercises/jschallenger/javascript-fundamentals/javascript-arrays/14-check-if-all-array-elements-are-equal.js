/*
Check if all array elements are equal
Write a function that takes an array as argument
It should return true if all elements in the array are equal
It should return false otherwise
*/

function myFunction(arr) {  
    return arr.every(cur => cur === arr[0])
}

// or

function myFunction( arr ) {
    return new Set(arr).size === 1
}