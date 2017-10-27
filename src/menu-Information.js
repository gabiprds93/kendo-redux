import React, { Component } from "react";
import "./menu-Information.css";
import { Grid, Row, Col } from "react-bootstrap";
import Carousel from "./carousel.js";

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
export default MenuInformation;
