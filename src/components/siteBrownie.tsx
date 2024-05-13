import "./siteBrownie.css"
const recipeBrownie = {
  titulo: 'Brownie',
  ingredientes: [
    '1 xícara de farinha',
    '2 xícaras de açúcar',
    '3/4 xícara de cacau em pó',
    '4 ovos grandes',
    '1 xícara (derretida) de manteiga',
    '1 colher de chá de fermento em pó',
    '1/2 colher de chá de sal',
    '1 colher de chá de extrato de baunilha',
    '1 xícara (picadas, opcional) nozes',
    '170g de chocolate amargo',
    '170g de chocolate ao leite',
    '1/2 xícara de creme de leite'
  ],
  Instruções: [
    'Instruções para fazer brownie:',
    'Pré-aqueça o forno a 180°C e unte uma assadeira.',
    'Em uma tigela grande, misture a farinha, o cacau em pó, o fermento em pó e o sal.',
    'Em outra tigela, bata os ovos e adicione o açúcar, a manteiga derretida e o extrato de baunilha. Misture bem.',
    'Combine os ingredientes secos com os ingredientes molhados e mexa até ficar homogêneo.',
    'Adicione os chocolates picados e as nozes picadas, se estiver usando, e misture.',
    'Despeje a massa na assadeira preparada e espalhe uniformemente.',
    'Asse no forno pré-aquecido por cerca de 25-30 minutos, ou até que um palito inserido no centro saia com algumas migalhas úmidas.',
    'Deixe esfriar completamente antes de cortar em quadrados.',
  ],
};

function RecipeBrownie() {
  return (
    <>
    <div className="fundo">
    <div className="logo2"><img src="src/assets/logo.png"/></div>
    <div className="recipe">
      <h1>{recipeBrownie.titulo}</h1>
      <h2>Ingredientes</h2>
      <ul>
      {recipeBrownie.ingredientes.map((ingredientes, index) => (
        <li key={index}>{ingredientes}</li>
      ))}
      </ul>
      <h2>Instruções</h2>
      <ol>
        {recipeBrownie.Instruções.map((Instruções, index) => (
          <li key={index}>{Instruções}</li>
        ))}
      </ol>
    </div>
    </div>
    </>
  );
}

export default RecipeBrownie;