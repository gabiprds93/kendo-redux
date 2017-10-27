import React, { Component } from 'react';
import logo from './logo.svg';
import {connect} from 'redux-zero/react';
import './App.css';
import {addToCart} from './actions';
import {selectMenu} from './actions.js'
import { Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import {HashRouter, Switch, Route,NavLink,Redirect} from 'react-router-dom';

const Maps = ({ item, index, selectMenu, addToCart }) => {
  return (
    <div className="y-aplates">
      <a className="view-details" href="#/menu/1">
        <img classname="y-aimg" src={item.image} />
      </a>
      <strong className='y-astron'>{item.name}</strong>
      <span className="y-a-price"><span>$</span><span data-bind="text: price">{item.price}</span></span>
      <button className="add-to-cart" onClick={addToCart}>Add to cart</button>
    </div>
  )
}

const Home = ({ food, selectedItem }) => {
  return (
    <Grid>
    <div className='y-acont'>
      {
        food.map((item, index) => {
          return <Maps key={index} item={item} index={index}  selectMenu={() =>selectMenu(index)  addToCart={()=>addToCart(index)} />
        })
      }
    </div>
    </Grid>
  )
}

const mapToProps = ({ food, selectedItem }) => ({ food, selectedItem });

export default connect(mapToProps)(Home);
