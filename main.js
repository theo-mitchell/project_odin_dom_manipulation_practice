// a <p> with red text that says “Hey I’m red!”
// an <h3> with blue text that says “I’m a blue h3!”
// a <div> with a black border and pink background color with the following elements inside of it:
//     another <h1> that says “I’m in a div”
//     a <p> that says “ME TOO!”



const container = document.querySelector('#container');

const redParagraph = document.createElement('p');
redParagraph.textContent = 'Hey I’m red!'
redParagraph.style.color = 'red';
container.appendChild(redParagraph);

const blueText = document.createElement('h3');
blueText.innerText = 'I’m a blue h3!'
blueText.style.color = 'blue';
container.appendChild(blueText);

const borderDiv = document.createElement('div');
borderDiv.style.border = 'solid'
const borderDivH1 = document.createElement('h1');
borderDivH1.innerText = 'I’m in a div';
const borderDivP = document.createElement('p');
borderDivP.innerText = 'ME TOO!';
borderDiv.appendChild(borderDivH1);
borderDiv.appendChild(borderDivP);
container.appendChild(borderDiv);
