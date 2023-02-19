//constants
const winMssg:string = 'has won!';
const tieMssg:string = 'Its a Cat\'s game meeeow'
const activeMssg:string = 'the game is afoot'
const winConditions:number[][]= [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
//Variables
let board: (string|null)[];
let turn:number;
let winner:number;
let tie:boolean;
//cached element references
const statusMssg: HTMLHeadElement|null = document.querySelector<HTMLHeadingElement>('#status-message')
let boardGrab:(HTMLDivElement|null)[]=[];
for (let i:number=0; i<9;i++){
  let sqr = document.querySelector<HTMLDivElement>(`#sq${i}`)
  boardGrab?.push(sqr)
}
const gameBoard: (HTMLDivElement|null)[]= boardGrab
//event listeners


//functions
function init(){
  initBoard();
  turn=-1;
  winner=0;
  tie=false;
  render()
}
function initBoard(){
  board = [null,null,null,null,null,null,null,null,null]
}

function render():void{
renderBoard();
renderMessage();
}

function renderBoard():void{
  for (let i:number=0;i<board.length;i++){

  }
}

function renderMessage():void{
  if(statusMssg) statusMssg.textContent= 'test'
}

function handleClick():boolean{
  return false
}

function placePiece():void{

}

function switchTurn():void{

}

function checkForWin():void{

}

function checkForTie():void{

}


function resetBoard(){
  board.forEach(square=>{square = null})
}

function reset():void{
  resetBoard();
  init();
  
}

renderMessage()