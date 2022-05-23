const input = document.getElementById('userName');
const button = document.getElementById('btn-start');
const playerScore = document.querySelector('.playerscore');
const ComputerScore = document.querySelector('.computerscore');
const result = document.querySelector('.result');

let counter = 0;
let scorePlayer = 0;
let scoreComputer = 0;

button.addEventListener('click', 
function(){
    counter++;
    const userName = input.value;
    const playerName = document.querySelector('.playerscore h2');
    const computerName = document.querySelector('.computerscore h2');
    
    // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    const dadoPlayer = Math.floor(Math.random() * 6) + 1;
    const dadoComputer = Math.floor(Math.random() * 6) + 1;        
    
    // Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (dadoPlayer > dadoComputer) {
        scorePlayer++;
        result.innerHTML = `${userName} Vince`;
    } else if (dadoPlayer == dadoComputer) {
        result.innerHTML = `Pareggio`;
    } else {
        scoreComputer++;
        result.innerHTML = `Computer Vince`
    }
    
    const playerText = `Round ${counter}: ${dadoPlayer}`;
    const computerText = `Round ${counter}: ${dadoComputer}`;
    
    playerName.innerHTML = userName + ': ' + scorePlayer;
    computerName.innerHTML = 'Computer: ' + scoreComputer;

    const elementPlayer = document.createElement('p');
    const elementComputer = document.createElement('p');

    elementPlayer.innerHTML += playerText;
    elementComputer.innerHTML += computerText;

    playerScore.append(elementPlayer);
    ComputerScore.append(elementComputer);
});
