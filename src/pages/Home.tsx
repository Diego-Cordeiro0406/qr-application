import { useNavigate } from "react-router-dom"
// import { useState } from "react"

export default function Home() {
  // const [touched, setTouched] = useState(false)

  // const toggleTouched = () => {
  //   setTouched( prevState => !prevState);
  // }
  
  // const handleMouseUp = () => {
  //   setTimeout( () => {
  //     setTouched(false);
  //   }, 150);
  // }
  const navigate = useNavigate()
  return (
    <section
      className="
        flex
        w-full
        h-full
        bg-[#CCE0D6]
        items-center
        justify-center
      "
      >
      <main
        className="
          flex
          flex-col
          items-center
          justify-evenly
          mobile:w-3/5
          mobile:h-32
        "
        >
        <button
          // onMouseDown={toggleTouched}
          // onMouseUp={handleMouseUp}
          className="
            w-4/5
            h-10
            bg-blue-600
            rounded-lg
            font-bold
            text-white
        "
          onClick={() => navigate('/form-pix')}
        >
          PIX
        </button>
        <button
          className="w-4/5 h-10 bg-blue-600 rounded-lg font-bold text-white"
          onClick={() => navigate('/form-site')}
        >
          SITE
        </button>
      </main>
    </section>
  )
}
