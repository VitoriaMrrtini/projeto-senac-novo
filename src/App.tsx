import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import SiteInicio from './components/SiteInicio';
import Login from './components/login';
import RecipeBoloChoco from './components/siteBolo.tsx';
import RecipeQueijoPao from './components/siteQueijo.tsx';
import RecipeTortaFrango from './components/siteTorta.tsx';
import RecipePizzaCaseira from './components/sitePizza.tsx';

function App(){
  return(
    <>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/SiteInicio" element={<SiteInicio/>}/>
              <Route path='/siteBolo' element={<RecipeBoloChoco/>}/>
              <Route path='/siteQueijo' element={<RecipeQueijoPao/>}/>
              <Route path='/siteTorta' element={<RecipeTortaFrango/>}/>
              <Route path='/sitePizza' element={<RecipePizzaCaseira/>}/>
            </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;