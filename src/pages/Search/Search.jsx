import './Search.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

export default function SearchPage() {

   const [searchObject, setSearchObject] = useState({})

    const searchHTML = window.location.href;
    const searchElement = searchHTML.split(/(\?\D{3,})/)
    const searchQuery = searchElement[1].replace("?", "");
    
    useEffect(() => {
        fetch(`http://www.omdbapi.com/?t=${searchQuery}&apikey=826822f0`)
        .then(response => response.json())
        .then(data => {
            setSearchObject(data);
        })
    }, [searchQuery])

    
    

    return (
        <>
            <Header/>
            <section className='search-section'>
                <h2 className="search-title">{searchObject.Title}</h2>
                <div className="search-container">
                    <img src={searchObject.Poster} alt={`${searchObject.Title}'s poster`} />
                    <ul>
                        <li>Gênero: {searchObject.Genre}</li>
                        <li>Diretor: {searchObject.Director}</li>
                        <li>Sinopse: {searchObject.Plot}</li>
                        <li>Prêmios: {searchObject.Awards}</li>
                        <li>Nota: {searchObject.imdbRating} </li>
                    </ul>
                </div>

            </section>
            <Footer />

        </>
    );
}