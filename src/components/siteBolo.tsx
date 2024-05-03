const recipeBoloChoco = {
    titulo: 'Bolo de Chocolate',
  ingredientes: [
    '2 xícaras de farinha de trigo',
    '1 xícara de cacau em pó',
    '1 e 1/2 xícaras de açúcar granulado',
    '2 ovos grandes',
    '1 xícara de leite',
    '1/2 xícara de óleo vegetal',
    '2 colheres de chá de fermento em pó',
    '1 colher de chá de bicarbonato de sódio',
    '1 colher de chá de extrato de baunilha',
    '1/2 colher de chá de sal',
    '1 xícara de água quente (opcional, para uma textura mais úmida)',
  ],
  Instruções: [
    'Pré-aqueça o forno a 180°C e unte uma forma de bolo com manteiga e farinha, ou forre com papel manteiga.',
    'Em uma tigela grande, peneire a farinha de trigo, o cacau em pó, o bicarbonato de sódio, o fermento em pó e o sal. Misture bem e reserve.',
    'Em outra tigela grande, usando uma batedeira elétrica ou um batedor manual, bata a manteiga amolecida, o açúcar granulado e o açúcar mascavo até obter uma mistura cremosa e homogênea.',
    'Adicione os ovos, um de cada vez, à mistura de manteiga e açúcares, batendo bem após cada adição. Em seguida, adicione o extrato de baunilha e misture até incorporar.',
    'Adicione os ingredientes secos à mistura de manteiga e ovos em três partes alternando com o leite, começando e terminando com os ingredientes secos. Misture até ficar homogêneo, mas não bata demais.',
    'Acrescente as gotas de chocolate ou o chocolate meio amargo picado à massa e misture com uma espátula até estar uniformemente distribuído.',
    'Despeje a massa na forma preparada e espalhe-a uniformemente. Leve ao forno pré-aquecido e asse por cerca de 30-35 minutos, ou até que um palito inserido no centro saia limpo.',
    'Retire o bolo do forno e deixe esfriar na forma por alguns minutos. Em seguida, transfira para uma grade de resfriamento para esfriar completamente antes de cortar e servir.',
    'Você pode decorar o bolo com glacê de chocolate, chantilly ou simplesmente polvilhar açúcar de confeiteiro por cima antes de servir.',
  ],
};

function RecipeBoloChoco() {
  return (
    <div className="recipe">
      <h1>{recipeBoloChoco.titulo}</h1>
      <h2>Ingredients</h2>
      <ul>
        {recipeBoloChoco.ingredientes.map((ingredientes, index) => (
          <li key={index}>{ingredientes}</li>
        ))}
      </ul>
      <h2>Instruções</h2>
      <ol>
        {recipeBoloChoco.Instruções.map((Instruções, index) => (
          <li key={index}>{Instruções}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeBoloChoco;
