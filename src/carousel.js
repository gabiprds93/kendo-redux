import React, { Component } from "react";
import "./menu-Information.css";
import { Carousel } from "react-bootstrap";
import { Grid, Row, Col } from "react-bootstrap";

const ControlledCarousel = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {
    //   alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

  render() {
    return (
      <Carousel
        activeIndex={this.state.index}
        direction={this.state.direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item> <br/>
            <Grid>
                <Row>
                    <Col className='show-menus' xs={6} md={4}>
                    <img
                        className='m-image'
                        width={190}
                        height={190}
                        alt="900x500"
                        src="http://sm.ign.com/ign_latam/screenshot/o/onepiece-u/onepiece-uvh4jpg_es4n.jpg"
                    />
                    <div>
                    </div>
                    </Col>
                    <Col className='show-menus' xs={12} md={8} >
                    </Col>
                </Row>
            </Grid>
          
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        {/* </Carousel.Item>
        <Carousel.Item>
          <img
            width={150}
            height={300}
            alt="900x500"
            src="https://estaciongeek.mx/wp-content/uploads/2017/07/OnePiece_LiveAction_Hollywood.png"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            width={150}
            height={300}
            alt="900x500"
            src="http://ramenparados.com/wp-content/uploads/2016/02/onepiece1-1000x600.jpg"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>*/}
        </Carousel.Item> 
      </Carousel>
    );
  }
});

export default ControlledCarousel;
