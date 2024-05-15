import "./SiteCafeManha.css";

const SiteCafeManha = () => {
  return (
    <>
      <div className="logo">
        <div className="menu">
          <ul className="menu01">
            <a>
              <a className="menu-icon">&#9776;</a>
              <div className="menu01-menu">
                <a href="/userConfi">Config</a>
                <a href="/userProfile">Perfil</a>
                <a href="/">Sair</a>
              </div>
            </a>
          </ul>
        </div>
        <img src="src/assets/logo.png" alt="logo" />
        <div className="caixa">
          <input type="text" />
          <button>Procurar</button>
        </div>
      </div>
      <nav className="cabecarios">
        <ul className="cabecarios-list">
          <li className="cabecario">
            <a href="#" className="animação">
              Café da manhã
            </a>
          </li>
          <li className="cabecario">
            <a href="#" className="animação">
              Almoço
            </a>
          </li>
          <li className="cabecario">
            <a href="#" className="animação">
              Café da tarde
            </a>
          </li>
          <li className="cabecario">
            <a href="#" className="animação">
              Lanche da tarde
            </a>
          </li>
          <li className="cabecario">
            <a href="#" className="animação">
              Jantar
            </a>
          </li>
          <li className="cabecario">
            <a href="#" className="animação">
              Doces
            </a>
          </li>
        </ul>
      </nav>

      <main className="receitas-container">
        <div className="receita">
          <a href="/siteBolo">
            <img src="src/assets/bolo-de-chocolate.png" alt="Bolo de Cenoura" />
          </a>
        </div>
        <div className="receita">
          <a href="/siteQueijo">
            <img src="src/assets/pao-de-queijo.png" alt="Pão de Queijo" />
          </a>
        </div>
        <div className="receita">
          <a href="/siteTorta">
            <img src="src/assets/torta-de-frango.png" alt="Torta de Frango" />
          </a>
        </div>
      </main>

      <footer className="footer">
        <div className="container-footer">
          <div className="row">
            <div className="col-md-4">
              <p>
                Explore uma variedade de receitas deliciosas e inspire-se na
                cozinha com o nosso site. Descubra novas maneiras de preparar
                pratos incríveis e compartilhe suas próprias criações
                culinárias.
              </p>
            </div>
            <div className="col-md-4">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Receitas</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h6>Conecte-se Conosco</h6>
              <ul className="list-inline">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Pinterest</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          &copy; 2024 Panela criativa. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
};

export default SiteCafeManha;
