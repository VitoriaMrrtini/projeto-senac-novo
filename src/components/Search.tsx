import React, { useState } from "react";
import "./Search.css";
import { SCA_API_URL } from "../utils/ApiConfig";
import axios from "axios";
import { Image } from "../interfaces/interfaces";
import BackButton from "./BackButton";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [imgs, setImgs] = useState<Image[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchDone, setSearchDone] = useState(false);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      setError("Por favor, insira um termo de pesquisa.");
      return;
    }

    setLoading(true);
    setError("");
    setSearchDone(false);

    axios
      .get(`${SCA_API_URL}/receitas?search=${searchTerm}`)
      .then((res) => {
        setImgs(res.data);
        setError("");
        setSearchDone(true);
      })
      .catch(() => {
        setError("Erro ao buscar receitas. Por favor, tente novamente.");
        setImgs([]);
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
        <BackButton></BackButton>
        <h1>Buscar Receitas</h1>
      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Buscar receitas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className={`SearchButton ${loading ? "disabled" : ""}`}
          disabled={loading}
        >
          Buscar
        </button>
      </form>

      {loading && <p>Carregando...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && searchDone && imgs.length === 0 && (
        <p>Nenhuma receita encontrada.</p>
      )}

      {imgs.map((receita) => (
        <a href="#/siteReceita" key={receita.id}>
          <div className="receita">
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
