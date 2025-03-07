
let boxes = document.querySelectorAll('.box');
let turn0 = true;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log('box was clicked');
        if (turn0) {
            box.innerText = 'O'
            turn0 = false;
        }
        else {
            box.innerText = 'X';
            turn0 = true;
        }
        box.disabled = true;
        checkWinner()
    })
})


const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
const checkWinner = () => {
    for (let pattern of winPatterns){
        // console.log(pattern);
        // break;
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log('winner', pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

let msgContainer = document.querySelector('.msg-container');
let msg = document.getElementById('msg');        
function showWinner(winner) {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}

function disableBoxes() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

let resetBtn = document.getElementById('reset-btn');
let newBtn = document.getElementById('new-btn');
newBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);

function resetGame() {
    turn0 = true;
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
    msgContainer.classList.add('hide');
}


