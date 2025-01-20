document.getElementById('main-header').style.backgroundColor = 'blue';
const newParagraph = document.createElement('p');
const position = document.querySelector('.content')
newParagraph.textContent = 'Hello World';
position.appendChild(newParagraph);
const deleted = document.querySelector('.form')
deleted.remove();
