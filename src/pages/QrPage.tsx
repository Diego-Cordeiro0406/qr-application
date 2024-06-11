import { useContext } from 'react'
import { Context } from '../context/Context'
import { QRCodeCanvas } from 'qrcode.react';
import PIX from 'react-qrcode-pix';

export default function QrPage() {
  const context = useContext(Context)

  if (!context) return null;
  const { dataSite, formDataPix, handleDownload } = context

  return (
    <section className="flex flex-col items-center justify-center w-full h-full bg-[#CCE0D6]">
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
            size={256}
            value={`${dataSite}`}
            includeMargin={true}
      />
        )
      }
      
      <section className="flex flex-col w-[16rem] items-center justify-center mt-6">
        <button
          className="
            bg-blue-700
            h-10
            mobile:w-full
            rounded-md
            text-white
            font-bold
            mb-4
          "
          onClick={() => handleDownload()}
        >
          Download
        </button>
        <button
          className="
            bg-blue-700
            h-10
            mobile:w-full
            rounded-md
            text-white
            font-bold"
          >
            Compartilhar
          </button>
      </section>
    </section>
  )
}