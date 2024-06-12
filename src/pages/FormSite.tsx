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
    <section
      className="
        flex
        flex-col
        w-full
        h-full
        bg-[#CCE0D6]
        items-center
        justify-center
      "
      >
        <div className="flex flex-col mobile:w-11/12 laptop:w-[51.25rem] mb-4">
          <label className="font-bold" htmlFor="input-site">Site</label>
          <input
            id="input-site"
            placeholder="ex. github.com"
            className="rounded-sm h-7 pl-1"
            type="text"
            onChange={handleInputChange}
            value={inputData}
          />
        </div>
        <button
          className="
            bg-blue-700
            disabled:bg-red-600
            h-10
            mobile:w-4/5
            laptop:w-[30.625rem]
            rounded-md
            text-white
            font-bold
          "
          onClick={onClick}
        >
          Gerar
      </button>
    </section>
  )
}