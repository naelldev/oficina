/*
Drop element into another element
Here we want to drop the red square into the blue square.
But, when you try to drop it there, it jumps back to where
it was before. Make use of the function handleDrop to join
the two elements together.
You pass the challenge if you drop the red square into the
blue one and it stays there.
*/

const dragItem = document.querySelector('#dragItem');
const dropArea = document.querySelector('#dropArea');

// this allows for items to be dropped inside the dropArea
const handleDragOver = (event) => event.preventDefault();
dropArea.addEventListener('dragover', handleDragOver);

const handleDrop = () => {
    dropArea.append(dragItem);
};

// type in your code here
dropArea.addEventListener("drop", handleDrop);
