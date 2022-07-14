/*
Return the next higher prime number
This challenge is a little bit more complex
Write a function that takes a number (a) as argument
If a is prime, return a
If not, return the next higher prime number
*/

function myFunction(a) {
    let count = 0
    do {
       count = 0
       for (let i = 2; i <= a; i++) {
          if (a % i === 0) count++
       }
       a++
    } while (count > 1)
    return a - 1
}