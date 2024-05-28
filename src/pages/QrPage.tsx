import { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { QRCodeCanvas } from 'qrcode.react';
import PIX from 'react-qrcode-pix';

export default function QrPage() {
  const [qrCode, setQrCode] = useState<string>();
  console.log(qrCode)
  
  const context = useContext(Context)
  if (!context) return null;
  const { dataSite, formDataPix, setFormDataPix } = context

  const handleDownload = async() => {
    let qrCodeURL = document.getElementById('qrCodeEl') as HTMLCanvasElement
    console.log(qrCodeURL)
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
  
  return (
    <section style={{
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 10,
      paddingTop: 10
  }}>
      {
        formDataPix.key ? (
          <PIX
            pixkey={formDataPix.key}
            merchant={formDataPix.name}
            city={formDataPix.city}
            padding={20}
          />
        ) : (
          <QRCodeCanvas
            id="qrCodeEl"
            value={`${dataSite}`}
            includeMargin={true}
      />
        )
      }
      
      <main>
        <button onClick={() => handleDownload()}>Download</button>
        <button>Compartilhar</button>
      </main>
    </section>
  )
}