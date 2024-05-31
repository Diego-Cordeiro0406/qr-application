import { useContext } from 'react'
import { Context } from '../context/Context'
import { QRCodeCanvas } from 'qrcode.react';
import PIX from 'react-qrcode-pix';

export default function QrPage() {
  const context = useContext(Context)

  if (!context) return null;
  const { dataSite, formDataPix, handleDownload } = context

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
            amount={formDataPix.value}
            code={formDataPix.transactionId}
            padding={20}
          />
        ) : (
          <QRCodeCanvas
            value={`${dataSite}`}
            includeMargin={true}
      />
        )
      }
      
      <section>
        <button onClick={() => handleDownload()}>Download</button>
        <button>Compartilhar</button>
      </section>
    </section>
  )
}