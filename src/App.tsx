import { Routes, Route } from "react-router-dom"
import FormSite from "./pages/FormSite"
import QrPage from "./pages/QrPage"
import Home from "./pages/Home"
import FormPix from "./pages/FormPix"

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/form-site" element={ <FormSite /> } />
      <Route path="/form-pix" element={ <FormPix /> } />
      <Route path="/qr-page" element={ <QrPage /> } />
    </Routes>
  )
}

export default App
