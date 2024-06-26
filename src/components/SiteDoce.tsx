import { useEffect, useState } from "react";
import "./SiteInicio.css";
import axios from "axios";
import { Image } from "../interfaces/interfaces";
import { SCA_API_URL } from "../utils/ApiConfig";
import logo from "../assets/logo.png";
import whats from "../assets/whats.png";
import pin from "../assets/pint.png";
import insta from "../assets/insta.png";
import face from "../assets/face.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

const SiteDoce = () => {
  const [imgs, setImgs] = useState<Image[]>([]);
  const [menuAberto, setMenuAberto] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  useEffect(() => {
    axios
      .get(`${SCA_API_URL}/doces`)
      .then((res) => {
        if (res.data.length > 0) {
          setImgs(res.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados dos doces:", error);
        setLoading(false);
      });
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const id = event.currentTarget.id;
    // alert(`ID: ${id}`);
    localStorage.setItem("receitaID", id);
  };

  if (loading) {
    return (
      <div className="Carregamento">
        <FontAwesomeIcon icon={faSpinner} spinPulse />
      </div>
    );
  }

  return (
    <>
      <div className="logo">
        <div className="menu">
          <a className="menu-icon" onClick={toggleMenu}>
            &#9776;
          </a>
          {menuAberto && (
            <div className="content-menu">
              <a href="#/userProfile">Perfil</a>
              <a href="#/">Sair</a>
            </div>
          )}
        </div>
        <a href="#/SiteInicio">
          <img src={logo} alt="logo" />
        </a>
        <div className="caixa search-box">
          <a href="#/searchReceitas">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
        </div>
      </div>
      <nav className="cabecarios">
        <ul className="cabecarios-list">
          <li className="cabecario">
            <a href="#/SiteCafeManha" className="animação">
              Café da manhã
            </a>
          </li>
          <li className="cabecario">
            <a href="#/SiteAlmoco" className="animação">
              Almoço
            </a>
          </li>
          <li className="cabecario">
            <a href="#/SiteCafeTarde" className="animação">
              Café da tarde
            </a>
          </li>
          <li className="cabecario">
            <a href="#/SiteLanche" className="animação">
              Lanche da tarde
            </a>
          </li>
          <li className="cabecario">
            <a href="#/SiteJantar" className="animação">
              Jantar
            </a>
          </li>
          <li className="cabecario">
            <a href="#/SiteDoce" className="animação">
              Doces
            </a>
          </li>
        </ul>
      </nav>
      <div className="obs">
        <h5>Doces</h5>
      </div>

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
            <a href="#/siteReceita">
              <img
                id={String(img.id)}
                src={img.img}
                alt="Receita"
                onClick={handleClick}
              />
              <div className="tituloReceita">
                <p>{img.titulo}</p>
              </div>
            </a>
          </div>
        ))}
      </main>
      <footer className="footer">
        <div className="container-footer">
          <div className="row justify-content-center">
            <div className="sep">
              <div className="col-md-4">
                <p>
                  Explore uma variedade de receitas deliciosas e inspire-se na
                  cozinha com o nosso site. Descubra novas maneiras de preparar
                  pratos incríveis e compartilhe suas próprias criações
                  culinárias.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <h6>Conecte-se Conosco</h6>
            </div>
            <ul className="list-inline">
              <li>
                <a href="https://www.facebook.com" target="_blank">
                  <img src={face} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src={insta} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com/" target="_blank">
                  <img src={whats} alt="WhatsApp" />
                </a>
              </li>
              <li>
                <a href="https://www.pinterest.com/" target="_blank">
                  <img src={pin} alt="Pinterest" />
                </a>
              </li>
            </ul>
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
