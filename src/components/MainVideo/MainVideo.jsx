import React from 'react';
import './MainVideo.css'


export default (props) => {
    return (
        <div>
            <iframe className="main-video" src={`https://www.youtube.com/embed/${props.video}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
        </div>
    );
}