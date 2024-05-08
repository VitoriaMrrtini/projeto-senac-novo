import "./siteQueijo.css"
const recipeQueijoPaoData = {
    titulo: 'Pão de Queijo',
    ingredientes: [
    '500g de polvilho azedo',
    '250ml de leite',
    '100ml de óleo vegetal',
    '2 ovos',
    '200g de queijo minas padrão (ou queijo meia-cura) ralado',
    '1 colher de chá de sal',
  ],
  Instruções: [
    'Preaqueça o forno a 180°C e unte uma assadeira ou forre com papel manteiga.',
    'Em uma panela, aqueça o leite e o óleo até começar a ferver. Em uma tigela grande, coloque o polvilho azedo. Despeje a mistura de leite e óleo quente sobre o polvilho e misture bem com uma colher de pau até formar uma massa homogênea. Deixe a mistura esfriar um pouco.',
    'Após a mistura esfriar um pouco, adicione os ovos um de cada vez, misturando bem após cada adição.',
    'Adicione o queijo ralado e o sal à massa e misture até ficar uniforme.',
    'Com as mãos untadas com óleo, pegue pequenas porções da massa e modele bolinhas do tamanho desejado. Disponha as bolinhas na assadeira preparada, deixando um espaço entre elas.',
    'Leve a assadeira ao forno preaquecido e asse os pãezinhos por aproximadamente 20-25 minutos, ou até que estejam levemente dourados.',
    'Retire os pãezinhos do forno e sirva quente. Eles são melhores quando consumidos ainda quentes, mas também podem ser consumidos em temperatura ambiente.',
  ],
};

function RecipeQueijoPao() {
  return (
    <>
    <div className="logo2"><img src="src/assets/logo.png"/></div>
    <div className="recipe">
      <h1>{recipeQueijoPaoData.titulo}</h1>
      <h2>Ingredientes</h2>
      <ul>
        {recipeQueijoPaoData.ingredientes.map((ingredientes, index) => (
          <li key={index}>{ingredientes}</li>
        ))}
      </ul>
      <h2>Instruções</h2>
      <ol>
        {recipeQueijoPaoData.Instruções.map((Instruções, index) => (
          <li key={index}>{Instruções}</li>
        ))}
      </ol>
    </div>
    </>
  );
}

export default RecipeQueijoPao;
