interface ProdutosPros {
  id: number
  nome: string
  preco: string
  cores: string[]
}

export const Produtos = () => {
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766']
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59']
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786']
    }
  ]

  const produto = produtos.filter(
    (item: ProdutosPros) => Number(item.preco.replace('R$ ', '')) > 1500
  )

  return (
    <section>
      {produto.map((item: ProdutosPros) => (
        <div key={item.id}>
          <h2>{item.nome}</h2>
          <p>{item.preco}</p>
          <ul>
            {item.cores.map((cor: string, index: number) => (
              <li key={index} style={{ backgroundColor: cor, color: '#fff' }}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
