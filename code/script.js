let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let roll = document.getElementById('roll');
let hold = document.getElementById('hold');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let dice = document.getElementById('dice');
let actualPlayer = document.getElementById('actualplayer')
let current1 = document.getElementById('current1')
let current2 = document.getElementById('current2')
let newGame = document.getElementById('newgame')
let total = 0;
let holdScore = 0;
let imgDice = ['<i class="fa fa-solid fa-dice-one"></i>', 
'<i class="fa fa-solid fa-dice-two"></i>', 
'<i class="fa fa-solid fa-dice-three"></i>',
'<i class="fa fa-solid fa-dice-four"></i>', 
'<i class="fa fa-solid fa-dice-five"></i>',
'<i class="fa fa-solid fa-dice-six"></i>']

console.log(imgDice[2])

// Fonction : Nom des joueurs 

function namePlayers() {
    let p1 = prompt('Quel est ton nom jeune Dicey Master ?');
    let p2 = prompt('Et qui t\'affronte aujourd\'hui ?');
    player1.innerText = p1;
    player2.innerText = p2;
}


// Fonction : Lancer de dé

function diceRoll() {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    return randomNumber;
}

// Fonction : Affichage du résultat du lancer de dé

function diceResult(number) {
    dice.innerHTML = imgDice[number-1]
}

// Function : changement de joueur


// Function : reset

function reset() {
    current1.innerText = 0;
    current2.innerText = 0;
    total = 0;
}

// Reload de la page

// document.addEventListener('DOMContentLoaded', namePlayers())

// Lancer de Dé au click

roll.onclick = function() {
    let result = diceRoll();
    if (result != 1) {
        diceResult(result);
        total = total + result;
        current1.innerText = total;
    } else {
        alert('Dommage, tu as fait 1, changement de joueur !');
        reset()
    }
}

// Enregistrement du score en cours

hold.onclick = function() {
    let previousScore = score1.innerText;
    score1.innerText = Number(total) + Number(previousScore);
    reset()
}

// New Game

newGame.onclick = function() {
    document.addEventListener('DOMContentLoaded', namePlayers())
}
