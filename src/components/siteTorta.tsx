import "./siteTorta.css"

const recipeTortaFrango = {
  titulo: 'Torta de Frango',
  ingredientes: [
    'Massa:',
    '2 xícaras de farinha de trigo',
    '1 colher de chá de sal',
    '1/2 xícara de manteiga gelada, cortada em cubos',
    '4-6 colheres de sopa de água gelada',
    'Recheio:',
    '2 peitos de frango cozidos e desfiados',
    '1 cebola picada',
    '2 dentes de alho picados',
    '1 cenoura ralada',
    '1 xícara de milho verde',
    '1 xícara de ervilha',
    '1 xícara de molho de tomate',
    'Sal e pimenta a gosto',
    '1 colher de chá de páprica',
    '1 colher de chá de orégano',
    '1/2 xícara de cheiro-verde picado',
    '1 ovo batido (para pincelar)',
  ],
  Instruções: [
    'Massa:',
    'Em uma tigela grande, misture a farinha de trigo e o sal. Adicione a manteiga gelada e misture com um cortador de massa ou com as pontas dos dedos até obter uma mistura que se assemelhe a migalhas grossas.',
    'Adicione a água gelada, uma colher de sopa de cada vez, misturando delicadamente após cada adição, até que a massa se forme. Forme a massa em uma bola, embrulhe em filme plástico e leve à geladeira por pelo menos 30 minutos.',
    'Recheio:',
    'Em uma panela, refogue a cebola e o alho em um pouco de óleo até ficarem macios. Adicione o frango desfiado, a cenoura, o milho verde, a ervilha, o molho de tomate, o sal, a pimenta, a páprica e o orégano. Cozinhe por alguns minutos até que os ingredientes estejam bem misturados e aquecidos. Desligue o fogo e adicione o cheiro-verde picado. Deixe o recheio esfriar.',
    'Montagem:',
    'Pré-aqueça o forno a 180°C e unte uma forma de torta.',
    'Divida a massa em duas partes, uma ligeiramente maior que a outra. Abra a parte maior da massa em uma superfície enfarinhada até que fique com cerca de 0,5 cm de espessura e forre o fundo e as laterais da forma de torta.',
    'Coloque o recheio de frango sobre a massa na forma.',
    'Abra a parte menor da massa e cubra o recheio, selando as bordas com a parte inferior da massa.',
    'Faça alguns cortes na parte superior da massa para permitir a saída do vapor durante o cozimento. Pincele a superfície da torta com o ovo batido.',
    'Leve ao forno pré-aquecido e asse por cerca de 30-40 minutos, ou até que a massa esteja dourada.',
    'Retire do forno e deixe esfriar um pouco antes de cortar e servir.',
  ],
};

function RecipeTortaFrango() {
  return (
    <div className="fundo">
    <div className="body">
      <div className="logo2"><img src="src/assets/logo.png"/></div>
      <div className="recipe">
        <h1>{recipeTortaFrango.titulo}</h1>
        <h2>Ingredientes</h2>
        <ul>
        {recipeTortaFrango.ingredientes.map((ingredientes, index) => (
          <li key={index}>{ingredientes}</li>
        ))}
        </ul>
        <h2>Instruções</h2>
        <ol>
          {recipeTortaFrango.Instruções.map((Instruções, index) => (
            <li key={index}>{Instruções}</li>
          ))}
        </ol>
      </div>
    </div>
    </div>
  );
}

export default RecipeTortaFrango;
