import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import SiteInicio from './components/SiteInicio';
import Login from './components/login';
import RecipeBoloChoco from './components/siteBolo.tsx';
import RecipeQueijoPao from './components/siteQueijo.tsx';
import RecipeTortaFrango from './components/siteTorta.tsx';
import RecipePizzaCaseira from './components/sitePizza.tsx';
import RecipeFeijoada from './components/siteFeijoada.tsx';
<<<<<<< HEAD
import RecipeStrogonoff from './components/siteStrogonoff.tsx';


=======
import RecipeSushi from './components/siteSushi.tsx';
import RecipeLasanha from './components/siteLasanha.tsx';
>>>>>>> 0a0e6fcad8e18823e33369512d534cedf145a632

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
              <Route path='/siteFeijoada' element={<RecipeFeijoada/>}/>
<<<<<<< HEAD
              <Route path='/siteStrogonoff' element={<RecipeStrogonoff/>}/>

=======
              <Route path='/siteSushi' element={<RecipeSushi/>}/>
              <Route path='/siteLasanha' element={<RecipeLasanha/>}/>
>>>>>>> 0a0e6fcad8e18823e33369512d534cedf145a632
            </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;