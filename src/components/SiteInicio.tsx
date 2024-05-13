import './SiteInicio.css';

const SiteInicio = () => {

    return (
        <> 
        <div className="logo">
                <div className="menu">
                    <ul className="menu01">
                        <a><a className="menu-icon">&#9776;</a>
                            <div className="menu01-menu">
                                <a href="/userConfi">Config</a>
                                <a href="/userProfile">Perfil</a>
                                <a href="/">Sair</a>
                        </div>
                    </a>      
                </ul>
            </div> 
                <img src="src/assets/logo.png" alt="logo" />
            <div className='caixa'>
                <input type="text" />
                <button>Procurar</button>
            </div>
        </div>
        <nav className='cabecarios'>
            <div className='cabecarios'>

                    <div className='cabecario1'>
                        <ul className="cafea">
                            <a className="animação">Café da manhã</a>
                        </ul>
                     </div>

                    <div className='cabecario3'>
                        <ul className="almoco">
                            <a><a className="animação">Almoço</a>
                            </a>
                        </ul>
                    </div>

                     <div className='cabecario4'>
                     <ul className="cafe-da-tarde">
                            <a><a className="animação">Café da tarde</a>
                            </a>
                        </ul>
                     </div>

                     <div className='cabecario5'>
                     <ul className="lanche-da-tarde">
                        <a><a className="animação">Lanche da tarde</a>
                        </a>
                     </ul>                   
                     </div>

                    <div className='cabecario6'>
                    <ul className="jantar">
                        <a><a className="animação">Jantar</a>
                        </a>
                    </ul>                     
                    </div>

                    <div className='cabecario7'>
                    <ul className="doces">
                        <a><a className="animação">Doces</a>
                        </a>
                    </ul>
                    </div>
            </div>
        </nav>  

        <div className='banner'>
            <img src = "src/assets/banner.png" ></img>
        </div>  
            <main>

                <section className="receitas">
                    <div className="receita1">
                        <a href="/siteBolo">
                        <img src="src/assets/bolo-de-chocolate.png" alt="Bolo de Cenoura"/></a>
                    
                    </div>
                    <div className="receita2">
                    <a href="/siteQueijo">
                        <img src="src/assets/pao-de-queijo.png" alt="Pão de Queijo"/></a>
                    </div>
                    <div className="receita3">
                    <a href="/siteTorta">
                        <img src="src/assets/torta-de-frango.png" alt="Torta de Frango"/></a>
                    </div>
                    <div className="receita4">
                    <a href="/sitePizza">
                        <img src="src/assets/pizza-caseira.png" alt="Pizza Caseira"/></a>
                    </div>
                </section>

                <section className='receitas2'>
                <div className="receita5">
                    <a href="/siteFeijoada">
                    <img src="src/assets/feijoada.png" alt="Feijoada"/></a>
                    </div>
                    <div className="receita6">
                    <a href="/siteStrogonoff">
                        <img src="src/assets/strogonoff.png" alt="Strogonoff"/></a>
                    </div>
                    <div className="receita7">
                    <a href="/siteSushi">
                        <img src="src/assets/sushi.png" alt="Sushi"/></a>
                    </div>
                    <div className="receita8">
                    <a href="/siteLasanha">
                        <img src="src/assets/lasanha.png" alt="Lasanha"/></a>
                    </div>
                    </section>

                <section className='receitas3'>
                <div className="receita9">
                    <a href="/siteBrownie">
                    <img src="src/assets/brownie.png" alt="Brownie de chocolate"/></a>
                    </div>
                    <div className="receita10">
                    <a href="/siteTrufaCoco">
                        <img src="src/assets/trufaCoco.png" alt="TrufaCoco"/></a>
                    </div>
                    <div className="receita11">
                    <a href="/siteCoxinha">
                        <img src="src/assets/coxinha.png" alt="Coxinha"/></a>
                    </div>
                    <div className="receita12">
                    <a href="/sitePamonha">
                        <img src="src/assets/pamonha.png" alt="Pamonha"/></a>
                </div>
                    </section>
            </main>
            <footer className="footer">
                <div className="container-footer">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Sobre Nós</h4>
                            <p>Explore uma variedade de receitas deliciosas e inspire-se na cozinha com o nosso site. Descubra novas maneiras de preparar pratos incríveis e compartilhe suas próprias criações culinárias.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Links Úteis</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Receitas</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Conecte-se Conosco</h4>
                            <ul className="list-inline">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    &copy; 2024 Panela criativa. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
};

export default SiteInicio;
