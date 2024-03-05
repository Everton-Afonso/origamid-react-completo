import { useRef, useState } from 'react'

const FormUseRef = () => {
  const [input, setInput] = useState('')
  const inputElement = useRef<HTMLInputElement>(null)
  const [comentarios, setComentario] = useState([
    'teste 1',
    'teste 2',
    'teste 3',
    'teste 4'
  ])

  const handleClick = () => {
    setComentario([...comentarios, input])
    setInput('')

    if (inputElement.current) {
      inputElement.current.focus()
    }
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>

      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br />

      <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default FormUseRef
