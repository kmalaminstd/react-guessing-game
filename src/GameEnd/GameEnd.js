

function GameEnd({winScore, lostScore, restartGame}) {


  return (
    <div className="game-end-card">
        <h3>Your Final Score</h3>
        <p className="rightscore">Win : { ' ' + winScore}</p>
        <p className="wrongscore">Lost : { ' ' + lostScore}</p>
        <p className="roundres">{ winScore > lostScore ? 'You won the round' : lostScore > winScore ? 'You lost the round' : ''}</p>

        <button onClick={restartGame}>Start Again</button>
    </div>
  )
}

export default GameEnd