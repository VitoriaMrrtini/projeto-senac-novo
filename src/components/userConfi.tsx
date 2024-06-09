import "./userConfi.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function UserConfi() {
  return (
    <div className="App">
      <a href="#/SiteInicio" className="link">
        <FontAwesomeIcon icon={faArrowLeft} className="arrowIcon" />
      </a>
      <header>
        <h1>Configurações do Site</h1>
      </header>
      <nav className="PerfilConfi">
        <ul>
          <li><a href="#profile">Perfil</a></li>
          <li><a href="#account">Conta</a></li>
          <li><a href="#notifications">Notificações</a></li>
        </ul>
      </nav>
      <main>
        <section id="profile">
          <h2>Perfil</h2>
          <p>Configurações do seu perfil.</p>
        </section>
        <section id="account">
          <h2>Conta</h2>
          <p>Configurações da sua conta.</p>
        </section>
        <section id="notifications">
          <h2>Notificações</h2>
          <p>Configurações de notificações.</p>
        </section>
      </main>
    </div>
  );
}

export default UserConfi;
