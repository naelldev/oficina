/*
Return the longest string from an array of strings
Write a function that takes an array of strings as argument
Return the longest string
*/

function myFunction(arr) {   
    return arr.reduce((cur, next) => cur.length > next.length ? cur : next)
}