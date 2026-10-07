const { useState } = React;

export function Board() {
  const [winner, setWinner] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(""));
  const [draw, setDraw] = useState(false);

  const handleClick = (index) => {
    if (board[index] !== "") {
      return;
    }
    if (winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result);
      return;
    }
    const isDraw = newBoard.every((square) => square !== "");
    setDraw(isDraw);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setDraw(false);
    setWinner(null);
  };
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  return (
    <div>
      <div class="board">
        {board.map((square, index) => (
          <button
            className="square"
            key={index}
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <button id="reset" onClick={resetGame}>
        Reset
      </button>
      {winner && <p>Winner: {winner}</p>}
      {draw && <p>We have a draw</p>}
    </div>
  );
}
//board simple css
// .board{
//     display:grid;
//     grid-template-columns:repeat(3,80px);
//     grid-template-rows:repeat(3,80px);
//   }

//   .board button{
//     font-size:50px;
//   }
