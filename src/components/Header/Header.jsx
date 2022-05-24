import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar.jsx';
import Logo from '../../assets/imgs/flix-logo.png'
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <>
            <header>
                <Link to="/"><img src={Logo} alt="Logo" /></Link>
                <nav>
                    <ul>
                        <li><Link to="/Home">Início</Link></li>
                        <li><Link to="/Series">Séries</Link></li>
                        <li><Link to="/Movies">Filmes</Link></li>
                        <li><Link to="/">Bombando</Link></li>
                        <li><Link to="/MyList">Minha Lista</Link></li>
                    </ul>

                    <SearchBar />
                </nav>
            </header>

        </>
    )
}