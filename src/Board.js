import Square from "./Square";
const Board = ({solution,squaresArr,onClickBoard,finishBoard}) => {
    
      const renderSquare=(i)=>{
        //console.log(squaresArr[i]);
        const isFoundInSolution = solution.some(element => {
          if (element === i) {
            return true;
          }
          return false;
        });
        //console.log(isFoundInSolution);
        return (
          <Square isFoundInSolution={isFoundInSolution} value={squaresArr[i]} onClickSquare={() => onClickBoard(i)} finish={finishBoard}
          />
        );
      }
    return (
        <div className="general-board">
            <div className={(finishBoard===2)?'failed':''}>
            {/* {solution.length &&<ul>
              {solution.map((ele,ind)=><li>{typeof ele}</li>)}
              </ul>} */}
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