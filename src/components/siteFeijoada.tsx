import "./siteFeijoada.css";
const recipeFeijoada = {
  titulo: "Feijoada",
  ingredientes: [
    "500g de feijão preto",
    "300g de carne de porco (como costela, orelha, pé, rabo)",
    "300g de linguiça calabresa",
    "200g de carne seca (já dessalgada)",
    "200g de bacon",
    "2 cebolas grandes picadas",
    "4 dentes de alho picados",
    "2 folhas de louro",
    "Pimenta-do-reino a gosto",
    "Sal a gosto",
    "Sal e pimenta a gosto",
    "Cheiro-verde (coentro e cebolinha) picado a gosto",
  ],
  Instruções: [
    "Deixe o feijão de molho em água durante a noite anterior (cerca de 8 horas). Escorra a água antes de cozinhar.",
    "Em uma panela de pressão, coloque o feijão, a carne de porco, a linguiça calabresa, a carne seca, o bacon, as cebolas picadas, o alho picado, as folhas de louro, a pimenta-do-reino e o sal.",
    "Tampe a panela de pressão e leve ao fogo alto. Quando começar a chiar, abaixe o fogo e cozinhe por cerca de 40 minutos.",
    "Após esse tempo, desligue o fogo e deixe a pressão sair naturalmente da panela.",
    "Abra a panela, retire as carnes e coloque-as em um prato. Desfie ou corte as carnes em pedaços menores, conforme sua preferência.",
    "Volte as carnes desfiadas para a panela com o feijão cozido. Misture bem e leve ao fogo novamente, deixando cozinhar por mais alguns minutos até engrossar o caldo.",
    "Corrija o sal se necessário e adicione mais pimenta-do-reino se desejar.",
    "Sirva a feijoada bem quente, acompanhada de arroz branco, couve refogada, farofa, laranja fatiada e rodelas de laranja.",
    "Polvilhe cheiro-verde picado por cima antes de servir.",
  ],
};

function RecipeFeijoada() {
  return (
    <>
      <div className="fundo">
        <a href="/Siteinicio">
          <div className="logo2">
            <img src="src/assets/logo.png" />
          </div>
        </a>
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

export default RecipeFeijoada;
