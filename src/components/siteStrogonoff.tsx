import "./siteStrogonoff.css";
const recipeStrogonoff = {
  titulo: "Strogonoff",
  ingredientes: [
    "500g da carne de sua preferência cortada em tiras finas",
    "1 cebola grande picada",
    "2 dentes de alho picados",
    "1 colher de sopa de manteiga ou óleo",
    "200g de cogumelos frescos fatiados (opcional)",
    "1 lata de creme de leite",
    "1 colher de sopa de ketchup",
    "1 colher de sopa de mostarda",
    "1/2 xícara de molho de tomate",
    "Sal e pimenta-do-reino a gosto",
    "Salsinha picada para decorar (opcional)",
    "Arroz branco ou batata palha para acompanhar,",
  ],
  Instruções: [
    "Em uma panela grande, derreta a manteiga ou aqueça o óleo em fogo médio. Adicione a cebola picada e refogue até que fique transparente, cerca de 3-4 minutos.",
    "Acrescente o alho picado e refogue por mais 1 minuto, até perfumar.",
    "Adicione a carne cortada em tiras à panela e tempere com sal e pimenta-do-reino a gosto. Refogue a carne até que esteja dourada por fora, mexendo ocasionalmente.",
    "Se estiver usando cogumelos frescos, adicione-os à panela e refogue junto com a carne por mais alguns minutos, até que estejam macios.",
    "Quando a carne estiver bem dourada, adicione o ketchup, a mostarda e o molho de tomate à panela. Misture bem para incorporar os ingredientes.",
    "Reduza o fogo para médio-baixo e deixe cozinhar por mais 5 minutos, mexendo ocasionalmente.",
    "Por último, adicione o creme de leite à panela e misture bem. Deixe cozinhar por mais alguns minutos, apenas para aquecer o creme de leite.",
    "Prove o molho e ajuste o tempero, se necessário, adicionando mais sal e pimenta conforme seu gosto.",
    "Sirva o Strogonoff quente, acompanhado de arroz branco ou batata palha.",
    "Se desejar, decore com salsinha picada antes de servir.",
  ],
};

function RecipeStrogonoff() {
  return (
    <>
      <div className="fundo">
        <a href="/Siteinicio">
          <div className="logo2">
            <img src="src/assets/logo.png" />
          </div>
        </a>
        <div className="recipe">
          <h1>{recipeStrogonoff.titulo}</h1>
          <h2>Ingredientes</h2>
          <ul>
            {recipeStrogonoff.ingredientes.map((ingredientes, index) => (
              <li key={index}>{ingredientes}</li>
            ))}
          </ul>
          <h2>Instruções</h2>
          <ol>
            {recipeStrogonoff.Instruções.map((Instruções, index) => (
              <li key={index}>{Instruções}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default RecipeStrogonoff;
