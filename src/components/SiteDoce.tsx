import { useEffect, useState } from "react";
import "./SiteDoce.css";
import axios from "axios";

interface image{
  img: string;
}

const SiteDoce = () => {
  
  const [imgs, setImgs] = useState<image[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/doces")
    .then((res) => {
      if (res.data.length > 0){
        setImgs(res.data);
      }
    }).catch((error) => {
      console.error("Erro ao buscar dados dos doces:", error);
    });
  }, []);

  return (
    <>
      <div className="logo">
        <div className="menu">
          <ul className="menu01">
            <a>
              <a className="menu-icon">&#9776;</a>
              <div className="menu01-menu">
                <a href="/userConfi">Config</a>
                <a href="/userProfile">Perfil</a>
                <a href="/">Sair</a>
              </div>
            </a>
          </ul>
        </div>
        <a href="/SiteInicio"><img src="src/assets/logo.png" alt="logo" /></a>
        <div className="caixa">
          <input type="text" />
          <button>Procurar</button>
        </div>
      </div>
      <nav className="cabecarios">
        <ul className="cabecarios-list">
          <li className="cabecario">
            <a href="/SiteCafeManha" className="animação">
              Café da manhã
            </a>
          </li>
          <li className="cabecario">
            <a href="/SiteAlmoco" className="animação">
              Almoço
            </a>
          </li>
          <li className="cabecario">
            <a href="/SiteCafeTarde" className="animação">
              Café da tarde
            </a>
          </li>
          <li className="cabecario">
            <a href="/SiteLanche" className="animação">
              Lanche da tarde
            </a>
          </li>
          <li className="cabecario">
            <a href="/SiteJantar" className="animação">
              Jantar
            </a>
          </li>
          <li className="cabecario">
            <a href="/SiteDoce" className="animação">
              Doces
            </a>
          </li>
        </ul>
      </nav>

      <main className="receitas-container">
        {/* <div className="receita">
          <a href="/siteBolo">
            <img src="src/assets/bolo-de-chocolate.png" alt="Bolo de Cenoura" />
          </a>
        </div>
        <div className="receita">
          <a href="/siteQueijo">
            <img src="src/assets/pao-de-queijo.png" alt="Pão de Queijo" />
          </a>
        </div>
        <div className="receita">
          <a href="/siteTorta">
            <img src="src/assets/torta-de-frango.png" alt="Torta de Frango" />
          </a>
        </div>

         <div className="receita">
          <a href="/siteTorta">
            <img src="https://static.itdg.com.br/images/360-240/2887f8e671abd581779918adeac1db98/shutterstock-2151535997.jpg" alt="Torta de Frango" />
          </a>
        </div> 

         <div className="receita">
          <a href="/siteTorta">
            <img alt="Torta de Frango" />
          </a>
        </div> */}

        {imgs.map((img) => (
          <div className="receita">
            <a href="/siteTorta">
              <img src={img.img} alt="Torta de Frango" />
            </a>
          </div>
        ))}
      </main>        

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
};

export default SiteDoce;
