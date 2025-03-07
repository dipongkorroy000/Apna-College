let btn1 = document.querySelector('#btn1');
btn1.onclick = () => {
    console.log('btn1 was clicked');
    let a = 25;
    a++;
    console.log(a);
};


let box = document.querySelector('div');
box.onmouseover = () => {
    console.log('you are inside div');
}