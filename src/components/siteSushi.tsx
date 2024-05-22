import "./siteSushi.css";
const recipeSushi = {
  titulo: "Sushi",
  ingredientes: [
    "Arroz de sushi",
    "Nori (folhas de alga)",
    "Em uma panela pequena, misture vinagre de arroz, açúcar e sal.",
    "Peixe",
    "Legumes e Vegetais",
    "Frutos do Mar",
    "Molhos e Condimentos",
  ],
  Instruções: [
    "Lave o arroz de sushi em água fria até que a água fique clara.",
    "Cozinhe o arroz de acordo com as instruções da embalagem.",
    "Em uma panela pequena, misture vinagre de arroz, açúcar e sal.",
    "Misture essa mistura no arroz cozido enquanto ainda está quente.",
    "Deixe o arroz esfriar à temperatura ambiente antes de usar.",
    "Escolha peixes frescos e de alta qualidade, como salmão, atum ou peixe branco.",
    "Corte o peixe em fatias finas usando uma faca afiada.",
    "Mantenha o peixe refrigerado até a hora de usá-lo.",
    "Lave e corte legumes frescos, como pepino, abacate e cenoura, em tiras finas.",
    "Você também pode usar outros vegetais, como pimentão ou rabanete.",
    "Adicione os ingredientes desejados (peixe, legumes, frutos do mar) no centro do arroz.",
    "Enrole firmemente a esteira de sushi, pressionando suavemente para moldar o rolo.",
  ],
};

function RecipeSushi() {
  return (
    <>
      <div className="fundo">
        <a href="/Siteinicio">
          <div className="logo2">
            <img src="src/assets/logo.png" />
          </div>
        </a>
        <div className="recipe">
          <h1>{recipeSushi.titulo}</h1>
          <h2>Ingredientes</h2>
          <ul>
            {recipeSushi.ingredientes.map((ingredientes, index) => (
              <li key={index}>{ingredientes}</li>
            ))}
          </ul>
          <h2>Instruções</h2>
          <ol>
            {recipeSushi.Instruções.map((Instruções, index) => (
              <li key={index}>{Instruções}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default RecipeSushi;
