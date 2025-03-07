//basic-document object Model---

// alert('hello');

// console.log(window);
// console.log('hello');
// window.console.log('hello2');

// console.dir(window);
// console.dir(window.document);
//or--
// console.dir(document); // because window is global ---
// console.dir(document.body);
// console.log(document.body); // just print html file ---

// console.dir(document.body.childNodes[1]);

//dynamically change web theme---for this use---such as--
// console.dir(document.body.style.backgroundColor = 'black');
//heading change---
// console.dir(document.body.childNodes[3].innerText = 'abcd');

// DOM manipulation---
//access elements specific--

//not-finding ---
// console.dir(document.getElementById('heading'));
// access h1 tag--id--
// console.dir(document.getElementById('heading-id'));
// access h4 tag--class--
// console.dir(document.getElementsByClassName('heading-class'));
// access all tags---
// console.dir(document.body.getElementsByTagName('p'));

//Query Selector---
// access any element--

// console.dir(document.querySelector('p')); //1st element--
// console.dir(document.querySelectorAll('p')); //all element--
// console.dir(document.querySelector('.heading-class'));
// console.dir(document.querySelector('#heading-id'));

//properties-who can access and change/update- property---

// console.dir(document.querySelector('div'));
// console.dir(document.querySelector('div').children);
