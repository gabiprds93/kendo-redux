import React, { Component } from "react";
import "./menu-Information.css";
import { Grid, Row, Col, Table, Button } from "react-bootstrap";
import MenuInformation from "./menu-Information";
import store from "./store";
import Slider from "react-slick";
import {connect} from 'redux-zero/react';

const Carousel = ({ food, selectedItem   }) => {
  class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const thisMenu = () => {
          return(
            <div className="row">
            <div className="col-md-3">
              <div />
              <img
                src={food[0].image} 
              />
            </div>
            <div className="col-md-6 m-colI">
              <h1>{food[0].name}</h1>
              <small id='m-small'>{food[0].description}</small>
              <br/><br/><br/>
              <div className='m-line' >
                <label><p id="price-quantity">$ {food[0].price}</p></label>
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
                <td>{food[0].protein}</td>
              </tr>
              <tr>
                <td>Fat(total)</td>
                <td>{food[0].fat}</td>
              </tr>
              <tr>
                <td>Carbohydrate</td>
                <td>{food[0].carbohydrate}</td>
              </tr>
              <tr>
                <td>Energy(k)</td>
                <td>{food[0].energykJ}</td>
              </tr>
              <tr>
                <td>Energy(kcal)</td>
                <td>{food[0].energykcal}</td>
              </tr>

              <tr>
                <td>Sugar</td>
                <td>{food[0].sugar}</td>
              </tr>
            </Table>
          </div>
          )
      }
      const menuTd = food.map((a, index) => {
        console.log('menu:', index)
        return (
          <div className="row">
            <div className="col-md-3">
              <div />
              <img
                src={a.image} 
              />
            </div>
            <div className="col-md-6 m-colI">
              <h1>{a.name}</h1>
              <small id='m-small'>{a.description}</small>
              <br/><br/><br/>
              <div className='m-line' >
                <label><p id="price-quantity">$ {a.price}</p></label>
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
                <td>{a.protein}</td>
              </tr>
              <tr>
                <td>Fat(total)</td>
                <td>{a.fat}</td>
              </tr>
              <tr>
                <td>Carbohydrate</td>
                <td>{a.carbohydrate}</td>
              </tr>
              <tr>
                <td>Energy(k)</td>
                <td>{a.energykJ}</td>
              </tr>
              <tr>
                <td>Energy(kcal)</td>
                <td>{a.energykcal}</td>
              </tr>

              <tr>
                <td>Sugar</td>
                <td>{a.sugar}</td>
              </tr>
            </Table>
          </div>
        );
      });
      return (
        <Slider {...settings}>
          <div className="container">
            {menuTd}
          </div>
        </Slider>
      );
    }
  }
  return (
    <div>
      <SimpleSlider />
    </div>
  );
};

const mapToProps = ({food, selectedItem}) => ({food, selectedItem});

export default connect(mapToProps)(Carousel);
