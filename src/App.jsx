
import './App.css'


import Header from './components/Header'

import { BrowserRouter, Routes, Route   } from 'react-router-dom';
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Home from './pages/Home'
import SiteInfo from './components/Siteinfo';



function App() {
 

  return (
    <BrowserRouter> 
    <Header/>
    <Routes>
    
      <Route path='/' element={<Home/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/project' element={<Projects/>}  />
      <Route path='/skills' element={<Skills/>}  />
      <Route path='/contact' element={<Contact/>}  />
    
   
    </Routes>
    
    <SiteInfo/>
   </BrowserRouter>
  )
}

export default App
