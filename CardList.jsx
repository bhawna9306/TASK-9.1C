import React from 'react';
import Card from './Card';
import './Card.css';
import List from './List';

function cardComponent(staff, i) {
    return (
        <Card
            key={staff.key}
            avatar={staff.avatar}
            name={staff.name}
            position={staff.position}
            star={staff.Star} 
        />
    );
}

const CardList = () => {
    return (
        <div className="row">
            {List.map((staff) => cardComponent(staff))}
        </div>
    );
}

export default CardList;
