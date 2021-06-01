import React from 'react';
import "./Checkout.css";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__header">
                <RestaurantMenuIcon className="checkout__logo" />
                <h1 className="checkout__name">Food's Restaurant</h1>
            </div>
            <div className="checkout__body"> 
            <h2 className="checkout__heading">Checkout</h2>
            <p className="checkout__message">Thank you for your order.</p>
            </div>
        </div>
    )
}

export default Checkout
