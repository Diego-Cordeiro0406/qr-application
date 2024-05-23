import { useState, useContext } from 'react'

import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'

export default function Form() {
  const [inputData, setInputData] = useState('')
  const navigate = useNavigate()

  const context = useContext(Context)
  if (!context) return null;
  const { setData } = context

  const onClick = () => {
    setData(inputData)
    setInputData('')
    navigate('/qrpage')
  }

  return (
    <section>
      <input
        type="text"
        // onChange={setInputData}
        value={inputData}
        />
      <button onClick={onClick}>Gerar</button>
    </section>
  )
}