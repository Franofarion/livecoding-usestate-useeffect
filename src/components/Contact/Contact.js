import React from 'react';
import star from './star.png';
import star_fill from './star_fill.png';
import './Contact.css';


// export default function Contact(props) {
export default function Contact({age, name, favoris, changeFavorite}) {
    return (
        <div>
            <span>{name}</span>
            <span>/</span>
            <span>{age}</span>
            <span>
                <img 
                    className="favoris"
                    src={favoris ? star_fill : star}
                    onClick={() => changeFavorite(name)}
                />
            </span>
        </div>
    )
}