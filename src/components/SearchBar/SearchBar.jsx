
import { useState } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import './SearchBar.css'

export default function SearchBar() {

    const [button, setButton] = useState(false);
    const [search, setSearch] = useState("");
    

    function handleSearchButton(e){
        e.preventDefault();
        setButton(!button);
        return
    }

    function HandleSearchForm(e) {
        let searchValue = e.target.value.replace(" ", "-");
        setSearch(searchValue);
        
    }

         

    return (
        <>
            <div >
                <form  className='search-container' >
                    <NavLink className="search-input-active" activeClassName="search-input-inactive" to={"/Search?" + search} >
                        <button onClick={button === false ? handleSearchButton : null}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </NavLink>
                    <input onChange={HandleSearchForm} className={button ? "search-input-active" : "search-input-inactive"} type="text" name="search" placeholder='Títulos, gente e gêneros'  />
                </form>
            </div>
        </>
    );
}