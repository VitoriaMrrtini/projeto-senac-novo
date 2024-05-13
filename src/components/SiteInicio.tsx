import './SiteInicio.css';
//import RecipePage from './Receita.tsx';

const SiteInicio = () => {

    //const [receitaId, setReceitaId] = useState(-1);

    // const handleReceitaClick = (id) => {
    //    setReceitaId(id);
    //};
    return (
        <> 
        <div className="logo">
                <div className="menu">
                    <ul className="menu01">
                        <a><a className="menu-icon">&#9776;</a>
                            <div className="menu01-menu">
                                <a href="/userConfi" className="animação">Configurações</a>
                                <a href="/userProfile" className="animação">Perfil</a>
                                <a href="/"className="animação">Sair</a>
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
                            <a><a className="animação">Café da manhã</a>
                                <div className="cafea-menu">
                                    <a className="animação">Bolos</a>
                                    <a className="animação">Pães e derivados </a>
                                    <a className="animação">Bebidas quentes</a>
                                 </div>
                            </a>      
                        </ul>
                     </div>

                    <div className='cabecario3'>
                        <ul className="almoco">
                            <a><a className="animação">Almoço</a>
                                <div className="almoco-menu">
                                    <a className="animação">Massas  </a>
                                    <a className="animação">Saladas </a>
                                    <a className="animação">Prato principal  </a>
                                </div>
                            </a>
                        </ul>
                    </div>

                     <div className='cabecario4'>
                     <ul className="cafe-da-tarde">
                            <a><a className="animação">Café da tarde</a>
                                <div className="cafe-tarde-menu">
                                    <a className="animação">Bolos caseiros</a>
                                    <a className="animação">Biscoitos </a>
                                    <a className="animação">Sanduíches </a>
                                </div>
                            </a>
                        </ul>
                     </div>

                     <div className='cabecario5'>
                     <ul className="lanche-da-tarde">
                        <a><a className="animação">Lanche da tarde</a>
                            <div className="lanche-tarde-menu">
                                <a className="animação">Sanduíches naturais</a>
                                <a className="animação">Chips de vegetais</a>
                                <a className="animação">Smoothies ou sucos naturais</a>
                            </div>
                        </a>
                     </ul>                   
                     </div>

                    <div className='cabecario6'>
                    <ul className="jantar">
                        <a><a className="animação">Jantar</a>
                            <div className="janta-menu">
                                <a className="animação">Acompanhamento de carboidratos</a>
                                <a className="animação">Prato principal com proteína</a>
                                <a className="animação">Legumes ou vegetais cozidos, grelhados ou salteados</a>
                            </div>
                        </a>
                    </ul>                     
                    </div>

                    <div className='cabecario7'>
                    <ul className="doces">
                        <a><a className="animação">Doces</a>
                            <div className="doces-menu">
                                <a className="animação">Sobremesas geladas </a>
                                <a className="animação">Doces gourmet </a>
                                <a className="animação">Doces saudáveis </a>
                            </div>    
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
                    <img src="src/assets/brownie.png" alt="Brownie"/></a>
                    </div>
                    <div className="receita10">
                    <a href="/siteStrogonoff">
                        <img src="src/assets/strogonoff.png" alt="Strogonoff"/></a>
                    </div>
                    <div className="receita11">
                    <a href="/siteSushi">
                        <img src="src/assets/sushi.png" alt="Sushi"/></a>
                    </div>
                    <div className="receita12">
                    <a href="/siteLasanha">
                        <img src="src/assets/lasanha.png" alt="Lasanha"/></a>
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
