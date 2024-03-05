import Header from './Header'
import Home from './Home'
import Products from './Products'

const Rotas = () => {
  const { pathname } = window.location

  let Page: React.ComponentType

  if (pathname === '/products') {
    Page = Products
  } else {
    Page = Home
  }

  return (
    <>
      <Header />
      <Page />
    </>
  )
}

export default Rotas
