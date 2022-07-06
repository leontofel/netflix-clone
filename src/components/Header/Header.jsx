import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Logo from '../../assets/imgs/flix-logo.png'
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>
            <header>
                <div className='logo-container'><Link to="/"><img src={Logo} className='header-logo' alt="Logo" /></Link></div>
                <nav>
                    <ul className='nav-menu'>
                        <li className='nav-menu-item'><Link to="/Home">Início</Link></li>
                        <li className='nav-menu-item'><Link to="/Series">Séries</Link></li>
                        <li className='nav-menu-item'><Link to="/Movies">Filmes</Link></li>
                        <li className='nav-menu-item'><Link to="/">Bombando</Link></li>
                        <li className='nav-menu-item'><Link to="/MyList">Minha Lista</Link></li>
                    </ul>

                    <SearchBar />
                </nav>
            </header>

        </>
    )
}