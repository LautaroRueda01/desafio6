import React from 'react'
import CartWidget from './components/CartWidget';

const Footer = () => {
  return (
    <footer id="main-footer" className="footer-black">
        <p>&copy; Copyright 2022 - Lautaro Rueda</p>
        <p>Todos los derechos reservados</p>
        <h1 className="footer__title">Canela y Miel</h1>
            <CartWidget/>
        <a href="#" className='footer__link'>Productos</a>
        <a href="#" className='footer__link'>Contacto</a>
        <a href="#" className='footer__link'>Nosotros</a>
    </footer>
  )
}

export default Footer;