import "./siteTrufacoco.css";
const recipeTrufaCoco = {
  titulo: "Trufa de Coco",
  ingredientes: [
    "100g de coco ralado",
    "100g de chocolate branco",
    "50g de creme de leite",
    "100g de chocolate meio amargo (para a cobertura)",
  ],
  Instruções: [
    "Em uma tigela, misture o coco ralado e o chocolate branco derretido até obter uma massa homogênea.",
    "Leve a mistura para a geladeira por cerca de 15 minutos para firmar um pouco.",
    "Após esse tempo, retire a mistura da geladeira e forme pequenas bolas do tamanho de uma colher de chá. Coloque as bolas em uma bandeja forrada com papel manteiga e leve à geladeira novamente por mais 15 minutos.",
    "Enquanto as bolas de coco estão na geladeira, prepare a cobertura de chocolate. Derreta o chocolate meio amargo em banho-maria ou no microondas em intervalos curtos de 30 segundos, mexendo bem após cada intervalo até que o chocolate esteja completamente derretido e liso.",
    "Retire as bolas de coco da geladeira e mergulhe cada uma no chocolate meio amargo derretido, cobrindo completamente. Use um garfo ou um palito para retirar as trufas do chocolate e coloque-as de volta na bandeja forrada com papel manteiga.",
    "Decore as trufas de coco com um pouco de coco ralado ou com uma pitada de sal marinho, se desejar.",
    "Leve as trufas de volta à geladeira por mais alguns minutos para que o chocolate da cobertura endureça completamente.",
    "Depois que as trufas estiverem firmes, estão prontas para servir ou para serem armazenadas em um recipiente hermético na geladeira.",
  ],
};

function RecipeTrufaCoco() {
  return (
    <>
      <div className="fundo">
        <a href="/Siteinicio">
          <div className="logo2">
            <img src="src/assets/logo.png" />
          </div>
        </a>
        <div className="recipe">
          <h1>{recipeTrufaCoco.titulo}</h1>
          <h2>Ingredientes</h2>
          <ul>
            {recipeTrufaCoco.ingredientes.map((ingredientes, index) => (
              <li key={index}>{ingredientes}</li>
            ))}
          </ul>
          <h2>Instruções</h2>
          <ol>
            {recipeTrufaCoco.Instruções.map((Instruções, index) => (
              <li key={index}>{Instruções}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default RecipeTrufaCoco;
