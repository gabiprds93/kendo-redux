import React, { Component } from 'react';
import { connect } from "redux-zero/react";
// import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './checkout.css';

// importado de react-bootstrap
import { Grid, Row, Col, Button } from 'react-bootstrap';


const Checkout = ({ }) => {
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
                        <hr className="yc-hr" />
                        <Row className="show-grid yc-row">
                            <Col className="yc-report-col" sm={6} md={3}><br />ITEM</Col>
                            <Col className="yc-report-col" sm={6} md={3}><br /></Col>
                            <Col className="yc-report-col" sm={6} md={3}><br />QUANTITY</Col>
                            <Col className="yc-report-col" sm={6} md={3}><br />PRICE</Col>
                        </Row>
                        <hr className="yc-hr" />
                        <Row className="show-grid">
                            <Col className="yc-btnnow-col" sm={6} md={9}><br /></Col>
                            <Col className="yc-btnnow-col" sm={6} md={1}><br />
                                <h7 className="yc-total">TOTAL:</h7>
                            </Col>
                            <Col className="yc-btnnow-col" sm={6} md={2}>
                                <h2>S/.78.00</h2>
                            </Col>
                        </Row>
                        <hr className="yc-hr" />
                        <Row className="show-grid">
                            <Col className="yc-btnnow-col" sm={6} md={6}><br /></Col>
                            <Col className="yc-cancel-col" sm={6} md={3}><br />
                                <a className="yc-cancel">CANCEL ORDER</a>
                            </Col>
                            <Col className="yc-btnnow-col" sm={6} md={3}><br />
                                <Button className="yc-btn-order"><p className="yc-btn-p">ORDER NOW!</p></Button>
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

export default Checkout;