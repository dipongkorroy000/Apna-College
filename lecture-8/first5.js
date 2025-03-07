let modeBtn = document.querySelector('#mode');
let htmlBody = document.querySelector('body');
let currMode = 'light';

modeBtn.addEventListener('click', () => {
    if (currMode === 'light') {
        currMode = 'dark';
        htmlBody.classList.add('dark');
        htmlBody.classList.remove('light');
    }
    else {
        currMode = 'light';
        htmlBody.classList.add('light');
        htmlBody.classList.remove('dark');
    }
    console.log(currMode);
});