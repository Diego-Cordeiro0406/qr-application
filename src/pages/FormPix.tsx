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
    <section>
      <form>
        <label htmlFor="input-key">Chave</label>
        <input
          value={formDataPix.key}
          name="key"
          id="input-key"
          type="text"
          onChange={ handleInputChange }
        />

        <label htmlFor="input-name">Nome</label>
        <input
          value={formDataPix.name}
          name="name"
          id="input-name"
          type="text"
          onChange={ handleInputChange }
        />

        <label htmlFor="input-city">Cidade</label>
        <input
          value={formDataPix.city}
          name="city"
          id="input-city"
          type="text"
          onChange={ handleInputChange }
        />

        <label htmlFor="input-transactionId">Identificador</label>
        <input
          value={formDataPix.transactionId}
          name="transactionId"
          id="input-transactionId"
          type="text"
          onChange={ handleInputChange }
        />

        <label htmlFor="input-value">Valor</label>
        <input
          value={formDataPix.value}
          name="value"
          id="input-value"
          type="number"
          onChange={ handleInputChange }
        />
        <button onClick={() => navigate('/qr-page')}>Gerar</button>
      </form>
    </section>
  )
}
