import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <div>
            <CartWidget />
            <div className="menuPrincipal">
                <div className='brandBar'>
                    <div> <h2>Libreria</h2> </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href="">Inicio</a>
                        </li>
                        <li>
                            <a href="">Libros</a>
                        </li>
                        <li>
                            <a href="">Peliculas</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
