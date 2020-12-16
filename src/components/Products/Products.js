import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../../shoes.json';
import './Products.css';

export default function Products() {

    return (
        <div className="Container">
            {Object.keys(Shoes).map((keyName, key) => {
                return <div key={key}>
                    <Link to={`/Products/${keyName}`} className="Item">
                        <img src={Shoes[keyName].img} alt={Shoes[keyName].name}></img>
                        <p>{Shoes[keyName].name}</p>
                    </Link>
                </div>
            })}
        </div>
    )
}