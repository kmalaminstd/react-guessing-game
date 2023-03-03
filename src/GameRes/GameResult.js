

function GameResult({ winMessage, lostMessage}) {
  
  return (
    <div className="GameResult">
        <h3>Game Result</h3>

        <p id="#act-res" className={winMessage ? 'right-res' : lostMessage ? 'wrong-res' : '' }>{
          winMessage ? winMessage : lostMessage ? lostMessage : ''
        }</p>
    </div>
  )
}

export default GameResult