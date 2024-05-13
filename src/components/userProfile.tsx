import "./userProfile.css";

const UserProfile = () => {
  return (
    <div className="profileUser">
      <h2 className="tituloPerfil">Perfil do Usuário</h2>
      <img src="src/assets/1_g09N-jl7JtVjVZGcd-vL2g.jpg"></img>
      <div className="nameUser">
        <h3>João</h3>
      </div>
      <div className="descriptionUser">
        <h3>Dados</h3>
        <p>28 anos</p>
        <p>Masculino</p>
        <p>Cidade Rosa, Brasil</p>
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
