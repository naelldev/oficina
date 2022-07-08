/*
Move element with mouse cursor
This challenge might look more complicated than it actually is.
The function moveRight below moves the rectangular element exactly
1 pixel to the right - unless it reaches the green bar.
What you have to do is to call the function for each movement of
your mouse inside the div element with id wrapper. Confirm that your
code works by moving the cursor inside the wrapper div until you reach
the green bar.
*/

const element = document.querySelector('#element');
const wrapper = document.querySelector('#wrapper');

const moveRight = () => {
  const wrapperWidth = wrapper.getBoundingClientRect().width;
  const elementWidth = element.getBoundingClientRect().width;
  const currentPosition = parseInt(element.style.left || 0, 10);
  if (currentPosition <= wrapperWidth - elementWidth) {
    element.style.left = `${currentPosition + 1}px`;
  }
};

// type in your code here
wrapper.addEventListener("mousemove", moveRight);
