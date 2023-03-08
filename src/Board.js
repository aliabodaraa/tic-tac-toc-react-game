import { useState } from "react";
import Square from "./Square";
const Board = () => {

    const [squaresArr,setSquaresArr]=useState([null,null,null,null,null,null,null,null,null]);
    const [xIsNext,setXIsNext]=useState(true);
    const [status,setStatus]=useState("start with O");
    const [finish,setFinish]=useState(0);
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
          const [a, b, c] = lines[i];
          if (squaresArr[a] && squaresArr[a] === squaresArr[b] && squaresArr[a] === squaresArr[c]) {
            return squaresArr[a];
          }
        }

        return null;
      }
      const handleClickBoard=(i)=>{
        console.log(333333333333);
        if(squaresArr[i] || finish===2 || finish===1) return;
        console.log(squaresArr);
        const squares = squaresArr.slice();
        squares[i] = !xIsNext ? 'X' : 'O';
        console.log(squares);
        setSquaresArr(squares);
        setXIsNext(!xIsNext);
        let winner=calculateWinner(squares);
        if(winner){
            setFinish(1);
            setStatus('Winner: ' + winner);
            console.log("AAAAAAAAAAAAAAAAA");
        }else{
            setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
            if(!squares.includes(null) && !winner){
                setStatus('There is no winner');
                setFinish(2);
            }
        }
      }
      const renderSquare=(i)=>{
        console.log(2222222222);
        return (
          <Square
            value={squaresArr[i]}
            onClickSquare={() => handleClickBoard(i)} finish={finish}
          />
        );
      }

    return (
        <div className="general-board">
            <div className="status">{status}</div>
            <div className={(finish===2)?'failed':''}>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
            </div>
        </div>
     );
}
 
export default Board;