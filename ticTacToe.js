var readline = require('readline-sync');

// start game
var ticTacToe = () => {
  // start game prompt
  var startPrompt = readline.question('Would you like to play Tic Tac Toe?')
  // start game conditionals
  if (startPrompt === "yes") {
    // game starts
    // render board
    var board = {
      1: ' ',
      2: ' ',
      3: ' ',
      4: ' ',
      5: ' ',
      6: ' ',
      7: ' ',
      8: ' ',
      9: ' ',
    }
    // Enter name, choose O or X
    var player1Name = readline.question('Who will be Player 1? Please type a name.');
    var player2Name = readline.question('Who will be Player 2? Please type a name.');
    while (true) {
      var player1Symbol = readline.question('Will Player 1 be X or O? Player 2');
      var player2Symbol;
      if (player1Symbol === 'X') {
        player2Symbol = 'O';
        break;
      } else if (player1Symbol === 'O') {
        player2Symbol = 'X';
        break;
      } else {
        console.log("That wasn't a valid symbol!")
      }
    }
    
    // render board
    renderBoard(board);

    console.log("Player 1's turn! Please select a number on the board where you want to place your piece.")


  } else if (startPrompt === 'no') {
    // exit game
  }

}

var renderBoard = (board) => {
  var board = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
  }

  console.log(` ${board[1]} | ${board[2]} | ${board[3]} \n
               -----------\n
               ${board[4]} | ${board[5]} | ${board[6]}  \n
               -----------\n
               ${board[7]} | ${board[8]} | ${board[9]}  \n
              `)
}

/*

 X | X | X 
-----------
 X | X | X
-----------
 X | X | X 

 */