import './App.css'
import NumForm from './form/NumForm';
import GameResult from './GameRes/GameResult';
import GameEnd from './GameEnd/GameEnd';

import { useState } from 'react';

function App() {

  const [remChance, setRemChance] = useState(5)
  const [winScore, setWinScore] = useState(0)
  const [lostScore, setLostScore] = useState(0)
  const [winMessage, setWinMessage] = useState('')
  const [lostMessage, setLostMessage] = useState('')
  const [fieldDisabled, setFieldDisabled] = useState(false)
  const [endGame, setEndGame] = useState(false)


  // functions

  const submitNumber = (e) => {
    generateScore(Number(e))
    setRemChance( prev => prev - 1 )
    if((remChance -1) === 0){
      setEndGame(true)
      setFieldDisabled(true)
    }
    
  }

  const generateScore = (e) => {
    let ranNum = randomNuberGen()
    
    if(e === ranNum){
      setWinScore(prev => prev + 1)
      setWinMessage('Right Guess')
    }else{
      setLostScore(prev => prev + 1)
      setLostMessage(`Wrong Guess. The number was ${ranNum}`)
    }

  }

  const randomNuberGen = () => {
    return Math.floor(Math.random() * 5 + 1)
  }

  const restartGame = () => {
    setRemChance(5)
    setWinScore(0)
    setLostScore(0)
    setWinMessage('')
    setLostMessage('')
    setFieldDisabled(false)
    setEndGame(false)
  }


  return (
    <>

    <div className="container">
      <header>
        <h1>Gusssing Game</h1>
        <p>Choose a number between 1 to 5.</p>
        <p>You will get 5 chances.</p>
      </header>

      <div className="remainchance">
        <p>{remChance} chances left</p>
      </div>

      <NumForm submitNumber={submitNumber} fieldDisabled={fieldDisabled} />

      <GameResult winMessage={winMessage} lostMessage={lostMessage} />

      {
        endGame && 
        <GameEnd winScore={winScore} lostScore={lostScore} restartGame={restartGame} />
      }

    </div>
      
    </>
  )
}


export default App;
