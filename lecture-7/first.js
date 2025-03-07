//access div-tag-attribute-
// let firstDiv = document.querySelector('div');
// console.log(firstDiv);
// let firstId = firstDiv.getAttribute('id');
// console.log(firstId);
// let fullName = firstDiv.getAttribute('name');
// console.log(fullName);
// //access p-tag-attribute-
// let paragraph = document.querySelector('p');
// let fullPara = paragraph.getAttribute('class');
// console.log(fullPara);

//access & change-tag-attribute--
// let paragraph = document.querySelector('p');
// let updatePara = paragraph.setAttribute('class','newPara');
// console.log(updatePara);

// access & update elements-without css--
// let aDiv = document.querySelector('div');
// aDiv.style.backgroundColor = 'blue';
// aDiv.style.fontSize = '20px';
// aDiv.style.padding = '20px';
// aDiv.style.visibility = '';

//create btn & add--
// let newBtn = document.createElement('button');
// newBtn.innerText = 'Click me!';

// let para = document.querySelector('p');
// aDiv.append(newBtn); // add newBtn --last---
// aDiv.prepend(newBtn); // add newBtm --first--
// aDiv.before(newBtn); // add newBtn --on the div--
// para.after(newBtn); // add newBtn --down div--

//create-heading & add---
// let newHeading = document.createElement('h1');
// newHeading.innerHTML = '<i>Hi, I am new</i>';
// document.querySelector('body').prepend(newHeading);