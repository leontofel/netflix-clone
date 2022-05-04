import React from 'react';
import './Header.css';
import Logo from '../../assets/imgs/flix-logo.png'
import { Link } from 'react-router-dom';

export default () => {
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
                    <div className='search-container'>
                        <form action="submit">
                            <input type="text" name="search" id="searchBar" placeholder='Títulos, gente e gêneros'/>
                        </form>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>

        </>
    )
}