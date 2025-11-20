import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className={`header ${darkMode ? 'dark' : ''}`}>
      <div className="header-inner">
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <Link to="/" className="brand" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
            <svg width="38" height="38" viewBox="0 0 24 24" style={{color:'#000'}}>
              <rect x="2" y="2" width="8" height="8" fill="currentColor"/>
              <rect x="2" y="14" width="8" height="8" fill="currentColor"/>
              <rect x="14" y="14" width="8" height="8" fill="currentColor"/>
              <rect x="14" y="2" width="8" height="8" fill="currentColor"/>
            </svg>
            <h1 style={{margin:0}}>WorkFuture</h1>
          </Link>
          <nav style={{display:'flex',gap:14,alignItems:'center'}}>
            <NavLink to="/" className={({isActive})=> isActive ? 'nav-active' : 'nav-link'}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? 'nav-active' : 'nav-link'}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive ? 'nav-active' : 'nav-link'}>Contact</NavLink>
          </nav>
        </div>

        <button className={`btn-toggle ${darkMode ? 'dm-on' : 'dm-off'}`} onClick={() => setDarkMode(!darkMode)} aria-label="toggle theme"></button>
      </div>
    </header>
  )
}
