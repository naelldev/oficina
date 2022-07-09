/*
Check the checkbox
Your first JavaScript DOM exercise. Let's start simple.
Extend the JavaScript code below to interact with the
displayed HTML elements. Once you click the button, the
checkbox should be checked.
Confirm your code by clicking the button!
*/

const button = document.getElementById('button');
button.addEventListener('click', () => {
    // type in your code here
    const checkbox = document.querySelector("#checkbox");
    checkbox.removeAttribute("disabled");
    checkbox.checked = true;
});