import React from 'react';

import {Link, useLocation} from "react-router-dom";

import {ROUTER} from "../../../config/router";

import "./Header.css";


const Header = () => {
    const location = useLocation();
    const title = location.pathname.replace("/", "").toUpperCase();

    return (
        <header className="Header">
            <h2>
                Current location: {title}
            </h2>

            <Link to={ROUTER.routes.HOME}>
                HOME
            </Link>
        </header>
    );
};

export default Header;