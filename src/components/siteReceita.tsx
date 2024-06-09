import { useEffect, useState } from "react";
import "./siteReceita.css";
import axios from "axios";
import { SCA_API_URL } from "../utils/ApiConfig";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import VideoComponent from '../components/VideoComponent';
import whats from '../assets/whats.png';
import pin from '../assets/pint.png';;
import insta from '../assets/insta.png';
import face from '../assets/face.png'

interface Receita {
  id: number;
  titulo: string;
  ingredientes: string;
  instrucoes: string;
  img: string;
  video?: string;
}

function Recipe() {
  const [receita, setReceita] = useState<Receita>();

  useEffect(() => {
    axios
      .get(`${SCA_API_URL}/doces?id=${localStorage.getItem("receitaID")}`)
      .then((res) => {
        setReceita(res.data[0]);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const videoIdFromDatabase: string | null = receita?.video || null;

  const ingredientesArray = receita?.ingredientes.split(",");
  const instruçõesArray = receita?.instrucoes.split(",");

  return (
    <div className="fundo">
      <div className="bodyReceita">
        <a href="#/Siteinicio">
          <div className="logoBackground">
            <div className="logoBackground">
              <div className="logoContainer">
                <FontAwesomeIcon icon={faArrowLeft} className="arrowIcon" />
                <img src={logo} alt="Logo" className="logoReceita" />
              </div>
            </div>
          </div>
        </a>
        <div className="recipe">
          <h1>{receita?.titulo}</h1>
          <h2>Ingredientes</h2>
          <ul>
            {ingredientesArray?.map((ingrediente, index) => (
              <li key={index}>{ingrediente.trim()}</li>
            ))}
          </ul>
          <h2>Instruções</h2>
          <ul>
            {instruçõesArray?.map((instrucao, index) => (
              <li key={index}>{instrucao.trim()}</li>
            ))}
          </ul>
          <div className="videoReceita">
            {videoIdFromDatabase && <VideoComponent videoId={videoIdFromDatabase} />}
          </div>
        </div>
      </div>
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
                <a href="https://www.facebook.com">
                  <img src={face} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <img src={insta} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://br.pinterest.com/">
                  <img src={pin} alt="Pinterest" />
                </a>
              </li>
              <li>
                <a href="https://www.whatsapp.com">
                  <img src={whats} alt="WhatsApp" />
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
    </div>
  );
}

export default Recipe;
