import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <nav className='menu'>
      <ul className='menu_buttons'>
        <li><Link className='menu_btn' to="about" smooth={true} duration={500}>Sobre</Link></li>
        <li><Link className='menu_btn' to="skills" smooth={true} duration={500}>Habilidades</Link></li>
        <li><Link className='menu_btn' to="projects" smooth={true} duration={500}>Projetos</Link></li>
        <li><Link className='menu_btn' to="contact" smooth={true} duration={500}>Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Header