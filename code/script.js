let roll = document.getElementById('roll');
let hold = document.getElementById('hold');
let score1 = document.getElementById('score1');
let dice = document.getElementById('dice');
let current1 = document.getElementById('current1')
let current2 = document.getElementById('current2')
let total = 0;
let holdScore = 0;

// Lancer de dé

function diceRoll() {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    return randomNumber;
}

// Affichage du résultat du lancer de dé

function diceResult(number) {
    dice.innerText = number
}

// Fonction Lancer de Dé au click

roll.onclick = function() {
    let result = diceRoll();
    if (result != 1) {
        diceResult(result);
        total = total + result;
        current1.innerText = total;
    } else {
        alert('Dommage, tu as fait 1');
        current1.innerText = 0;
        total = 0;
        diceResult(0)
    }
}

// Fonction Enregistrement du score en cours

hold.onclick = function() {
    let previousScore = score1.innerText;
    score1.innerText = Number(total) + Number(previousScore);
    total = 0;
    current1.innerText = 0;
}
