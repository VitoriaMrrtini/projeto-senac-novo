import "./siteTorta.css";
const recipePamonha = {
  titulo: "Pamonha Doce",
  ingredientes: [
    "6 espigas de milho verde",
    "1 xícara de leite",
    "1 xícara de açúcar",
    "1/2 xícara de leite de coco",
    "1 colher de sopa de manteiga",
    "Uma pitada de sal",
    "Folhas de bananeira (para embrulhar) ou papel filme",
  ],
  Instruções: [
    "Descasque as espigas de milho e retire os grãos com uma faca afiada. Reserve metade dos grãos de milho e coloque a outra metade no liquidificador.",
    "No liquidificador, adicione metade dos grãos de milho, o leite, o açúcar, o leite de coco, a manteiga e o sal. Bata bem até obter uma mistura homogênea.",
    "Transfira a mistura do liquidificador para uma tigela grande e adicione os grãos de milho restantes. Misture bem.",
    "Corte as folhas de bananeira em quadrados grandes o suficiente para embrulhar as pamonhas.",
    "Coloque uma porção da massa de milho no centro de cada folha de bananeira. Dobre as laterais da folha sobre a massa e, em seguida, dobre as extremidades para formar um pacote bem fechado. Se preferir, você pode usar papel filme em vez de folhas de bananeira.",
    "Em uma panela grande o suficiente para acomodar as pamonhas, coloque água suficiente para cobri-las e leve ao fogo médio para ferver.",
    "Coloque as pamonhas na água fervente e cozinhe por cerca de 1 hora, ou até que estejam firmes e cozidas por dentro.",
    "Retire as pamonhas da água com uma escumadeira e deixe-as esfriar um pouco antes de servir.",
    "Você pode servir as pamonhas quentes ou em temperatura ambiente. Elas são deliciosas sozinhas ou acompanhadas de queijo fresco.",
  ],
};

function RecipePamonha() {
  return (
    <>
      <div className="fundo">
        <a href="/Siteinicio">
          <div className="logo2">
            <img src="src/assets/logo.png" />
          </div>
        </a>
        <div className="recipe">
          <h1>{recipePamonha.titulo}</h1>
          <h2>Ingredientes</h2>
          <ul>
            {recipePamonha.ingredientes.map((ingredientes, index) => (
              <li key={index}>{ingredientes}</li>
            ))}
          </ul>
          <h2>Instruções</h2>
          <ol>
            {recipePamonha.Instruções.map((Instruções, index) => (
              <li key={index}>{Instruções}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default RecipePamonha;
