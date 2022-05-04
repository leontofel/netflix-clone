import React from 'react';

export default (props) => {
    return (
        <>
            <iframe width="300" height="200" src={props.url} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </>
    )
}