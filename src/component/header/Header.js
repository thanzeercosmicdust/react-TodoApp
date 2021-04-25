import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom"

function Header(props) {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            
        </header>
    );
}

export default Header;