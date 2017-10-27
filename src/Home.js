import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import MenuInformation from './menu-Information.js'
import './App.css';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Home = ({food,selectedItem}) => {
  return(
    <Grid>
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
    <MenuInformation food = {food} selectedItem={selectedItem}/>
  </Grid>
  )
}

const mapToProps = ({food,selectedItem}) =>({food,selectedItem});

export default connect(mapToProps)(Home);
