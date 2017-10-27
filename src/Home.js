import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'redux-zero/react';
import './App.css';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
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
    <div className='y-acont'>
      {
        food.map((item, index) => {
          return <Maps key={index} item={item} index={index} />
        })
      }
    </div>
    </Grid>
  )
}

const mapToProps = ({ food, selectedItem }) => ({ food, selectedItem });

export default connect(mapToProps)(Home);
