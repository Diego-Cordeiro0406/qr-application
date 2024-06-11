import { useNavigate } from "react-router-dom"

export default function Home() {
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
          className="
            mobile:w-4/5
            laptop:w-[37.5rem]
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
          className="
            mobile:w-4/5
            laptop:w-[37.5rem]
            h-10
            bg-blue-600
            rounded-lg
            font-bold
            text-white
          "
          onClick={() => navigate('/form-site')}
        >
          SITE
        </button>
      </main>
    </section>
  )
}
