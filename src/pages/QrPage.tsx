import { useContext } from 'react'

import { Context } from '../context/Context'

export default function QrPage() {
  // const [c, setC] = useState()
  const context = useContext(Context)
  if (!context) return null;
  const { data } = context

  const handleDownload = async() => {

  }

  return (
    <section>
      {/* <QRCode
        getRef={ref => (myQRCode = ref)}
        size={220}
        value={`${data}`}
      /> */}
      
      <main>
        <button onClick={() => handleDownload()}>Download</button>
        <button>Compartilhar</button>
      </main>
    </section>
  )
}