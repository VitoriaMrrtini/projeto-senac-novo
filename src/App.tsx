import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteInicio from './components/SiteInicio';
import Login from './components/login';
import Recipe from './components/siteReceita.tsx';
import UserProfile from './components/userProfile.tsx';
import UserConfi from './components/userConfi.tsx';
import SiteCafeManha from './components/SiteCafeManha.tsx'
import SiteAlmoco from './components/SiteAlmoco.tsx';
import SiteCafeTarde from './components/SiteCafeTarde.tsx';
import SiteLanche from './components/SiteLanche.tsx';
import SiteJantar from './components/SiteJanta.tsx';
import SiteDoce from './components/SiteDoce.tsx';
import Cadastro from './components/Cadastro.tsx';
import SearchResults from "./components/SearchResults";


function App(){
  return(
    <>
      <HashRouter>
            <Routes>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/" element={<Cadastro/>}/>
              <Route path="/SiteInicio" element={<SiteInicio/>}/>
              <Route path='/siteReceita' element={<Recipe/>}/>
              <Route path='/userProfile' element={<UserProfile/>}/>
              <Route path='/userConfi' element={<UserConfi/>}/>
              <Route path='/SiteCafeManha' element={<SiteCafeManha/>}/>
              <Route path='/SiteAlmoco' element={<SiteAlmoco/>}/>
              <Route path='/SiteCafeTarde' element={<SiteCafeTarde/>}/>
              <Route path='/SiteLanche' element={<SiteLanche/>}/>
              <Route path='/SiteJantar' element={<SiteJantar/>}/>
              <Route path='/SiteDoce' element={<SiteDoce/>}/>
              <Route path='/SiteDoce' element={<SearchResults/>}/>
            </Routes>
    </HashRouter>
    </>
  )
}
export default App;