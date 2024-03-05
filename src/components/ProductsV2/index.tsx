import React, { useEffect, useState } from 'react'
import Produtos from './Products'

const Button = () => {
  const [dados, setDados] = useState(null)
  const [carregando, setCarregando] = useState(false)

  async function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.currentTarget.innerText}`
    )
    const json = await response.json()
    setDados(json)
    setCarregando(false)
  }

  useEffect(() => {
    const localProduct = JSON.parse(localStorage.getItem('product') || '[]')

    if (localProduct !== null) {
      setDados(localProduct)
    }
  }, [])

  useEffect(() => {
    if (dados !== null) {
      localStorage.setItem('product', JSON.stringify(dados))
    }
  }, [dados])

  return (
    <>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>notebook</button>

      {carregando && <p>Carregando...</p>}

      {!carregando && dados && <Produtos dados={dados} />}
    </>
  )
}

export default Button
