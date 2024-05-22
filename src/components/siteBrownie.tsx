import "./siteBrownie.css";
const recipeBrownie = {
  titulo: "Brownie",
  ingredientes: [
    "1 xícara de farinha",
    "2 xícaras de açúcar",
    "3/4 xícara de cacau em pó",
    "4 ovos grandes",
    "1 xícara (derretida) de manteiga",
    "1 colher de chá de fermento em pó",
    "1/2 colher de chá de sal",
    "1 colher de chá de extrato de baunilha",
    "1 xícara (picadas, opcional) nozes",
    "170g de chocolate amargo",
    "170g de chocolate ao leite",
    "1/2 xícara de creme de leite",
  ],
  Instruções: [
    "Instruções para fazer brownie:",
    "Pré-aqueça o forno a 180°C e unte uma assadeira.",
    "Em uma tigela grande, misture a farinha, o cacau em pó, o fermento em pó e o sal.",
    "Em outra tigela, bata os ovos e adicione o açúcar, a manteiga derretida e o extrato de baunilha. Misture bem.",
    "Combine os ingredientes secos com os ingredientes molhados e mexa até ficar homogêneo.",
    "Adicione os chocolates picados e as nozes picadas, se estiver usando, e misture.",
    "Despeje a massa na assadeira preparada e espalhe uniformemente.",
    "Asse no forno pré-aquecido por cerca de 25-30 minutos, ou até que um palito inserido no centro saia com algumas migalhas úmidas.",
    "Deixe esfriar completamente antes de cortar em quadrados.",
  ],
};

function RecipeBrownie() {
  return (
    <>
      <div className="fundo">
        <a href="/Siteinicio">
          <div className="logo2">
            <img src="src/assets/logo.png" />
          </div>
        </a>
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

export default RecipeBrownie;
