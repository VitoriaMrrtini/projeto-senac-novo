import "./userProfile.css";

const UserProfile = () => {
  return (
    <div className="profileUser">
      <h2 className="tituloPerfil">Perfil do Usuário</h2>
      <img src="src/assets/fotofemea.jpg"></img>
      <div className="nameUser">
        <h3>Lethycia</h3>
      </div>
      <div className="descriptionUser">
        <h3>Dados</h3>
        <p>16 anos</p>
        <p>Feminino</p>
        <p>Campo Mourão</p>
      </div>
      <div className="dadoUser">
        <h3>Dados</h3>
        <ul>
          <li>E-mail</li>
          <li>Telefone</li>
          <li>Redes Sociais</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
