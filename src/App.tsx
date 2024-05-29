import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteInicio from './components/SiteInicio';
import Login from './components/login';
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
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/SiteInicio" element={<SiteInicio/>}/>
              <Route path='/userProfile' element={<UserProfile/>}/>
              <Route path='/userConfi' element={<UserConfi/>}/>
              <Route path='/SiteCafeManha' element={<SiteCafeManha/>}/>
              <Route path='/SiteAlmoco' element={<SiteAlmoco/>}/>
              <Route path='/SiteCafeTarde' element={<SiteCafeTarde/>}/>
              <Route path='/SiteLanche' element={<SiteLanche/>}/>
              <Route path='/SiteJantar' element={<SiteJantar/>}/>
              <Route path='/SiteDoce' element={<SiteDoce/>}/>
            </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;