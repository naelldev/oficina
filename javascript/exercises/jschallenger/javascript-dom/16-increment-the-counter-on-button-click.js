/*
Increment the counter on button click
Extend the JavaScript code below to interact with the
displayed HTML elements.
On each button click, increase the value of the button
by 1.
Confirm your code by clicking the button!
*/

const button = document.getElementById('button');
button.addEventListener('click', () => {
    // type in your code here
    const buttonContent = Number(button.textContent);
    button.innerText = buttonContent + 1;
});