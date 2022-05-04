import React, { Component, useEffect, useRef, useState } from "react";
import Video from "../Video/Video";
import './Carousel.css';


export default (props) => {

    const [data, setData] = useState([], [makeAVideoList]);
    const carousel = useRef(null)

    function makeAVideoList(name) {
        name.map((item) => {
            let teste = (
                <div className="item" id={item.id}>
                    <Video title={item.title} url={item.url} />
                </div>
            )
            data.push(teste);
        })
    }

    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <div className="container">
            <h2>{props.listName}</h2>

            <div className="carousel" ref={carousel} onLoad={makeAVideoList(props.list)}>

                {data}

            </div>

            <div className="carousel-button">
                <button onClick={handleLeftClick} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                    </svg>
                </button >
                <button onClick={handleRightClick} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="60" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </button >
            </div>

        </div>
    );
}
