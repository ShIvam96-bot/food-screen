import React, {useState} from 'react';
import "./Items.css";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import {Link} from "react-router-dom";
import bgimage from "./assets/burger.jpeg";
import cimage from "./assets/coke.jpeg";
import fimage from "./assets/fries.jpeg";
import pimage from "./assets/pepsi.jpeg";
//import Popup from "reactjs-popup";
//import "reactjs-popup/dist/index.css";

function Items() {

    const [count, setCount] = useState(0)

    const myFunction=() => {
        alert(`order details :
        number of ordered items: ${count}`)
    }
    return (
        <div className="items">
            <div className="items__header">
                <RestaurantMenuIcon className="items__logo" />
                <h1 className="items__name">Food's Restaurant</h1>
            </div>
            <div className="items__body">
                <div className="items__first">
                <img src={bgimage} className="items__bgimage" alt="Burger" />
                <p1 className="items__info" >Hamburger</p1>
                    <p className="items__price">
                        Price:200
                    </p>
                    <div className="items__buttons">
                    <button className="items__ib" onClick={() => setCount(count +1)}>+</button>
                    <button className="items__db" onClick={() => setCount(count -1)}>-</button>
                    </div>
                </div>
            <div className="items__first" >
                <img src={cimage} className="items__cimage" alt="Coke" />
                <div className="items__info">Coke</div>
                    <p className="items__price">
                        Price:50
                    </p>
                    <div className="items__buttons">
                     <button className="items__ib" onClick={() => setCount(count + 1)}>+</button>
                    <button className="items__db" onClick={() => setCount(count - 1)}>-</button>
                    </div>
            </div>
            <div className="items__first" >
                <img src={fimage} className="items__fimage" alt="Fries" />
                <div className="items__info">Fries</div>
                    <p className="items__price">
                    Price: 100
                    </p>
                    <div className="items__buttons">
                     <button className="items__ib" onClick={() => setCount(count +1)}>+</button>
                    <button className="items__db" onClick={() => setCount(count - 1)}>-</button>
                    </div>
            </div>
            <div className="items__first" >
                <img src={pimage} className="items__pimage" alt="Pepsi" />
                <div className="items__info">Pepsi</div>
                    <p className="items__price">
                        Price: 50
                    </p>
                    <div className="items__buttons">
                     <button className="items__ib" onClick={() => setCount(count + 1)}>+</button>
                    <button className="items__db" onClick={() => setCount(count - 1)}>-</button>
                    </div>
            </div>
            </div>
              {/* <Popup trigger={<button> Order summary </button>} position="right center">
                <div>Order summary</div>
                </Popup> */}
                {/*<div className="popup"
                onclick={myFunction()}> Order summery
                <span className="popuptext" id="myPopup"> Order Details</span>
                </div>*/}
                <button className="items__alert" onClick={() => myFunction()}>summary</button>
            <Link to="Checkout"><button className="items__button" >Checkout</button></Link>
        </div>
    );
}

export default Items

