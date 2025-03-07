//qs1--
let newBtn = document.createElement('button');
newBtn.innerText = 'click me!';

newBtn.style.color = 'white';
newBtn.style.backgroundColor = 'green';
newBtn.style.padding = '10px 20px';
newBtn.style.margin = '10px';
newBtn.style.border = 'none';
newBtn.style.borderRadius = '10px';
newBtn.style.fontSize = '20px';
newBtn.style.fontWeight = 'bold';

document.querySelector('body').prepend(newBtn);

//qs2--
let para = document.querySelector('p');
// para.setAttribute('class'); // don't use this because overwrite--
para.classList.add('newClass');