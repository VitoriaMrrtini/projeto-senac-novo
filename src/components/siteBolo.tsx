import "./siteBolo.css"
const recipeBoloChoco = {
    titulo: 'Bolo de Chocolate',
  ingredientes: [
    '2 xícaras de farinha de trigo',
    '1 xícara de cacau em pó',
    '1 e 1/2 xícaras de açúcar granulado',
    '2 ovos grandes',
    '1 xícara de leite',
    '1/2 xícara de óleo vegetal',
    '2 colheres de chá de fermento em pó',
    '1 colher de chá de bicarbonato de sódio',
    '1 colher de chá de extrato de baunilha',
    '1/2 colher de chá de sal',
    '1 xícara de água quente (opcional, para uma textura mais úmida)',
  ],
  Instruções: [
    'Pré-aqueça o forno a 180°C e unte uma forma de bolo com manteiga e farinha, ou forre com papel manteiga.',
    'Em uma tigela grande, peneire a farinha de trigo, o cacau em pó, o bicarbonato de sódio, o fermento em pó e o sal. Misture bem e reserve.',
    'Em outra tigela grande, usando uma batedeira elétrica ou um batedor manual, bata a manteiga amolecida, o açúcar granulado e o açúcar mascavo até obter uma mistura cremosa e homogênea.',
    'Adicione os ovos, um de cada vez, à mistura de manteiga e açúcares, batendo bem após cada adição. Em seguida, adicione o extrato de baunilha e misture até incorporar.',
    'Adicione os ingredientes secos à mistura de manteiga e ovos em três partes alternando com o leite, começando e terminando com os ingredientes secos. Misture até ficar homogêneo, mas não bata demais.',
    'Acrescente as gotas de chocolate ou o chocolate meio amargo picado à massa e misture com uma espátula até estar uniformemente distribuído.',
    'Despeje a massa na forma preparada e espalhe-a uniformemente. Leve ao forno pré-aquecido e asse por cerca de 30-35 minutos, ou até que um palito inserido no centro saia limpo.',
    'Retire o bolo do forno e deixe esfriar na forma por alguns minutos. Em seguida, transfira para uma grade de resfriamento para esfriar completamente antes de cortar e servir.',
    'Você pode decorar o bolo com glacê de chocolate, chantilly ou simplesmente polvilhar açúcar de confeiteiro por cima antes de servir.',
  ],
};

function RecipeBoloChoco() {
  return (
    <>
    <div className="fundo">
    <div className="logo2"><img src="src/assets/logo.png"/></div>
    <div className="recipe">
      <h1>{recipeBoloChoco.titulo}</h1>
      <h2>Ingredientes</h2>
      <ul>
        {recipeBoloChoco.ingredientes.map((ingredientes, index) => (
          <li key={index}>{ingredientes}</li>
        ))}
      </ul>
      <h2>Instruções</h2>
      <ol>
        {recipeBoloChoco.Instruções.map((Instruções, index) => (
          <li key={index}>{Instruções}</li>
        ))}
      </ol>
    </div>
    <div className="tituloBolo">
    </div>
    </div>
    <footer className="footer">
                <div className="container-footer">
                    <div className="row">
                        <div className="col-md-4">
                            <p>Explore uma variedade de receitas deliciosas e inspire-se na cozinha com o nosso site. Descubra novas maneiras de preparar pratos incríveis e compartilhe suas próprias criações culinárias.</p>
                        </div>
                        <div className="col-md-4">
                            <h6>Conecte-se Conosco</h6>
                            <ul className="list-inline">
                                <a href="https://www.facebook.com/campaign/landing.php?&campaign_id=1661784632&extra_1=s|c|513440386732|e|facebook|&placement=&creative=513440386732&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D1661784632%26adgroupid%3D63686352403%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D9102202%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=CjwKCAjwupGyBhBBEiwA0UcqaK5HXv9ux4Cfzg8G8HZXM-_dD4N_tY7HpyEuNd2lhNj8JQcWUDny9xoC6C4QAvD_BwE"><img src='src/assets/face.png'></img></a>
                                <a href="https://www.instagram.com/"><img src='src/assets/insta.png'></img></a>
                                <a href="https://br.pinterest.com/"><img src='src/assets/pint.png'></img></a>
                                <a href="https://www.whatsapp.com/?lang=pt_BR"><img src='src/assets/whats.png'></img></a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    &copy; 2024 Panela criativa. Todos os direitos reservados.
                </div>
            </footer>
    </>
  );
}

export default RecipeBoloChoco;
