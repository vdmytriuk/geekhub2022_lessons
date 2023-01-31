import React from 'react';
import {Link} from "react-router-dom";

import {ROUTER} from "../../../config/router";

import "./Card.css";


const Card = ({userId, todoId, title, completed}) => {
    return (
        <div className="Card">
            <h2>
               Title: {title}
            </h2>

            <h3>
                Status: {!completed && "Not "} completed
            </h3>

            {todoId &&
                <Link to={ROUTER.routes.USER_TODO({userId, todoId})}>
                    View full information
                </Link>
            }
        </div>
    );
};

export default Card;