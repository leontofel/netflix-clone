import './Series.css';
import Header from '../../components/Header/Header';
import MainVideoHome from '../../components/MainVideo/MainVideo';
import Footer from '../../components/Footer/Footer';
import videoList from '../../components/data/videoData.json'
import SortedCarousel from '../../components/SortedCarousel/SortedCarousel';

export default function Series() {   
    return(
        <>
            <Header />
            <MainVideoHome video="UkhHY7U3LwU" />
            <SortedCarousel list='series' listName='Minha Lista' videos={videoList.listas[0].minhaLista}/>
            <SortedCarousel list='series' listName='Continuar Assistindo' videos={videoList.listas[1].continuarAssistindo}/>
            <SortedCarousel list='series' listName='Em Alta' videos={videoList.listas[2].emAlta}/>
            <Footer/>
        </>
    );
}