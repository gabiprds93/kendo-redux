import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
// import background from '/images/background-image.png';
import { Button } from 'react-bootstrap';

const Home = () => {
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
  </Grid>
  )
}

class App extends Component {
  render() {
    return (
      <div >
        <Grid className="y-acontain">
          <Row className="show-grid">
            <Col xs={4} md={4}>
              <h1>SUSH.</h1>
            </Col>
            <Col className="text-right" xs={8} md={8}>
              <a className="y-ashop" >Shopping Cart
            <span><span data-bind="text: cart.contentsCount">0</span> items</span>
              </a>
            </Col>
          </Row>
          <hr />
        </Grid>
        <Home />
      </div>
    );
  }
}

export default App;
