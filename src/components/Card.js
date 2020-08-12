import React from 'react'

const Card = (props) => {
    console.log(props.title);
    console.log(props.score);
    console.log(props.address);
    //JSX
    return (
        <div>
            <img src={props.image};
           <h1> {props.titulo}</h1> 
           <h4>valoracion: {props.titulo} estrellas</h4>
           <p>Direccion: {props.titulo}</p>
           { props.superhost ? <small>superhost</small>: null};
        </div>
    )
}

export default Card


