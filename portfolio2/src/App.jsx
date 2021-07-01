import Contact from './components/contact/contact'
import Intro from './components/intro/intro'
import Portfolio from './components/portfolio/portfolio'
import Topbar from './components/topbar/Topbar'
import Works from './components/works/works'
import "./app.scss"
import { useState } from 'react'
import Menu from './components/menu/Menu'

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Contact/>
       </div>
    </div>
  )
}

export default App
