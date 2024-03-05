export const Movies = () => {
  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  return (
    <ul>
      {filmes.map((filme) => (
        <li key={filme}>{filme}</li>
      ))}
    </ul>
  );
};
