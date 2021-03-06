let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let roll = document.getElementById('roll');
let hold = document.getElementById('hold');
let score1 = document.getElementById('score1');
let score2 = document.getElementById('score2');
let dice = document.getElementById('dice');
let current1 = document.getElementById('current1');
let current2 = document.getElementById('current2');
let newGame = document.getElementById('newgame');
let score = score1;
let current = current1;
let joueur = 0;
let total = 0;
let holdScore = 0;
let imgDice = ['<i class="dice fa fa-solid fa-dice-one"></i>', 
'<i class="dice fa fa-solid fa-dice-two"></i>', 
'<i class="dice fa fa-solid fa-dice-three"></i>',
'<i class="dice fa fa-solid fa-dice-four"></i>', 
'<i class="dice fa fa-solid fa-dice-five"></i>',
'<i class="dice fa fa-solid fa-dice-six"></i>']

// Demande des noms au début

namePlayers()


// Fonction : Nom des joueurs 

function namePlayers() {
    let p1 = prompt('Quel est ton nom jeune Dicey Master ?');
    let p2 = prompt('Et qui affrontes tu aujourd\'hui ?');
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

function changePlayer() {
    if (joueur === 0) {
        joueur = 1;
        score = score2;
        current = current2;
        player1.classList.remove("go")
        player2.classList.add("go")
    } else {
        joueur = 0;
        score = score1;
        current = current1;
        player2.classList.remove("go")
        player1.classList.add("go")
    }
}


// Function : reset

function reset() {
    current1.innerText = 0;
    current2.innerText = 0;
    total = 0;
}


// Lancer de Dé au click

roll.onclick = function() {
    dice.classList.add("shake")
    setTimeout(function() {
        dice.classList.remove("shake");
        let result = diceRoll();
    if (result != 1) {
        diceResult(result);
        total = total + result;
        current.innerText = total;
    } else {
        diceResult(1);
        alert('Dommage, tu as fait 1, changement de joueur !');
        changePlayer();
        reset();
    }
    },1000)
}


// Enregistrement du score en cours

hold.onclick = function() {
    let previousScore = score.innerText;
    score.innerText = Number(total) + Number(previousScore);
    if (score.innerText >= 100) {
        let winner;
        if (joueur = 0) {
            winner = player1.innerText
        } else {
            winner = player2.innerText
        }
        alert("WE HAVE A WINNER : CONGRATS TO " + winner + " !!!")
        newGame.classList.add("shake")
    } else {
        changePlayer();
        reset()
    }
}


// New Game

newGame.onclick = function() {
    location.reload(true);
}
