import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <> 
        <nav id="layout-navBar" className='navBar'>
            <h1 className="navBar__title">Canela y Miel</h1>
            <CartWidget/>
        <a href="#" className='navBar__link'>Productos</a>
        <a href="#" className='navBar__link'>Contacto</a>
        <a href="#" className='navBar__link'>Nosotros</a>
        </nav>
        </>
    );
}

export default NavBar;