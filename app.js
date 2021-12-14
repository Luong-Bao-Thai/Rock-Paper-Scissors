let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result >p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return 'Rock ✊';
    if (letter === 'p') return 'Paper 🤚';
    return 'Scissors ✌️';
}

function win(userChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Computer got ${convertToWord(computerChoice)}. You win!`
    result_p.classList.add('green-glow');
    setTimeout(function() {result_p.classList.remove('green-glow')},500);
    scoreBoard_div.classList.add('green-glow');
    setTimeout(function() {scoreBoard_div.classList.remove('green-glow')},500);
}
function lose(userChoice, computerChoice) {
    computerScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `Computer got ${convertToWord(computerChoice)}. You lose!`
    result_p.classList.add('red-glow');
    setTimeout(function() {result_p.classList.remove('red-glow')},500);
    scoreBoard_div.classList.add('red-glow');
    setTimeout(function() {scoreBoard_div.classList.remove('red-glow')},500);
}
function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `You all got ${convertToWord(computerChoice)}. Draw!`
    result_p.classList.add('yellow-glow');
    setTimeout(function() {result_p.classList.remove('yellow-glow')},500);
    scoreBoard_div.classList.add('yellow-glow');
    setTimeout(function() {scoreBoard_div.classList.remove('yellow-glow')},500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'pr':
        case 'sp':
        case 'rs':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game('r'))
    paper_div.addEventListener('click', () => game('p'))
    scissors_div.addEventListener('click', () => game('s'))
}

main();