import { useEffect, useState } from "react";
import "./userProfile.css";

function UserProfile({ user }) {
  // Não é necessário usar useLocation aqui
  
  if (!user) {
    return <div>Usuário não encontrado</div>;
  }

  return (
    <div className="profileUser">
      <h2 className="tituloPerfil">Perfil do Usuário</h2>
      <img src="src/assets/fotofemea.jpg" alt="Foto de perfil"></img>
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
  );
}
export default UserProfile;