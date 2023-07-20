import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Vans from './pages/vans';

/**
 * Challenge:
 * Bootstrap the VanLife project by creating the first 2 routes:
 * Home and About.
 * 
 * Also include the navbar that can link between the two routes.
 * For now, you'll either need to copy/paste the navbar code
 * to both Home and About pages, or you'll need to find a place
 * to put it where it can be shared between the two pages.
 * (Don't overthink this part - just do whatever is easiest for
 * you because we'll learn a better approach very soon)
 * 
 * Review challenge: do all the CSS yourself based on the design
 * linked in the slides.
 */

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to="/">#MyVanLife</Link>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/vans'>Vans</Link>
          <Link to='/about'>About</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/vans' element={<Vans />} />
        <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);