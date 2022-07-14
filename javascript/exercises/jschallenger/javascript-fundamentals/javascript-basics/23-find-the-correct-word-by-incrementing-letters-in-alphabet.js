/*
Find the correct word by incrementing letters in alphabet
Write a function that takes a string as argument
As it is, the string has no meaning
Increment each letter to the next letter in the alphabet
Return the correct word
*/

function myFunction(str) {
    let correctWord = ''
    for (let i in str) {
       correctWord += String.fromCharCode(str.charCodeAt(i) + 1)
    }
    return correctWord
}

// or

function myFunction(str) {
    const arr = [...str];
    const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
    return correctedArray.join('');
}