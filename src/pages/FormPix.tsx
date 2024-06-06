import { useContext } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";

export default function FormPix() {
   const navigate = useNavigate()
   const context = useContext(Context)
   
   if (!context) return null;
   const { setFormDataPix, formDataPix } = context

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const newValue = name === 'value' ? Number(value) : value;
    setFormDataPix(prevFormData => ({
       ...prevFormData,
       [name]: newValue,
    }));
   };

  return (
    <section className="flex flex-col w-full h-full bg-[#CCE0D6]">
      <form className="flex flex-col items-center w-full h-full bg-[#CCE0D6] mt-10">
        <div className="flex flex-col w-11/12 mb-4">
          <label className="font-bold" htmlFor="input-key">Chave</label>
          <input 
            className="rounded-sm h-7"
            value={formDataPix.key}
            name="key"
            id="input-key"
            type="text"
            onChange={ handleInputChange }
          />
        </div>
        
        <div className="flex flex-col w-11/12 mb-4">
          <label className="font-bold" htmlFor="input-name">Nome</label>
          <input
            className="rounded-sm h-7"
            value={formDataPix.name}
            name="name"
            id="input-name"
            type="text"
            onChange={ handleInputChange }
          />
        </div>

        <div className="flex flex-col w-11/12 mb-4">
          <label className="font-bold" htmlFor="input-city">Cidade</label>
          <input
            className="rounded-sm h-7"
            value={formDataPix.city}
            name="city"
            id="input-city"
            type="text"
            onChange={ handleInputChange }
          />
        </div>
        
        
        <div className="flex flex-col w-11/12 mb-4">
          <label className="font-bold" htmlFor="input-transactionId">Identificador</label>
          <input
            className="rounded-sm h-7"
            value={formDataPix.transactionId}
            name="transactionId"
            id="input-transactionId"
            type="text"
            onChange={ handleInputChange }
          />
        </div>
        
        <div className="flex flex-col w-11/12 mb-4">
          <label className="font-bold" htmlFor="input-value">Valor</label>
          <input
            className="rounded-sm h-7"
            value={formDataPix.value}
            name="value"
            id="input-value"
            type="number"
            onChange={ handleInputChange }
          />
          <div className="width" />
        </div>
        
        <button
          className="bg-blue-700 disabled:bg-red-600 h-10 mobile:w-4/5 rounded-md text-white font-bold"
          onClick={() => navigate('/qr-page')}
        >
          GERAR
        </button>
      </form>
    </section>
  )
}
