import React from 'react';
import Header from '../../components/Header/Header';
import MainVideo from '../../components/MainVideo/MainVideo';
import Carousel from '../../components/Carousel/Carousel';
import videoList from '../../components/data/videoData.json'
import Footer from '../../components/Footer/Footer';


export default () => {

    return (
        <div>
            <Header/>
            <MainVideo video="z6yMItXePG8" />
            <Carousel listName="Minha Lista" list={videoList.listas[0].minhaLista} />
            <Carousel listName="Continuar Assistindo" list={videoList.listas[1].continuarAssistindo} />
            <Carousel listName="Em Alta" list={videoList.listas[2].emAlta}/>
            <Carousel listName="Documentários" list={videoList.listas[3].documentarios}/>
            <Footer/>
        </div>
    )
}