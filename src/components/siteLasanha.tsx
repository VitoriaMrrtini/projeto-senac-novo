import "./siteLasanha.css"
const recipeLasanha = {
  titulo: 'Lasanha',
  ingredientes: [
    'Massa de lasanha',
    'Molho de tomate',
    'Carne moída',
    'Queijo ricota',
    'Queijo mussarela',
    'Queijo parmesão ralado',
    'Espinafre fresco',
    'Molho bechamel',
    'Temperos como alho, cebola, manjericão, orégano, pimenta-do-reino, etc.',
    'Azeite de oliva',
    'Sal',
  ],
  Instruções: [
    'Se estiver usando massa de lasanha pré-cozida, não é necessário cozinhar antes de montar a lasanha. Se estiver usando massa fresca, siga as instruções do pacote para cozinhar brevemente.',
    'Se estiver preparando um molho de carne à bolonhesa, cozinhe a carne moída em uma panela com um pouco de azeite até dourar, adicione cebola e alho picados, e depois o molho de tomate. Tempere com sal, pimenta-do-reino, manjericão e orégano a gosto. Deixe cozinhando em fogo baixo por cerca de 20-30 minutos.',
    'Se estiver usando espinafre fresco, lave-o bem e refogue rapidamente em uma frigideira com um pouco de azeite até murchar. Escorra o excesso de líquido.',
    'Misture essa mistura no arroz cozido enquanto ainda está quente.',
    'Pré-aqueça o forno a 180°C.',
    'Em uma assadeira grande, espalhe uma camada fina de molho de tomate no fundo.',
    'Coloque uma camada de massa de lasanha sobre o molho.',
    'Adicione uma camada do molho de carne (se estiver usando), seguido por uma camada de espinafre (se estiver usando) e uma camada de queijo ricota.',
    'Repita as camadas até que todos os ingredientes sejam usados, terminando com uma camada de molho de tomate e queijo mussarela por cima.    ',
    'Cubra a assadeira com papel alumínio.',
    'Asse no forno pré-aquecido por cerca de 30-40 minutos.',
    'Retire o papel alumínio e asse por mais 10-15 minutos, ou até que o queijo esteja borbulhante e dourado.',
  ],
};

function RecipeLasanha() {
  return (
    <>
    <div className="fundo">
    <div className="logo2"><img src="src/assets/logo.png"/></div>
    <div className="recipe">
      <h1>{recipeLasanha.titulo}</h1>
      <h2>Ingredientes</h2>
      <ul>
      {recipeLasanha.ingredientes.map((ingredientes, index) => (
        <li key={index}>{ingredientes}</li>
      ))}
      </ul>
      <h2>Instruções</h2>
      <ol>
        {recipeLasanha.Instruções.map((Instruções, index) => (
          <li key={index}>{Instruções}</li>
        ))}
      </ol>
    </div>
    </div>
    </>
  );
}

export default RecipeLasanha;
