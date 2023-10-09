import React from "react";
import './Card.css'

const Card = (props) => {
    const stars = props.star || ''; // Handle cases where "star" is not provided

    return (
        <div className="column">
            <img src={props.avatar} alt="staff" width={300} height={200}/>
            <h3>{props.name}</h3>
            <p>{props.position}</p>
            <p>{stars}</p>
        </div>
    );
}

export default Card;
