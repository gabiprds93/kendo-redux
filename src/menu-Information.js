import React, { Component } from "react";
import "./menu-Information.css";
import { Grid, Row, Col } from "react-bootstrap";
import ControlledCarousel from "./carousel.js";

const MenuInformation = () => {
  return (
    <Grid className="container-fluid block">
      <Row className="show-grid top-image" />
      <Row className="show-grid details">
        <ControlledCarousel />
      </Row>
      <Row className="show-grid bottom-image" />
    </Grid>
  );
};
export default MenuInformation;
