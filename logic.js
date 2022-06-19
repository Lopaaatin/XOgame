let players = ['x', 'o'];
let activePlayer = 0;
let field = null;

function fieldGen() {
  return [
    ['','',''],
    ['','',''],
    ['','','']
  ];
}

function startGame() {
  field = fieldGen();
  activePlayer = 0;
  renderBoard(field);
} 

function isWin() {
  return false;
}

function click(row, column) {
  const playerSymbol = players[activePlayer];
  field[row][column] = playerSymbol;
  renderBoard(field);

  if (isWin()) {
    showWinner(activePlayer);
  }

  activePlayer = (activePlayer + 1) % players.length;
}

function isWinningSequence(r0, r1, ri, c0, c1, ci) {  
  let firstSymbol = null;  
  for (let r = r0, c = c0; 
  Math.abs(r1-r) > 0 && Math.abs(c1-c) > 0; r += ri, c += ci  ) {    
  const symbol = field[r][c];    
  if (symbol === '') {      
    return false;    
  }    
  if (firstSymbol === null) {      
    firstSymbol = symbol;      
  continue;    
  }    
  if (firstSymbol !== symbol) {      
    return false;    
    }    
  } 

  return true;
}

function isWin() {  
  const N = field.length;  
  for (let i = 0; i < N; ++i) {    
    if (isWinningSequence(i, i+1, 0, 0, N, 1) ||       
        isWinningSequence(0, N, 1, i, i+1, 0)
      ) {      
      return true;    
    }  
  }  

  if (isWinningSequence(0, N, 1, 0, N, 1) ||        
      isWinningSequence(N-1, -1, -1, 0, N, 1)  ) {    
      return true;  
  }  
  
  return false;
}


