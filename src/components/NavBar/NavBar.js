import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/" className="Link">Home</Link>
            <Link to="/About" className="Link">About</Link>
            <Link to="/Products" className="Link">Products</Link>
        </div>
    )
}