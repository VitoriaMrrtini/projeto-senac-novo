import React, { useState } from "react";
import "./Search.css";
import { SCA_API_URL } from "../utils/ApiConfig";
import axios from "axios";
import { Image } from "../interfaces/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [imgs, setImgs] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    // e.preventDefault();
    // setLoading(true);

    // try {
    // //   const response = await fetch(`${SCA_API_URL}/searchReceitas?search=${searchTerm}`);

    //     if (!response.ok) {
    //         throw new Error("Não foi possível obter os resultados");
    //     }
    //     const data = await response.json();
    //     setResults(data);
    //     setError(null);
    // } catch (error) {
    //     console.error("Erro ao buscar receitas:", error);
    //     setError("Erro ao buscar receitas. Por favor, tente novamente.");
    //     setResults([]);
    // } finally {
    //     setLoading(false);
    // }

    axios
      .get(`${SCA_API_URL}/receitas?search=${searchTerm}`)
      .then((res) => {
        // alert(res.data);
        setImgs(res.data);
        setError("");
      })
      .catch(() => {
        setError("Erro ao buscar receitas. Por favor, tente novamente.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const id = event.currentTarget.id;
    localStorage.setItem("receitaID", id);
  };

  const handleTitleClick = (id: string) => {
    localStorage.setItem("receitaID", id);
  };

  return (
    <div className="Search">
      <div className="search-header">
        <a href="#/SiteInicio" className="link">
          <FontAwesomeIcon icon={faArrowLeft} className="arrowIcon" />
        </a>
        <h1>Buscar Receitas</h1>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Buscar receitas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          Buscar
        </button>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p className="error-message">{error}</p>}

      {imgs.map((receita) => (
        <a href="#/siteReceita">
          <div key={receita.id} className="receita">
            <h2
              onClick={() => handleTitleClick(String(receita.id))}
              style={{ cursor: "pointer" }}
            >
              {receita.titulo}
            </h2>
            <img
              id={String(receita.id)}
              src={receita.img}
              alt={receita.titulo}
              className="receita-img"
              onClick={handleClick}
            />
          </div>
        </a>
      ))}
    </div>
  );
}

export default Search;
