import { useState } from "react"

function NumForm({ submitNumber, fieldDisabled }) {
    const [formNum, setFormNum] = useState('')

    const getNum = (e) => {
        e.preventDefault()
        if(formNum){
            submitNumber(formNum)
            setFormNum('')
        }
        
    }

  return (
    <form onSubmit={getNum}>
        <input disabled={fieldDisabled} min="1" max="5" type="number" onChange={(e)=>setFormNum(e.target.value)} value={formNum} />
        <button disabled={fieldDisabled}>Submit</button>
    </form>
  )
}

export default NumForm