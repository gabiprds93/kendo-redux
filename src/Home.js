import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'redux-zero/react';
import './App.css';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import data from './data'

const Maps = ({ item, index }) => {
  return (
    // <Grid>
    //   <Row>
    //     <Col sm={3} md={3} lg={3}>
          <div className="y-aplates">
            <a className="view-details" href="#/menu/1">
              <img classname="y-aimg" src={item.image} />
            </a>
            <strong className='y-astron'>{item.name}</strong>
            <span className="y-a-price"><span>$</span><span data-bind="text: price">{item.price}</span></span>
            <button className="add-to-cart" data-bind="click: addToCart">Add to cart</button>
          </div>
        /* </Col>
      </Row>
    </Grid> */
  )
}

const Home = ({ food, selectedItem }) => {
  return (
    <Grid>
<<<<<<< HEAD
    <div className='y-acont'>
      {
        food.map((item, index) => {
          return <Maps key={index} item={item} index={index} />
        })
      }
    </div>
    </Grid>
=======
    <Row>
        <Shopping_car />
    </Row> 
    <Row>
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <hr />
          <button className="add-to-cart">Add to cart</button>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <hr />
          <button className="add-to-cart">Add to cart</button>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <hr />
          <button className="add-to-cart">Add to cart</button>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <hr />
          <button className="add-to-cart">Add to cart</button>
        </Thumbnail>
      </Col>
      <Col xs={6} md={4}>
        <Thumbnail src="" alt="242x200">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <hr />
          <button className="add-to-cart">Add to cart</button>
        </Thumbnail>
      </Col>
    </Row>
  </Grid>
>>>>>>> 4c83e9ce03633bae94b4546bf7c9562b99a7c511
  )
}

const mapToProps = ({ food, selectedItem }) => ({ food, selectedItem });

export default connect(mapToProps)(Home);
