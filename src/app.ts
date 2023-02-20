//constants
const idleMssg:string = 'press start to play'
const winMssg:string = 'has won!';
const tieMssg:string = 'Its a Cat\'s game meeeow'
const activeMssg:string = 'the game is afoot'
const winConditions:number[][]= [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
type gameStatus ={
  status:boolean,
  winner:string
}
//Variables
let board: (string)[]=['','','','','','','','',''];
let turn:number = 0;
let winner:gameStatus={status:true,winner:''};
let tie:boolean;

//cached element references
const statusMssg = document.querySelector<HTMLHeadingElement>('#status-message')!
let boardGrab:HTMLDivElement[]=[];
for (let i:number=0; i<9;i++){
  let sqr = document.querySelector<HTMLDivElement>(`#sq${i}`)!
  boardGrab?.push(sqr)
}
console.log(boardGrab)
const gameBoard: HTMLDivElement[]= boardGrab
const resetBtn= document.querySelector<HTMLButtonElement>('#reset-button')!
const startBtn = document.querySelector<HTMLButtonElement>('#start-button')!
//event listeners
gameBoard.forEach(sqr=>{sqr?.addEventListener('click', function(){handleClick(sqr)})});

startBtn.addEventListener('click', function(){
  init()
  statusMssg.innerText = activeMssg
})

resetBtn.addEventListener('click', function(){reset()})



//functions
function init():void{
  if(turn !== 0) return
  initBoard();
  turn=-1;
  winner.status = false;
  tie=false;
  render()
  console.log('inited')
}
function initBoard(){
  board = ['','','','','','','','','']
}

function render():void{
renderBoard();
renderMessage();
}

function renderBoard():void{
  for (let i:number=0;i<gameBoard.length;i++){
    board[i] = gameBoard[i].innerHTML
  }
}

function renderMessage():void{
  if(tie){statusMssg.innerText = tieMssg}
  else if(winner.status === true && winner.winner !== ''){
  {statusMssg.innerText = winner.winner + ' ' + winMssg}

  }
}

function handleClick(evt:HTMLDivElement):void{
  placePiece(evt)
  render()
  checkForWin()
  checkForTie()
  render()
}

function placePiece(evt:HTMLDivElement):void{
    if(evt.innerHTML !== '' && turn !== 0){
      statusMssg.innerHTML = 'try again'
      return
    }
    if(turn === -1){
      evt.innerHTML = 'X'
      statusMssg.innerText = 'Now O'
    }else if(turn === 1){
      evt.innerHTML = 'O'
      statusMssg.innerText = 'Now x'
    }
    switchTurn()
}

function switchTurn():void{
  if (winner.status === false){
    turn *= -1;
  }
}

function checkForWin():void{
  winConditions.forEach(arr =>{
    let temp:string[]= [board[arr[0]],board[arr[1]],board[arr[2]]];
    if(temp.every(el =>{return el === 'X'})||temp.every(el =>{return el === 'O'})){
      winner.status = true;
      winner.winner = temp[0];
      turn=0;
    }
  })
}

function checkForTie():void{
  if(winner.status === true || board.some(sqr => {return sqr === ''})) {tie = false}
  else if (board.every(sqr =>{ return sqr !== ''})) {
    tie = true
    turn = 0
    }
}


function resetBoard(){
  gameBoard.forEach(square=>{square.innerHTML = ''})
  renderBoard()
}

function reset():void{
  resetBoard();
  turn = 0;
  statusMssg.innerText = idleMssg
}
