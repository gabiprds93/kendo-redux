import React, { Component } from "react";
import "./menu-Information.css";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";
import MenuInformation from "./menu-Information";
import store from "./store";
import Slider from "react-slick";
import {connect} from 'redux-zero/react';


const ThisMenu = ({food, selectedItem}) => {
  return(
    <div className="row">
    <div className="col-md-3">
      <div />
      <img
        src={food[selectedItem].image} 
      />
    </div>
    <div className="col-md-6 m-colI">
      <h1>{food[selectedItem].name}</h1>
      <small id='m-small'>{food[selectedItem].description}</small>
      <br/><br/><br/>
      <div className='m-line' >
        <label><p id="price-quantity ">$ {food[selectedItem].price}</p></label>
        <Button bsClass="m-Add ">Add to cart</Button>
      </div>
    </div>
    <Table responsive className="col-md-3 m-table ">
    <br/>
      <tr>
        <th colSpan='2'>
          Nutritional Information
        </th>
      </tr><br/>
      <tr>
        <td>Protein</td>
        <td>{food[selectedItem].protein}</td>
      </tr>
      <tr>
        <td>Fat(total)</td>
        <td>{food[selectedItem].fat}</td>
      </tr> 
      <tr>
        <td>Carbohydrate</td>
        <td>{food[selectedItem].carbohydrate}</td>
      </tr>
      <tr>
        <td>Energy(k)</td>
        <td>{food[selectedItem].energykJ}</td>
      </tr>
      <tr>
        <td>Energy(kcal)</td>
        <td>{food[selectedItem].energykcal}</td>
      </tr>
      <tr>
        <td>Sugar</td>
        <td>{food[selectedItem].sugar}</td>
      </tr>
    </Table>
  </div>
  )
}


const Carousel = ({ food, selectedItem  }) => {
  
  class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
     

      return (
        <Slider {...settings}>
          <div className="container">
            <ThisMenu  food= {food} selectedItem={selectedItem} />
          </div>
        </Slider>
      );
    }
  }
  return (
    <div>
      <SimpleSlider food= {food} selectedItem={selectedItem} />
    </div>
  );
};

const mapToProps = ({food, selectedItem}) => ({food, selectedItem});

export default connect(mapToProps)(Carousel);
