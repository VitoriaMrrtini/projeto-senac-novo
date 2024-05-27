import { useEffect, useState } from "react";
import "./siteTorta.css";
import axios from "axios";

interface Receita {
  id: number;
  titulo: string;
  ingredientes: string;
  instrucoes: string;
  img: string;
}

function RecipeTortaFrango() {
  const [receita, setReceita] = useState<Receita>()

  useEffect(() => {
    axios.get(`http://localhost:8080/doces?id=${localStorage.getItem("receitaID")}`).then((res) => {
      setReceita(res.data[0]);
    }).catch((err) => {
      alert(err)
    })
  }, [])
  
  const ingredientesArray = receita?.ingredientes.split(',');
  const instruçõesArray = receita?.instrucoes.split(',');

  return (
    <div className="fundo">
      <div className="body">
        <a href="/Siteinicio">
          <div className="logo2">
            <img src="src/assets/logo.png" alt="Logo" />
          </div>
        </a>
        <div className="recipe">
          <h1>{receita?.titulo}</h1>
          <h2>Ingredientes</h2>
          <ul>
            {ingredientesArray?.map((ingrediente, index) => (
              <li key={index}>{ingrediente.trim()}</li> // Use trim() para remover espaços em branco
            ))}
          </ul>
          <h2>Instruções</h2>
          <ul>
            {instruçõesArray?.map((ingrediente, index) => (
              <li key={index}>{ingrediente.trim()}</li> // Use trim() para remover espaços em branco
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipeTortaFrango;
