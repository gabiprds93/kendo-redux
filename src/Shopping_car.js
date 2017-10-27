import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import Edamame from './images/edamame.jpg';
import { Grid, Row, Col } from 'react-bootstrap';
import {HashRouter, Switch, Route, NavLink} from 'react-router-dom';
//import { addComment} from "./actions";
import './shopping_car.css';

//const SushiDish = ({ image, price }) => {
const SushiDish = () => {

    /* <div>
        <img src={image} className="ys-Img" />
        <p>1 x {price}</p>
    </div> */
    return (

        <li className="ys-selectedProdList" aria-selected="false">
            <a className="ys-viewSelectedItem"><img width="100" height="100" src={Edamame} /></a>
            <span className="ys-selectedImagePrice"><span>1</span>x<span>$4.2</span></span>
        </li>

    );
}

const YourShoppingCar = () => {
    let totalPrice = 0;
    return (
        <div id="ys-divshoppingcar">
            <h3>your<br />shopping car</h3>
            <p className="ys-totalPrice">$0.00</p>
            <NavLink to="/checkout"><a id="ys-emptycar">empty car</a><a id="ys-checkout">checkout</a></NavLink>
        </div>
    );
}

//const Shopping_car = ({ sushi }) => {
const Shopping_car = () => {
    /*const UserSushi = sushi.map((sushiUser, index) => {
      return (
        <SushiDish
          key={index}
          image={sushiUser.image}
          name={sushiUser.price}
        />
      );
    });*/

    return (

        <Grid className="container-fluid">
            <Row id="ys-shopInfo" className="active" >
                <Col xs={12} md={9} className="divDish">
                    <ul id="ys-shopList" className="ys-widget ys-listview">
                        <SushiDish />
                    </ul>
                </Col>
                <YourShoppingCar />

            </Row>
        </Grid>
    );
}

//const mapToProps = ({ sushi, selectedSushiIndex }) => ({ sushi, selectedSushiIndex });
export default Shopping_car;