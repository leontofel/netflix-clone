import Header from '../../components/Header/Header';
import MainVideoHome from '../../components/MainVideo/MainVideo';
import Footer from '../../components/Footer/Footer';
import videoList from '../../components/data/videoData.json'
import SortedCarousel from '../../components/SortedCarousel/SortedCarousel';

export default function Movies() {   
    return(
        <>
            <Header />
            <MainVideoHome video="qtRKdVHc-cE" />
            <SortedCarousel list='movies' listName='Minha Lista' videos={videoList.listas[0].minhaLista}/>
            <SortedCarousel list='movies' listName='Continuar Assistindo' videos={videoList.listas[1].continuarAssistindo}/>
            <SortedCarousel list='movies' listName='Em Alta' videos={videoList.listas[2].emAlta}/>
            <Footer/>
        </>
    );
}