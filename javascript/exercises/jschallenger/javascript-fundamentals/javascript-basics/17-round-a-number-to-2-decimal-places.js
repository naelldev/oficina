/*
Round a number to 2 decimal places
Write a function that takes a number (a) as argument
Round a to the 2nd digit after the comma
Return the rounded number
*/

function myFunction(a) {
    return Math.round((a + Number.EPSILON) * 100) / 100
}

// or

function myFunction(a) {
    return Number(a.toFixed(2));
}