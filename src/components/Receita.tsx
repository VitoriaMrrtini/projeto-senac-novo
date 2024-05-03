import { useState, useEffect } from 'react';
import axios from 'axios';
import './Receita.css';

const RecipePage = () => {
  const [recipe, setRecipe] = useState({
    titulo: '',
    ingredientes: [],
    instrucoes: []
  });

  const [receitaId, setReceitaId] = useState(-1);

  useEffect(() => {
    axios.get(`http://localhost:8080/receitas?id=${receitaId}`)
      .then((res) => {
        const { titulo, ingredientes, instrucoes } = res.data[0]; // Assuming you're getting a single recipe
        setRecipe({ titulo, ingredientes, instrucoes });
      })
      .catch((err) => {
        console.error('Error fetching recipe:', err);
      });
  }, []);

  return (
    <div>
      <h1>{recipe.titulo}</h1>
      <h2>Ingredientes:</h2>
      <ul>
        {recipe.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h2>Modo de Preparo:</h2>
      <ol>
        {recipe.instrucoes.map((instrucao, index) => (
          <li key={index}>{instrucao}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipePage;
