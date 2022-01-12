import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import '../ItemListContainer/Item/Item.css'

function NavBar() {
    return (
        <div>
            <CartWidget />
            <div className="menuPrincipal">
                <div className='brandBar'>
                    <div> <Link to='/'><h2>Libreria</h2></Link> </div>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/' className='a-link'>Inicio</Link>
                        </li>
                        <li>
                            <Link to='/categoria/libros' className='a-link'>Libros</Link>
                        </li>
                        <li>
                            <Link to='/categoria/peliculas' className='a-link'>Peliculas</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar
