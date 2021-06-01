import React from 'react';
import "./Welcome.css";
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import {Link} from "react-router-dom";

function Welcome() {
    return (
        <div className="welcome">
            <div className="welcome__header">
                <RestaurantMenuIcon className="welcome__logo" />
                <h1 className="welcome__name">Food's Restaurant</h1>
            </div>
            <div className="welcome__body">
            <h2 className="welcome__message">Welcome to Food's Kitchen</h2>
            <Link to="/Items"><button className="welcome__button">GO TO MENU</button></Link>
            </div>
        </div>
    )
}

export default Welcome
