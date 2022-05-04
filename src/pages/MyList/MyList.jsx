import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Video from "../../components/Video/Video";
import videoList from "../../components/data/videoData.json"
import './MyList.css'
import { useState } from "react";

export default function MyList(){

    const [list, setList] = useState([])
    
    const myList = [];
    function makeMyList(){
        videoList.listas[0].minhaLista.map(item => {
            const formatedItem = (
                <Video className="list-item" title={item.title} url={item.url} id={item.id} />
            )
            myList.push(formatedItem);
            
        })

    }

    return(
        <>
            <Header/>
            <h1>Minha Lista</h1>
            <div className="container-my-list" onLoad={makeMyList()}>
                {myList}
            </div>

            <Footer />
        
        </>
    );
}