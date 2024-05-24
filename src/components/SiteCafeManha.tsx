import { useEffect, useState } from "react";
import "./SiteInicio.css";
import axios from "axios";

interface image {
  img: string;
}

const SiteDoce = () => {
  const [imgs, setImgs] = useState<image[]>([]);
  const [menuVisivel, setMenuVisivel] = useState(false);

  const toggleMenu = () => {
    setMenuVisivel(!menuVisivel);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/cafeManha")
      .then((res) => {
        if (res.data.length > 0) {
          setImgs(res.data);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar dados dos doces:", error);
      });
  }, []);

  return (
    <>
      <div className="logo">
        <div className="menu">
          <a className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </a>
          <div
            className={menuVisivel ? "menu-content" : "menu-content hide"}
            id="menuContent"
          >
            <a href="/userConfi">Config</a>
            <a href="/userProfile">Perfil</a>
            <a href="/">Sair</a>
          </div>
        </div>
        <a href="/SiteInicio">
          <img src="src/assets/logo.png" alt="logo" />
        </a>
        <div className="caixa search-box">
          <form action="/" method="GET">
            <input type="text" name="search" className="search-box__input" />
            <button type="submit" className="search-box__button">
              Procurar
            </button>
          </form>
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
                <li>
                  <a href="https://www.facebook.com">
                    <img src="src/assets/face.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <img src="src/assets/insta.png" alt="Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://br.pinterest.com/">
                    <img src="src/assets/pint.png" alt="Pinterest" />
                  </a>
                </li>
                <li>
                  <a href="https://www.whatsapp.com">
                    <img src="src/assets/whats.png" alt="WhatsApp" />
                  </a>
                </li>
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
};

export default SiteDoce;
