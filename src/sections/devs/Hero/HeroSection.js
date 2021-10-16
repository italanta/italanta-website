import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "~components";
import { Button } from "~styled";
import ImageGroup from "./Components/ImageGroup";
import Hero from "./style";

export default function HeroSection() {
 
  return (
      <Hero className="position-relative bg-default">
        <Container>
          <Row>
            {/* Welcome content Area */}
            <Col
              className="col-xl-6 col-lg-7 col-md-8 col-xs-11 order-2 order-lg-1"
              xs="12"
            >
              <Hero.Content>
                <Hero.Title as="h1">
                  We help you boost your
                  <br />
                  
                  <ReactTypingEffect
                    text={["potential.", "mind.", "talent."]}
                    className="highlight-text d-inline-block text-primary"
                    speed="150"
                    eraseSpeed="100"
                    typingDelay="400"
                    eraseDelay="800"
                    cursorClassName="typed-cursor"
                  />
                </Hero.Title>
                <Hero.Text>
                  iTalanta is a global Talent Accelerator with a strong focus
                  <br className="d-none d-xs-block" /> 
                  on talent-development in East-Africa.
                </Hero.Text>
                {/* Newsletter */}
                <Row>
                  <Col xs="12" className="col-xxl-10">
                    <Hero.Newsletter>
                    <form>
                      <input type={"email"} name={"email"} placeholder="Enter your email" className="form-control"/>
                      <Button className="btn-blue" textTransform="capitalized" as={Link} to="https://www.linkedin.com/company/elewa/jobs/" target="_blank">Our open positions</Button>
                    </form>
                  </Hero.Newsletter>
                  <Hero.NewsletterText>
                    Are you already a (rising) star developer in East-Africa or Europe? <Link to="/">Join our Engineering Team.</Link>
                  </Hero.NewsletterText>
                  </Col>
                </Row>
              </Hero.Content>
            </Col>
            {/*/ .Welcome Content Area */}
            {/*Welcome Image Area */}
            <Col xs={12} className="col-xl-6 col-lg-5 col-md-10 order-1 order-lg-2 position-static">
              <ImageGroup/>
            </Col>
            {/*/ .Welcome Image Area */}
          </Row>
        </Container>
      </Hero>
  )
}
