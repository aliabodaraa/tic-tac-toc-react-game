import { useState } from "react";
import Board from "./Board";

const Game = () => {
    const [history,setHistory]=useState([{squares: Array(9).fill(null) }]);
    const [xIsNext,setXIsNext]=useState(true);
    const [status,setStatus]=useState("start with O");
    const [finishFromGame,setFinishFromGame]=useState(0);
    const [solution,setSolution]=useState([]);
    const [stepNumber,setStepNumber]=useState(0);
    const calculateWinner=(squaresArr)=>{
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          let [a, b, c] = lines[i];
          if (squaresArr[a] && squaresArr[a] === squaresArr[b] && squaresArr[a] === squaresArr[c]) {
            solution.push(a, b, c);
            return squaresArr[a];
          }
        }

        return null;
      }

    const onClickFromGame=(i)=>{
    
        const current = history[history.length - 1];
        const squaresArr = current.squares.slice();
        if(squaresArr[i] || finishFromGame===2 || finishFromGame===1) return;
        //debugger;
        squaresArr[i] = !xIsNext ? 'X' : 'O';
        history.push({squares:squaresArr}); //you can use this insted of use setHistory because push apply the edition directly

        //setHistory(history.concat({squares:squaresArr}));//the updates not syncrnouns,it missed the latest move
        //console.log(history,"now");
        
        setHistory(history);//without meaning i put it for remove to silence the warning
        setSolution(solution);//without meaning i put it for remove to silence the warning
        setXIsNext(!xIsNext);

        let winner=calculateWinner(squaresArr);
        //console.log("___________----"+typeof winner);
        if(winner){
            setFinishFromGame(1);
            setStatus('Winner: ' + winner);
            //setSolution(solution.concat(...winner));
            console.log("There is winner",winner,solution);
        }else{
            setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
            if(!squaresArr.includes(null)){//check if all squares are filled
                setStatus('There is no winner');
                setFinishFromGame(2);
                console.log("There is no winner");
            }
        }
      }
      const jumpTo=(moveIndex)=>{
        setStepNumber(moveIndex);
        setXIsNext((moveIndex % 2) === 0);
        console.log("Jump to step",moveIndex,"with board",history[moveIndex].squares)

      }
    return (
        
        <div className="game">
          <div className="game-board">
            <Board
                solution={solution}
                squaresArr={history[history.length-1].squares}//history[history.length-1].squares
                onClickBoard={(i) => onClickFromGame(i)}
                finishBoard={finishFromGame}
              />
          </div>
          <div className="game-info">
            <h2>{status}</h2>
            <ol>         {
                 history.map((step, moveIndex) => {
                  const desc = moveIndex ?
                    'Go to moveIndex #' + moveIndex :
                    'Go to game start';
                  return (
                    <li key={moveIndex} >
                      {step.squares}{moveIndex}
                      <button onClick={() => jumpTo(moveIndex)}>{desc}</button>
                    </li>
                  );
                })
          }</ol>
          </div>
      </div>
     );
}
 
export default Game;
