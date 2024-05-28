import { useState, useContext } from 'react'

import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'

export default function FormSite() {
  const [inputData, setInputData] = useState('')
  const navigate = useNavigate()

  const context = useContext(Context)
  if (!context) return null;
  const { setDataSite } = context

  const onClick = () => {
    setDataSite(inputData)
    setInputData('')
    navigate('/qr-page')
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setInputData(novoValor);
  };

  return (
    <section>
      <input
        type="text"
        onChange={handleInputChange}
        value={inputData}
        />
      <button onClick={onClick}>Gerar</button>
    </section>
  )
}