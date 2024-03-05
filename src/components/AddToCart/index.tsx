import { useRef, useState } from 'react'

const AddToCart = () => {
  const [miniCart, setMiniCart] = useState(0)
  const [notification, setNotification] = useState('')
  const timeoutRef = useRef<number | null>(null)

  const handleClick = () => {
    setMiniCart(miniCart + 1)
    setNotification('Item adicionado ao carrinho')

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setNotification('')
    }, 2000)
  }

  return (
    <div>
      {!!notification && <p>{notification}</p>}
      <br />
      <button onClick={handleClick}>Adicionar ao Carrinho {miniCart}</button>
    </div>
  )
}

export default AddToCart
