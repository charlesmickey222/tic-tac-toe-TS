"use strict";
//constants
const idleMssg = 'press start to play';
const winMssg = 'has won!';
const tieMssg = 'Its a Cat\'s game meeeow';
const activeMssg = 'the game is afoot';
const winConditions = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
//Variables
let board = ['', '', '', '', '', '', '', '', ''];
let turn = 0;
let winner = { status: true, winner: '' };
let tie;
//cached element references
const statusMssg = document.querySelector('#status-message');
let boardGrab = [];
for (let i = 0; i < 9; i++) {
    let sqr = document.querySelector(`#sq${i}`);
    boardGrab?.push(sqr);
}
console.log(boardGrab);
const gameBoard = boardGrab;
const resetBtn = document.querySelector('#reset-button');
const startBtn = document.querySelector('#start-button');
//event listeners
gameBoard.forEach(sqr => { sqr?.addEventListener('click', function () { handleClick(sqr); }); });
startBtn.addEventListener('click', function () {
    init();
    statusMssg.innerText = activeMssg;
});
resetBtn.addEventListener('click', function () { reset(); });
//functions
function init() {
    if (turn !== 0)
        return;
    initBoard();
    turn = -1;
    winner.status = false;
    tie = false;
    render();
    console.log('inited');
}
function initBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
}
function render() {
    renderBoard();
    renderMessage();
}
function renderBoard() {
    for (let i = 0; i < gameBoard.length; i++) {
        board[i] = gameBoard[i].innerHTML;
    }
}
function renderMessage() {
    if (tie) {
        statusMssg.innerText = tieMssg;
    }
    else if (winner.status === true && winner.winner !== '') {
        {
            statusMssg.innerText = winner.winner + ' ' + winMssg;
        }
    }
}
function handleClick(evt) {
    placePiece(evt);
    render();
    checkForWin();
    checkForTie();
    render();
}
function placePiece(evt) {
    if (evt.innerHTML !== '' && turn !== 0) {
        statusMssg.innerHTML = 'try again';
        return;
    }
    if (turn === -1) {
        evt.innerHTML = 'X';
        statusMssg.innerText = 'Now O';
    }
    else if (turn === 1) {
        evt.innerHTML = 'O';
        statusMssg.innerText = 'Now x';
    }
    switchTurn();
}
function switchTurn() {
    if (winner.status === false) {
        turn *= -1;
    }
}
function checkForWin() {
    winConditions.forEach(arr => {
        let temp = [board[arr[0]], board[arr[1]], board[arr[2]]];
        if (temp.every(el => { return el === 'X'; }) || temp.every(el => { return el === 'O'; })) {
            winner.status = true;
            winner.winner = temp[0];
            turn = 0;
        }
    });
}
function checkForTie() {
    if (winner.status === true || board.some(sqr => { return sqr === ''; })) {
        tie = false;
    }
    else if (board.every(sqr => { return sqr !== ''; })) {
        tie = true;
        turn = 0;
    }
}
function resetBoard() {
    gameBoard.forEach(square => { square.innerHTML = ''; });
    renderBoard();
}
function reset() {
    resetBoard();
    turn = 0;
    statusMssg.innerText = idleMssg;
}
