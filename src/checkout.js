import React, { Component } from 'react';
import { connect } from "redux-zero/react";

import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

// import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {totalPrice} from './actions';
import './checkout.css';
// importado de react-bootstrap
import { Grid, Row, Col, Button } from 'react-bootstrap';

const CheckoutReport = ({image,name,price})=>{
    return (
        <div>
            <hr className="yc-hr" />
            <Row className="show-grid yc-row" classID="">
                < Col className="yc-report-col" sm={6} md={3}><br /><img src={image}></img></Col>
                <Col className="yc-report-col" sm={6} md={3}><br />{name}</Col>
                <Col className="yc-report-col" sm={6} md={3}><br /><input type="Number"></input></Col>
                <Col className="yc-report-col" sm={6} md={3}><br />{price}</Col>
            </Row>
        </div>
    );
}

const Checkout = ({ foodUser, total }) => {
    const UserSushi = foodUser.map((sushiUser, index) => {
        return (
            <CheckoutReport
                key={index}
                image={sushiUser.image}
                name={sushiUser.name}
                price={sushiUser.price}
            />
        );
    });

    return (
        <div className="yc-container">
            <Grid className="yc-grid-container-image">
                <Grid className="yc-grid-container">
                    <Grid className="yc-grid-container-final">
                        <h1 className="yc-h1title-order">Order Details</h1>
                        <Row className="show-grid yc-row">
                            <Col className="yc-title-col" sm={6} md={3}><br />ITEM</Col>
                            <Col className="yc-title-col" sm={6} md={3}><br /></Col>
                            <Col className="yc-title-col" sm={6} md={3}><br />QUANTITY</Col>
                            <Col className="yc-title-col" sm={6} md={3}><br />PRICE</Col>
                        </Row>
                        {UserSushi}
                        <hr className="yc-hr" />
                        <Row className="show-grid">
                            <Col className="yc-btnnow-col" sm={6} md={9}><br /></Col>
                            <Col className="yc-btnnow-col" sm={6} md={1}><br />
                                <h7 className="yc-total">TOTAL:</h7>
                            </Col>
                            <Col className="yc-btnnow-col" sm={6} md={2}>
                                <h2>${totalPrice().toFixed(2)}</h2>
                            </Col>
                        </Row>
                        <hr className="yc-hr" />
                        <Row className="show-grid">
                            <Col className="yc-btnnow-col" sm={6} md={6}><br /></Col>
                            <Col className="yc-cancel-col" sm={6} md={3}><br />
                            <NavLink to="/"><a className="yc-cancel">CANCEL ORDER</a></NavLink>
                            </Col>
                            <Col className="yc-btnnow-col" sm={6} md={3}><br />
                            {/* <NavLink to="/checkout"><a id="ys-emptycar">empty car</a><a id="ys-checkout">checkout</a></NavLink> */}

                            <NavLink to="/"><Button className="yc-btn-order"><p className="yc-btn-p">ORDER NOW!</p></Button></NavLink>
                            </Col>
                        </Row>
                    </Grid>
                </Grid>
            </Grid>
            <hr />
            <div>
                <p className="yc-copyright">Learn more about Kendo UI® SPA at <a className="yc-copyright-a">docs.telerik.com/kendo-ui.</a><br />
                    Copyright © 2017, Progress Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.</p>
            </div>

        </div>

    );
}
const mapToProps = ({ foodUser, selectedSushiIndex }) => ({ foodUser, selectedSushiIndex });
export default connect(mapToProps)(Checkout);
