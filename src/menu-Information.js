import React, { Component } from "react";
import "./menu-Information.css";
import { Grid, Row, Col } from "react-bootstrap";
import ControlledCarousel from "./carousel.js";

const MenuInformation = () => {
  return (
    <Grid className=" block">
      <Row className="m-show-grid m-top-image" />
      <Row className="m-show-grid m-details">
        <ControlledCarousel />
      </Row>
      <Row className="m-show-grid m-bottom-image" />
    </Grid>
  );
};
export default MenuInformation;
