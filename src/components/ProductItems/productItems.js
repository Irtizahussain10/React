import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../../shoes.json';
import './ProductItems.css';

export default function ProductItems() {

    const { id } = useParams();
    const shoe = Shoes[id];

    return (
        <div>
            <div className="link">
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={500} alt="shoe" className="img" />
            </div>
        </div>
    );
}