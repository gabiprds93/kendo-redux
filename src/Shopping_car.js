import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import Edamame from './images/edamame.jpg';
import {totalPrice} from './actions';
import { Grid, Row, Col } from 'react-bootstrap';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
//import { addComment} from "./actions";
import './shopping_car.css';

const SushiDish = ({ image, price }) => {
    //const SushiDish = () => {
    //
    return (

        <li className="ys-selectedProdList" aria-selected="false">
            <a className="ys-viewSelectedItem"><img width="100" height="100" src={image} /></a>
            <span className="ys-selectedImagePrice"><span>1</span>x<span>${price}</span></span>
        </li>

    );
}

const YourShoppingCar = () => {
    // let totalPrice = 0;
    // totalPrice += price;
    return (
        <div id="ys-divshoppingcar">
            <h3>your<br />shopping car</h3>
            <p className="ys-totalPrice">${totalPrice().toFixed(2)}</p>
            <NavLink to="/checkout"><a id="ys-emptycar">empty car</a><a id="ys-checkout">checkout</a></NavLink>
        </div>
    );
}

const Shopping_car = ({ foodUser, selectedSushiIndex }) => {
    //const Shopping_car = () => {
    const UserSushi = foodUser.map((sushiUser, index) => {
        let priceDish = sushiUser.price;
        console.log(priceDish)
        return (
            <SushiDish
                key={index}
                image={sushiUser.image}
                price={sushiUser.price}
            />
      );
    });
    return (

        <Grid className="container-fluid">
            <Row id="ys-shopInfo" className="active" >
                <Col xs={12} md={9} className="divDish">
                    <ul id="ys-shopList" className="ys-widget ys-listview">
                        {UserSushi}
                    </ul>
                </Col>
                <YourShoppingCar />

            </Row>
        </Grid>
    );
}

const mapToProps = ({ foodUser, selectedSushiIndex }) => ({ foodUser, selectedSushiIndex });
export default connect(mapToProps)(Shopping_car);