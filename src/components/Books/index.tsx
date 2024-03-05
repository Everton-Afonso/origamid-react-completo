export const Books = () => {
  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  const livro = livros.filter((livro) => livro.ano >= 1998);

  return (
    <ul>
      {livro.map((item: { nome: string; ano: number }) => (
        <li key={item.nome}>
          {item.nome}, {item.ano}
        </li>
      ))}
    </ul>
  );
};
