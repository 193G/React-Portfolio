import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import ContentHero from './components/content-hero.js';
import Projects from './components/projects.js';
import Aboutme from './components/aboutme.js';
import Contactme from './components/contactme.js';
import Footer from './components/footer';

function App() {
  const [page, setPage] = useState(ContentHero);

  return (
<>
<div className='header'>
        <h1>Harun Saini</h1>
        <nav className="nav-bar">
    
            <ul>
                <li onClick={() => setPage(Projects)}><a href="#projects">Projects</a></li>
                <li onClick={() => setPage(Aboutme)}><a href="#about">About me</a></li>
                <li onClick={() => setPage(Contactme)}><a href="#contact">Contact</a></li>
                <li><a href="assets/Resume.docx" download> Resume </a></li>
              
            </ul>
    
        </nav>
    </div>

      {page}
      <Footer />

</>

 
  );
}

export default App;
