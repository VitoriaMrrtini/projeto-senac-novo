import "./siteFeijoada.css"
const recipeFeijoada = {
  titulo: 'Feijoada',
  ingredientes: [
    '500g de feijão preto',
    '300g de carne de porco (como costela, orelha, pé, rabo)',
    '300g de linguiça calabresa',
    '200g de carne seca (já dessalgada)',
    '200g de bacon',
    '2 cebolas grandes picadas',
    '4 dentes de alho picados',
    '2 folhas de louro',
    'Pimenta-do-reino a gosto',
    'Sal a gosto',
    'Sal e pimenta a gosto',
    'Cheiro-verde (coentro e cebolinha) picado a gosto',
  ],
  Instruções: [
    'Deixe o feijão de molho em água durante a noite anterior (cerca de 8 horas). Escorra a água antes de cozinhar.',
    'Em uma panela de pressão, coloque o feijão, a carne de porco, a linguiça calabresa, a carne seca, o bacon, as cebolas picadas, o alho picado, as folhas de louro, a pimenta-do-reino e o sal.',
    'Tampe a panela de pressão e leve ao fogo alto. Quando começar a chiar, abaixe o fogo e cozinhe por cerca de 40 minutos.',
    'Após esse tempo, desligue o fogo e deixe a pressão sair naturalmente da panela.',
    'Abra a panela, retire as carnes e coloque-as em um prato. Desfie ou corte as carnes em pedaços menores, conforme sua preferência.',
    'Volte as carnes desfiadas para a panela com o feijão cozido. Misture bem e leve ao fogo novamente, deixando cozinhar por mais alguns minutos até engrossar o caldo.',
    'Corrija o sal se necessário e adicione mais pimenta-do-reino se desejar.',
    'Sirva a feijoada bem quente, acompanhada de arroz branco, couve refogada, farofa, laranja fatiada e rodelas de laranja.',
    'Polvilhe cheiro-verde picado por cima antes de servir.',
  ],
};

function RecipeFeijoada() {
  return (
    <>
    <div className="fundo">
    <div className="logo2"><img src="src/assets/logo.png"/></div>
    <div className="recipe">
      <h1>{recipeFeijoada.titulo}</h1>
      <h2>Ingredientes</h2>
      <ul>
      {recipeFeijoada.ingredientes.map((ingredientes, index) => (
        <li key={index}>{ingredientes}</li>
      ))}
      </ul>
      <h2>Instruções</h2>
      <ol>
        {recipeFeijoada.Instruções.map((Instruções, index) => (
          <li key={index}>{Instruções}</li>
        ))}
      </ol>
    </div>
    </div>
    </>
  );
}

export default RecipeFeijoada;
