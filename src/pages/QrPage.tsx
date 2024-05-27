import { useContext } from 'react'

import { Context } from '../context/Context'
import { QRCodeCanvas } from 'qrcode.react';

export default function QrPage() {
  // const [c, setC] = useState()
  const context = useContext(Context)
  if (!context) return null;
  const { data } = context

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
    <section>
      <QRCodeCanvas
        id="qrCodeEl"
        value={`${data}`}
        includeMargin={true}
      />
      <main>
        <button onClick={() => handleDownload()}>Download</button>
        <button>Compartilhar</button>
      </main>
    </section>
  )
}