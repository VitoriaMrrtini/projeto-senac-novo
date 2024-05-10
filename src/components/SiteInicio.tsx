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
                                <a className="animação">Serviço 1</a>
                                <a className="animação">Serviço 2</a>
                                <a className="animação">Serviço 3</a>
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
                                    <a className="animação">Salgados assados </a>
                                    <a className="animação">Serviço </a>
                                 </div>
                            </a>      
                        </ul>
                     </div>

                    <div className='cabecario3'>
                        <ul className="almoco">
                            <a><a className="animação">Almoço</a>
                                <div className="almoco-menu">
                                    <a className="animação">Serviço 1</a>
                                    <a className="animação">Serviço 2</a>
                                    <a className="animação">Serviço 3</a>
                                </div>
                            </a>
                        </ul>
                    </div>

                     <div className='cabecario4'>
                     <ul className="cafe-da-tarde">
                            <a><a className="animação">Café da tarde</a>
                                <div className="cafe-tarde-menu">
                                    <a className="animação">Serviço 1</a>
                                    <a className="animação">Serviço 2</a>
                                    <a className="animação">Serviço 3</a>
                                </div>
                            </a>
                        </ul>
                     </div>

                     <div className='cabecario5'>
                     <ul className="lanche-da-tarde">
                        <a><a className="animação">Lanche da tarde</a>
                            <div className="lanche-tarde-menu">
                                <a className="animação">Serviço 1</a>
                                <a className="animação">Serviço 2</a>
                                <a className="animação">Serviço 3</a>
                            </div>
                        </a>
                     </ul>                   
                     </div>

                    <div className='cabecario6'>
                    <ul className="jantar">
                        <a><a className="animação">Jantar</a>
                            <div className="janta-menu">
                                <a className="animação">Serviço 1</a>
                                <a className="animação">Serviço 2</a>
                                <a className="animação">Serviço 3</a>
                            </div>
                        </a>
                    </ul>                     
                    </div>

                    <div className='cabecario7'>
                    <ul className="doces">
                        <a><a className="animação">Doces</a>
                            <div className="doces-menu">
                                <a className="animação">Bolos caseiros</a>
                                <a className="animação">Cookies e biscoitos </a>
                                <a className="animação">Sobremesas geladas </a>
                                <a className="animação">Doces regionais </a>
                                <a className="animação">Tortas e tartes </a>
                                <a className="animação">Doces gourmet </a>
                                <a className="animação">Doces festivos </a>
                                <a className="animação">Doces exóticos </a>
                                <a className="animação">Doces saudáveis </a>
                                <a className="animação">Doces simples e rápidos </a>

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
