/*
How many times does a character occur?
Write a function that takes two strings (a and b) as arguments
Return the number of times a occurs in b
*/

function myFunction(a, b) {
    let occurs = 0
    for (let i in b) {
       if (a ===  b[i]) {
          occurs += 1
       }
    }
    return occurs
}

// or

function myFunction(a, b) {
    return b.split(a).length - 1
}