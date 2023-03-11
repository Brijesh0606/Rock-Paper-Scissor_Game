//1,2,3 random number
//1=rock
//2=paper
//3=scissor
let player;
let youwincount =document.getElementById('youwincount');
let youlostcount =document.getElementById('youlostcount');
let totalmatches = document.getElementById('totalmatches');
let draws = document.getElementById('draw');
let youwin = 0;
let youlost = 0;
let draw = 0;
let totalmatch = 0;
function select(id) {
    let x = Math.ceil(Math.random() * 3);
    player = id;

    const result = document.getElementById('result');
    const resultcomp = document.getElementById('resultcomp');
    const resultyou = document.getElementById('resultyou');

    if (player == x) {
        draw++;
        game_draw();
    }
    if (player == 1) {
        if (x == 2) {
            youlost++;
            computer_win();
            resultcomp.textContent = 'Computer : Paper';
            resultyou.textContent = 'You : Rock';
            
        }
        else if (x == 3) {
            youwin++;
            you_win();
            resultcomp.textContent = 'Computer : Scissor';
            resultyou.textContent = 'You : Rock';
        }
    }
    else if (player == 2) {
        if (x == 1) {
            youwin++;
            you_win();
            resultcomp.textContent = 'Computer : Rock';
            resultyou.textContent = 'You : Paper';
        }
        else if (x == 3) {
            youlost++;
            computer_win();
            resultcomp.textContent = 'Computer : Scissor';
            resultyou.textContent = 'You : Paper';
        }
    }
    else if (player == 3) {
        if (x == 1) {
            youlost++;
            computer_win();
            resultcomp.textContent = 'Computer : Rock';
            resultyou.textContent = 'You : Scissor';
        }
        else if (x == 2) {
            youwin++;
            you_win();
            resultcomp.textContent = 'Computer : Paper';
            resultyou.textContent = 'You : Scissor';
        }
    }
    totalmatches.innerHTML = youwin + youlost + draw;
}

function game_draw() {
    draws.innerHTML = draw;
    result.innerHTML = "Game is Draw!!";
    result.style.backgroundColor = 'Grey';
    resultcomp.textContent = "Play Again!!!!"
    resultyou.textContent = "To Play Click on Image!"
}

function computer_win() {
    youlostcount.innerHTML = youlost; 
    result.innerHTML = "Computer Win the Game";
    result.style.backgroundColor = 'Red';
}

function you_win() {
    youwincount.innerHTML = youwin;
    result.innerHTML = "You Win the Game";
    result.style.backgroundColor = 'Green';
}