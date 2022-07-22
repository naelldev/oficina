/*
Remove a specific array element
Write a function that takes an array (a) and a value (b) as argument
The function should remove all elements equal to 'b' from the array
Return the filtered array
*/

function myFunction(a, b) {
    return a.filter(element => element !== b);
}