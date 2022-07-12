let roll = document.getElementById('roll');
let hold = document.getElementById('hold');
let score1 = document.getElementById('score1');

roll.addEventListener('click', () => {
    let dice = Math.floor(Math.random() * (7 - 1)) + 1;
    let result = 0;
    if (dice != 1) {
        result += dice;
        score1.innerText = result
    } else {
        alert('Dommage, tu as fait 1')
    }
    })