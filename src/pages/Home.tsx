import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  return (
    <section>
      <main>
        <button onClick={() => navigate('/form-pix')}>Pix</button>
        <button onClick={() => navigate('/form-site')}>Site</button>
      </main>
    </section>
  )
}
