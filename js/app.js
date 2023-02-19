"use strict";
//constants
const winMssg = 'has won!';
const tieMssg = 'Its a Cat\'s game meeeow';
const activeMssg = 'the game is afoot';
const winConditions = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
//Variables
let board;
let turn;
let winner;
let tie;
//cached element references
const statusMssg = document.querySelector('#status-message');
let boardGrab = [];
for (let i = 0; i < 9; i++) {
    let sqr = document.querySelector(`#sq${i}`);
    boardGrab?.push(sqr);
}
const gameBoard = boardGrab;
//event listeners
//functions
function init() {
    initBoard();
    turn = -1;
    winner = 0;
    tie = false;
    render();
}
function initBoard() {
    board = [null, null, null, null, null, null, null, null, null];
}
function render() {
    renderBoard();
    renderMessage();
}
function renderBoard() {
    for (let i = 0; i < board.length; i++) {
    }
}
function renderMessage() {
    if (statusMssg)
        statusMssg.textContent = 'test';
}
function handleClick() {
    return false;
}
function placePiece() {
}
function switchTurn() {
}
function checkForWin() {
}
function checkForTie() {
}
function resetBoard() {
    board.forEach(square => { square = null; });
}
function reset() {
    resetBoard();
    init();
}
renderMessage();
