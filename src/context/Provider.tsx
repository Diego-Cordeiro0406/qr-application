import { useState, ReactNode } from "react";
import { Context, MyContextProps } from "./Context";
import { IParameter } from "../types/types";
import { QrCodePix } from 'qrcode-pix';

interface MyProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: MyProviderProps) => {
  const [dataSite, setDataSite] = useState('');
  const [formDataPix, setFormDataPix] = useState<IParameter>({
    version: '01',
    key: '',
    name: '',
    city: '',
    transactionId: '',
    message: '',
    value: 0
  });
  const [qrCode, setQrCode] = useState<string>('');

  async function generateDynamicPix() {
    /*
        version: '01' //versão do pix (não altere)
        key: chave pix
        name: seu nome/empresa
        city: sua cidade
        transactionId: é o identificador que aparecerá no momento do pix (max: 25 caracteres)
        message: mensagem que aparecerá no momento do pix (opcional)
        value: valor que você quer cobrar (opcional)
    */
    const qrCodePix = QrCodePix(formDataPix)

    // const rawPixStr = qrCodePix.payload()
    const qrCodeBase64 = await qrCodePix.base64()

    // setRawPix(rawPixStr)
    setQrCode(qrCodeBase64)
}

  const values: MyContextProps = {
    dataSite,
    setDataSite,
    formDataPix,
    setFormDataPix,
    qrCode,
    generateDynamicPix
  }

 return (
    <Context.Provider value={ values }>
      {children}
    </Context.Provider>
 );
};

export default Provider;