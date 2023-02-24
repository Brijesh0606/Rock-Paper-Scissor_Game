 //1,2,3 random number
//1=rock
//2=paper
//3=scissor
let player;
function select(id) {
    let x = Math.ceil(Math.random() * 3);
    player = id;

    const result = document.getElementById('result');
    const resultcomp = document.getElementById('resultcomp');
    const resultyou = document.getElementById('resultyou');

    if (player == x)
    {
        result.innerHTML="Game is Draw!!";
        result.style.backgroundColor = 'Grey';
        resultcomp.textContent = "Play Again!!!!"
        resultyou.textContent = "To Play Click on Image!"
    }
    if (player == 1) {
        if (x == 2) {
            result.innerHTML = "Computer Win the Game";
            result.style.backgroundColor = 'Red';
            resultcomp.textContent = 'Computer : Paper';
            resultyou.textContent = 'You : Rock';
            
        }
        else if (x == 3) {
            result.innerHTML = "You Win the Game";
            result.style.backgroundColor = 'Green';
            resultcomp.textContent = 'Computer : Scissor';
            resultyou.textContent = 'You : Rock';
        }
    }
    else if (player == 2) {
        if (x == 1) {
            result.innerHTML = "You Win the Game";
            result.style.backgroundColor = 'Green';
            resultcomp.textContent = 'Computer : Rock';
            resultyou.textContent = 'You : Paper';
        }
        else if (x == 3) {
            result.innerHTML = "Computer Win the Game";
            result.style.backgroundColor = 'Red';
            resultcomp.textContent = 'Computer : Scissor';
            resultyou.textContent = 'You : Paper';
        }
    }
    else if (player == 3) {
        if (x == 1) {
            result.innerHTML = "Computer Win the Game";
            result.style.backgroundColor = 'Red';
            resultcomp.textContent = 'Computer : Rock';
            resultyou.textContent = 'You : Scissor';
        }
        else if (x == 2) {
            result.innerHTML = "You Win the Game";
            result.style.backgroundColor = 'Green';
            resultcomp.textContent = 'Computer : Paper';
            resultyou.textContent = 'You : Scissor';
        }
    }
    
}
