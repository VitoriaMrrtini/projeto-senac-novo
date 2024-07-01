/*import { useEffect, useState } from "react";
import "./Favoritos.css";
import { Image } from "../interfaces/interfaces";
import BackButton from "./BackButton";
import axios from "axios";
import { SCA_API_URL } from "../utils/ApiConfig";

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState<Image[]>([]);
  const userId = 1; // Obtenha isso do estado global ou do contexto de autenticação

  useEffect(() => {
    // Carregar favoritos do servidor
    axios
      .get(`${SCA_API_URL}/users/${userId}/favoritos`)
      .then((res) => {
        setFavoritos(res.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar favoritos:", error);
      });
  }, [userId]);

  return (
    <div className="favoritos-container">
      <h2>Favoritos</h2>
      <div className="receitas-container">
        {favoritos.map((img) => (
          <div className="receita" key={img.id}>
            <a href="#/siteReceita">
              <img
                id={String(img.id)}
                src={img.img}
                alt={img.titulo}
                onClick={() => localStorage.setItem("receitaID", String(img.id))}
              />
              <div className="tituloReceita">
                <p>{img.titulo}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <BackButton />
    </div>
  );
};

export default Favoritos;
*/