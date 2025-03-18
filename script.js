let counter = 0;

const numDisplay = document.querySelector('.integer');  
const decrementBtn = document.querySelector('.dec');  
const incrementBtn = document.querySelector('.inc');  
const resetBtn = document.querySelector('.reset'); 

incrementBtn.addEventListener('click', () => {
    counter++;
    numDisplay.textContent = counter;
});


decrementBtn.addEventListener('click', () => {
    counter--;
    numDisplay.textContent = counter;
});


resetBtn.addEventListener('click', () => {
    counter = 0;
    numDisplay.textContent = counter;
});