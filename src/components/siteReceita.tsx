import { useEffect, useState } from "react";
import "./siteReceita.css";
import axios from "axios";
import { SCA_API_URL } from "../utils/ApiConfig";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import VideoComponent from '../components/VideoComponent';

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

  // Extracting videoIdFromDatabase and ensuring it's a string or null
  const videoIdFromDatabase: string | null = receita?.video || null;

  const ingredientesArray = receita?.ingredientes.split(",");
  const instruçõesArray = receita?.instrucoes.split(",");

  return (
    <div className="fundo">
      <div className="body">
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
            {/* Render VideoComponent only if videoIdFromDatabase is not null */}
            {videoIdFromDatabase && <VideoComponent videoId={videoIdFromDatabase} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
