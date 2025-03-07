// let heading = document.querySelector('h1');
// console.dir(heading.innerText);

// heading.innerText = heading.innerText + " from apna college students";


let divs = document.querySelectorAll('.box');

//specific div access--
// console.log(divs[1]);

//update div text--
// divs[0].innerText = 'new unique value 1';
// divs[1].innerText = 'new unique value 2';
// divs[2].innerText = 'new unique value 3';
//alternative-formula--
let i = 1;
for (let s of divs) {
    s.innerText = `new unique value ${i}`;
    i++;
}
