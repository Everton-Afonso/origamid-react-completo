import Title from './Title'

const Products = () => {
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000'
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000'
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500'
    }
  ]

  return (
    <section>
      <Title title="Produtos" />
      {produtos.map((produto, index) => (
        <p key={index}>
          {produto.nome}
          <span>{produto.preco}</span>
        </p>
      ))}
    </section>
  )
}

export default Products
