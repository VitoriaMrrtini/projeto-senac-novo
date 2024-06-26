import "./userProfile.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { SCA_API_URL } from "../utils/ApiConfig";
import perfilPhoto from "../assets/fotoUsuario.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";

interface User {
  nome: string;
  email: string;
  idade: string;
  genero: string;
}

function UserProfile() {
  useEffect(() => {
    InserirClass();
  }, []);

  function InserirClass() {
    const html = document.documentElement;
    html.classList.add("classeLEgalzona");
  }

  const [user, setUser] = useState<User>();

  useEffect(() => {
    axios
      .get(`${SCA_API_URL}/users?id=${localStorage.getItem("userID")}`)
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((err) => {
        console.error("Erro ao buscar dados do usuário:", err);
      });
  }, []);

  if (!user) {
    return (
      <div className="Carregamento">
        <FontAwesomeIcon icon={faSpinner} spinPulse />
      </div>
    );
  }

  return (
    <div className="profileUserContainer">
      <div className="profileUser">
        <button onClick={() => window.history.back()} className="backButton">
          <FontAwesomeIcon icon={faArrowLeft} className="arrowIcon" />
        </button>
        <h2 className="tituloPerfil">Perfil do Usuário</h2>
        <img src={perfilPhoto} alt="Foto de perfil"></img>
        <div className="nameUser">
          <p>Nome: {user.nome}</p>
        </div>
        <div className="descriptionUser">
          <h1>Dados</h1>
          <p>Email: {user.email}</p>
          <p>Idade: {user.idade}</p>
          <p>Gênero: {user.genero}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
