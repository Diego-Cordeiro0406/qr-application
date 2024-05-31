import { useState, ReactNode } from "react";
import { Context, MyContextProps } from "./Context";
import { IParameter } from "../types/types";

interface MyProviderProps {
  children: ReactNode;
}

const Provider = ({ children }: MyProviderProps) => {
  const [dataSite, setDataSite] = useState('');
  const [formDataPix, setFormDataPix] = useState<IParameter>({
    key: '',
    name: '',
    city: '',
    transactionId: '',
    value: 0
  });

  const handleDownload = async() => {
    let qrCodeURL = document.querySelector('canvas') as HTMLCanvasElement
    if(qrCodeURL) {
      const url = qrCodeURL
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      console.log(qrCodeURL)
      let link = document.createElement("a");
      link.href = url;
      link.download = "QR_Code.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }    
  }


  const values: MyContextProps = {
    dataSite,
    setDataSite,
    formDataPix,
    setFormDataPix,
    handleDownload
  }

 return (
    <Context.Provider value={ values }>
      {children}
    </Context.Provider>
 );
};

export default Provider;