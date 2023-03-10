
  const Square = ({isFoundInSolution,value,onClickSquare,finish}) => {
    console.log(11111111111);
    return (
      <div>
          {finish === 0 && 
          <button className="square" onClick={onClickSquare}>
            {value}
          </button>}
          {finish ===1 &&
          <button disabled className={isFoundInSolution?"square-success":"square"} onClick={onClickSquare}>
          {value}
          </button>}
          {finish ===2 && 
          <button disabled className="square-failed" onClick={onClickSquare}>
          {value}
          </button>}
      </div>
      );
  }
   
  export default Square;
  //finish ===0 there is not a winner but the game not just finished until now
  //finish ===1 there is a winner 
  //finish ===2 there is not a winner 