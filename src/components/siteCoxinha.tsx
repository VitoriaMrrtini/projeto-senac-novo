import "./siteTorta.css";
const recipeCoxinha = {
  titulo: "Coxinha de Frango",
  ingredientes: [
    "2 xícaras de caldo de frango (pode ser feito com água e cubos de caldo de galinha)",
    "2 colheres de sopa de manteiga",
    "2 xícaras de farinha de trigo",
    "Sal a gosto",
    "2 xícaras de peito de frango cozido e desfiado",
    "1 cebola pequena picada",
    "2 dentes de alho picados",
    "1 colher de sopa de óleo vegetal",
    "Sal e pimenta a gosto",
    "Salsinha picada a gosto (opcional)",
    "1/2 xícara de requeijão cremoso (opcional)",
    "Farinha de rosca",
    "2 ovos batidos",
    "Óleo para fritar",
  ],
  Instruções: [
    "Em uma panela grande, aqueça o caldo de frango e a manteiga até ferver. Adicione uma pitada de sal.",
    "Reduza o fogo para médio e adicione a farinha de trigo de uma só vez, mexendo rapidamente com uma colher de pau até que a massa se solte do fundo da panela e forme uma bola. Continue cozinhando por mais 1-2 minutos para secar um pouco a massa.",
    "Transfira a massa para uma superfície limpa e enfarinhada e deixe esfriar um pouco.",
    "Enquanto a massa esfria, prepare o recheio. Em uma frigideira, aqueça o óleo e refogue a cebola e o alho até ficarem macios e levemente dourados.",
    "Adicione o frango desfiado à frigideira e tempere com sal e pimenta a gosto. Se desejar, adicione salsinha picada para dar mais sabor.",
    "Quando o frango estiver bem misturado e aquecido, desligue o fogo e deixe esfriar um pouco. Se quiser, adicione o requeijão cremoso ao frango para um recheio mais cremoso.",
    "Pegue porções da massa de coxinha, abra na palma da mão, coloque um pouco do recheio no centro e modele em formato de coxinha.",
    "Passe as coxinhas na farinha de rosca, depois nos ovos batidos e novamente na farinha de rosca para empanar.",
    "Aqueça o óleo em uma panela funda até atingir uma temperatura de cerca de 170-180°C. Frite as coxinhas em lotes, virando ocasionalmente, até que estejam douradas por igual.",
    "Retire as coxinhas com uma escumadeira e coloque sobre papel toalha para escorrer o excesso de óleo.",
    "Sirva as coxinhas quentes e aproveite!",
  ],
};

function RecipeCoxinha() {
  return (
    <>
      <div className="fundo">
        <a href="/Siteinicio">
          <div className="logo2">
            <img src="src/assets/logo.png" />
          </div>
        </a>
        <div className="recipe">
          <h1>{recipeCoxinha.titulo}</h1>
          <h2>Ingredientes</h2>
          <ul>
            {recipeCoxinha.ingredientes.map((ingredientes, index) => (
              <li key={index}>{ingredientes}</li>
            ))}
          </ul>
          <h2>Instruções</h2>
          <ol>
            {recipeCoxinha.Instruções.map((Instruções, index) => (
              <li key={index}>{Instruções}</li>
            ))}
          </ol>
        </div>
      </div>
      <footer className="footer">
        <div className="container-footer">
          <div className="row">
            <div className="col-md-4">
              <p>
                Explore uma variedade de receitas deliciosas e inspire-se na
                cozinha com o nosso site. Descubra novas maneiras de preparar
                pratos incríveis e compartilhe suas próprias criações
                culinárias.
              </p>
            </div>
            <div className="col-md-4">
              <h6>Conecte-se Conosco</h6>
              <ul className="list-inline">
                <a href="https://www.facebook.com/campaign/landing.php?&campaign_id=1661784632&extra_1=s|c|513440386732|e|facebook|&placement=&creative=513440386732&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1661784632%26adgroupid%3D63686352403%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D9102202%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAjwupGyBhBBEiwA0UcqaK5HXv9ux4Cfzg8G8HZXM-_dD4N_tY7HpyEuNd2lhNj8JQcWUDny9xoC6C4QAvD_BwE">
                  <img src="src/assets/face.png"></img>
                </a>
                <a href="https://www.instagram.com/">
                  <img src="src/assets/insta.png"></img>
                </a>
                <a href="https://br.pinterest.com/">
                  <img src="src/assets/pint.png"></img>
                </a>
                <a href="https://www.whatsapp.com/?lang=pt_BR">
                  <img src="src/assets/whats.png"></img>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          &copy; 2024 Panela criativa. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}

export default RecipeCoxinha;
