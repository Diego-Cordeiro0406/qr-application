import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()
  return (
    <section className="mobile:w-full mobile:h-full mobile:bg-gray-100">
      <main>
        <button onClick={() => navigate('/form-pix')}>Pix</button>
        <button onClick={() => navigate('/form-site')}>Site</button>
      </main>
    </section>
  )
}
