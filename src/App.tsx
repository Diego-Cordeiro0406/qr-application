import { Routes, Route } from "react-router-dom"
import Form from "./pages/Form"
import QrPage from "./pages/QrPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Form /> } />
      <Route path="/qrpage" element={ <QrPage /> } />
    </Routes>
  )
}

export default App
