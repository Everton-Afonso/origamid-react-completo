type Foto = {
  titulo?: string
  src?: string
}

export type ProdutosProps = {
  dados: {
    id?: string
    fotos: Foto[]
    nome?: string
    preco?: string
    descricao?: string
    vendido?: string
  }
}

const Produtos = ({ dados }: ProdutosProps) => {
  const { nome, preco, fotos } = dados

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  if (!nome) {
    return
  }

  return (
    <div>
      <h1>{nome}</h1>
      <p>{!!preco && formatPrice(Number(preco))}</p>

      {fotos && fotos.length > 0 && (
        <img src={fotos[0].src} alt={fotos[0].titulo} />
      )}
    </div>
  )
}

export default Produtos
