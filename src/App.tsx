import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteInicio from './components/SiteInicio';
import Login from './components/login';
import RecipeBoloChoco from './components/siteBolo.tsx';
import RecipeQueijoPao from './components/siteQueijo.tsx';
import RecipeTortaFrango from './components/siteTorta.tsx';
import RecipePizzaCaseira from './components/sitePizza.tsx';
import RecipeFeijoada from './components/siteFeijoada.tsx';
import RecipeStrogonoff from './components/siteStrogonoff.tsx';
import RecipeSushi from './components/siteSushi.tsx';
import RecipeLasanha from './components/siteLasanha.tsx';
import RecipeTrufaCoco from './components/siteTrufaCoco.tsx';
import RecipeCoxinha from './components/siteCoxinha.tsx';
import RecipePamonha from './components/sitePamonha.tsx';
import RecipeBrownie from './components/siteBrownie.tsx';
import UserProfile from './components/userProfile.tsx';
import UserConfi from './components/userConfi.tsx';
import SiteCafeManha from './components/SiteCafeManha.tsx'
import SiteAlmoco from './components/SiteAlmoco.tsx';
import SiteCafeTarde from './components/SiteCafeTarde.tsx';
import SiteLanche from './components/SiteLanche.tsx';
import SiteJantar from './components/SiteJanta.tsx';
import SiteDoce from './components/SiteDoce.tsx';

function App(){
  return(
    <>
      <HashRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/SiteInicio" element={<SiteInicio/>}/>
              <Route path='/siteBolo' element={<RecipeBoloChoco/>}/>
              <Route path='/siteQueijo' element={<RecipeQueijoPao/>}/>
              <Route path='/siteTorta' element={<RecipeTortaFrango/>}/>
              <Route path='/sitePizza' element={<RecipePizzaCaseira/>}/>
              <Route path='/siteFeijoada' element={<RecipeFeijoada/>}/>
              <Route path='/siteStrogonoff' element={<RecipeStrogonoff/>}/>
              <Route path='/siteSushi' element={<RecipeSushi/>}/>
              <Route path='/siteLasanha' element={<RecipeLasanha/>}/>
              <Route path='/siteTrufaCoco' element={<RecipeTrufaCoco/>}/>
              <Route path='/siteCoxinha' element={<RecipeCoxinha/>}/>
              <Route path='/siteCoxinha' element={<RecipeCoxinha/>}/>
              <Route path='/sitePamonha' element={<RecipePamonha/>}/>
              <Route path='/siteBrownie' element={<RecipeBrownie/>}/>
              <Route path='/userProfile' element={<UserProfile/>}/>
              <Route path='/userConfi' element={<UserConfi/>}/>
              <Route path='/SiteCafeManha' element={<SiteCafeManha/>}/>
              <Route path='/SiteAlmoco' element={<SiteAlmoco/>}/>
              <Route path='/SiteCafeTarde' element={<SiteCafeTarde/>}/>
              <Route path='/SiteLanche' element={<SiteLanche/>}/>
              <Route path='/SiteJantar' element={<SiteJantar/>}/>
              <Route path='/SiteDoce' element={<SiteDoce/>}/>
            </Routes>
    </HashRouter>
    </>
  )
}
export default App;