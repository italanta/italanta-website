import React from 'react';

import { Col, Container, Row } from "react-bootstrap";

import { Link } from '~components';

import ImageGroup from "./Components/ImageGroup";
import Hero from "./style"

export default function HeroSection()
{
  return(
    <Hero>
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-start">
          {/* Welcome content Area */}
          <Col xs="12" className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-11">
            <div className="welcome-content welcome-content--l3">
              <Hero.Subtitle>Local Presence, Global Resources</Hero.Subtitle>
              <Hero.Title>Discover, Develop, Deploy  <br className="d-none d-xs-block" /></Hero.Title>
              <Hero.Text>We develop products, apps and the teams to grow them, <br className="d-none d-sm-block" />
                so that you can grow the business.</Hero.Text>
              <Hero.BtnGroup>
                <Hero.Button className="btn-primary btn-1 text-white" as={Link} to="/about-us">Learn More</Hero.Button>
                <Hero.Button className="btn-electric-violet-2 btn-2" as={Link} to="/contact">Start building</Hero.Button>
              </Hero.BtnGroup>
            </div>
          </Col>
          {/*/ .Welcome Content Area */}
          {/*Welcome Image Area */}
          <Col xs="12" className="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-6 position-static d-none d-lg-block">
              <ImageGroup/>
          </Col>
          {/*/ .Welcome Image Area */}
        </Row>
      </Container>
    </Hero>
  );
}