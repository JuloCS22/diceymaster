let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let roll = document.getElementById('roll');
let hold = document.getElementById('hold');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let dice = document.getElementById('dice');
let current1 = document.getElementById('current1')
let current2 = document.getElementById('current2')
let newGame = document.getAnimations('newgame')
let total = 0;
let holdScore = 0;


// Fonction : Nom des joueurs 

function namePlayers() {
    let p1 = prompt('Quel est ton nom jeune Dicey Master ?');
    let p2 = prompt('Et qui t\'affronte aujourd\'hui ?');
}

// Fonction : Lancer de dé

function diceRoll() {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    return randomNumber;
}

// Fonction : Affichage du résultat du lancer de dé

function diceResult(number) {
    dice.innerText = number
}

// 

document.addEventListener('DOMContentLoaded', function() {
    let p1 = prompt('Quel est ton nom jeune Dicey Master ?');
    let p2 = prompt('Et qui t\'affronte aujourd\'hui ?');
    player1.innerText = p1;
    player2.innerText = p2;
    console.log(p1, p2)
  })

// Lancer de Dé au click

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

// Enregistrement du score en cours

hold.onclick = function() {
    let previousScore = score1.innerText;
    score1.innerText = Number(total) + Number(previousScore);
    total = 0;
    current1.innerText = 0;
}


