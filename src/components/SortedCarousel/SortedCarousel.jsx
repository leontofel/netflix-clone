
import Carousel from "../Carousel/Carousel"

export default function SortedCarousel(props){
    const sortedList = [];
    function minhaListaMap(videoList) {
        videoList.forEach(item => {
            if(item.categorie === props.list) sortedList.push(item);
        })
        return
    }

    return(
        <Carousel listName={props.listName} list={sortedList} onLoad={minhaListaMap(props.videos)}></Carousel>
    );
}
