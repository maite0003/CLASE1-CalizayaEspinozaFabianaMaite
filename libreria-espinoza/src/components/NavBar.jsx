import React from 'react'

function NavBar() {
    return (
        <div className="menuPrincipal">
            <div><h2>Libreria</h2></div>
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
    )
}

export default NavBar
