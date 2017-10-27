import React, { Component } from "react";
import "./menu-Information.css";
import { Grid, Row, Col } from "react-bootstrap";
import Carousel from "./carousel.js";
import store from './store';
import {connect} from 'redux-zero/react';

const MenuInformation = ({food, selectedItem }) => {
  return (
    <Grid className="m-block">
      <Row className="m-show-grid m-top-image" />
      <Row className="m-show-grid m-details">
        <Carousel food={food} selectedItem={selectedItem} />
      </Row>
      <Row className="m-show-grid m-bottom-image" />
    </Grid>
  );
};

const mapToProps = ({food, selectedItem}) => ({food, selectedItem});

export default connect(mapToProps)(MenuInformation);
