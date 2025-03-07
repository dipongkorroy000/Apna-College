let btn1 = document.querySelector('#btn1');
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

//alternative---
btn1.addEventListener('click', (evt) => {
    console.log('button1 was clicked');
    console.log(evt);
    console.log(evt.type);
});
btn1.addEventListener('click', () => {
    console.log('button1 was clicked2');
}); // just check this for duplicate type--

let box = document.querySelector('div');
// box.onmouseover = (evt) => {
//     console.log('you are inside div');
// }

