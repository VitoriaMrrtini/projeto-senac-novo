import "./sitePizza.css"
const recipePizzaCaseira = {
  titulo: 'Pizza Caseira',
  ingredientes: [
    '3 xícaras de farinha de trigo',
    '1 colher de sopa de açúcar',
    '1 colher de chá de sal',
    '1 colher de sopa de fermento biológico seco',
    '1 e 1/4 de xícara de água morna',
    '3 colheres de sopa de azeite de oliva',
    'Molho de Tomate:',
    '1 lata de tomate pelado',
    '2 dentes de alho picados',
    '1 colher de chá de orégano',
    'Sal e pimenta a gosto',
    'Cobertura:',
    'Queijo muçarela ralado',
    'Ingredientes adicionais a gosto (presunto, cogumelos, pimentão, etc.)',
  ],
  Instruções: [
    'Em uma tigela grande, misture a farinha, o açúcar e o sal. Adicione o fermento biológico seco e misture bem.',
    'Adicione a água morna e o azeite de oliva à mistura de farinha. Mexa até formar uma massa pegajosa.',
    'Transfira a massa para uma superfície enfarinhada e sove por cerca de 5-10 minutos, até que fique macia e elástica.',
    'Coloque a massa em uma tigela untada com azeite, cubra com um pano úmido e deixe descansar em um local quente por cerca de 1 hora, ou até dobrar de tamanho.',
    'Molho de Tomate:',
    'Em uma panela, aqueça um pouco de azeite e refogue o alho picado até dourar levemente.',
    'Adicione o tomate pelado, o orégano, o sal e a pimenta. Cozinhe em fogo baixo por cerca de 20-30 minutos, mexendo ocasionalmente, até que o molho reduza e engrosse.',
    'Montagem:',
    'Pré-aqueça o forno a 220°C.',
    'Divida a massa em duas partes e abra cada uma em uma superfície enfarinhada, formando dois discos de pizza.',
    'Transfira os discos de massa para uma assadeira ou pedra de pizza.',
    'Espalhe uma camada generosa de molho de tomate sobre cada disco de massa.',
    'Cubra com queijo muçarela ralado e os ingredientes adicionais de sua escolha.',
    'Asse no forno pré-aquecido por 12-15 minutos, ou até que a massa esteja dourada e o queijo derretido e borbulhante.',
    'Retire do forno, corte em fatias e sirva quente.',
  ],
};

function RecipePizzaCaseira() {
  return (
    <>
    <div className="fundo">
    <div className="logo2"><img src="src/assets/logo.png"/></div>
    <div className="recipe">
      <h1>{recipePizzaCaseira.titulo}</h1>
      <h2>Ingredientes</h2>
      <ul>
      {recipePizzaCaseira.ingredientes.map((ingredientes, index) => (
        <li key={index}>{ingredientes}</li>
      ))}
      </ul>
      <h2>Instruções</h2>
      <ol>
        {recipePizzaCaseira.Instruções.map((Instruções, index) => (
          <li key={index}>{Instruções}</li>
        ))}
      </ol>
    </div>
    </div>
    </>
  );
}

export default RecipePizzaCaseira;
