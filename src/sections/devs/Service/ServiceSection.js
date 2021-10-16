import { StaticImage as Img } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceData from "~data/marketing/Service";
import ServiceWidget from "./Component/Widget";
import Service from "./style";

export default function ServiceSection() {
  return (
    <>
      <Service className="border-top border-default-color-2 bg-default">
        <Service.Shape className="service-shape service-shape--l1">
          <Img
            src="../../../assets/image/marketing/services-shape-l1.png"
            alt="shape dot"
            layout="fullWidth"
            placeholder="blurred"
          />
        </Service.Shape>
        <Container>
          {/* Section Title */}
          <Row className="align-items-end justify-content-center text-start">
            <Col xs="12" className="col-lg-7 col-md-12 col-xs-10">
                <Service.Title as="h2" mb="0">
                  Take your talent to the
                  <br className="d-none d-xs-block d-lg-none d-xl-block" />
                  next level, today!
                </Service.Title>
            </Col>
            <Col xs="12" className="col-lg-5 col-md-12 col-xs-10">
               <Service.Text>
                    You are unique, we know!
                    <br className="d-none d-xs-block" /> Whatever stage you are at..
                    <br className="d-none d-sm-block" /> Our 3-phased program tailors 
                    <br className="d-none d-sm-block" /> to your unique growth.
               </Service.Text>
            </Col>
          </Row>
            <Service.Box mtLG="100px" mtMD="40px">
              <Row className="justify-content-center justify-content-md-start">
                {/* Single Service */}
                {serviceData.services.map(({ title, icon,iconColor, text, linkText, link, id }) => {
                  return(<Col className="col-lg-4 col-xs-6 col-10" key={id}>
                  <ServiceWidget 
                    id={id} 
                    icon={icon} iconColor={iconColor}
                    title={title} text={text}  
                    linkText={linkText} link={link}
                    mt="40px" /></Col>) 
                })}
              </Row>
            </Service.Box>
        </Container>
      </Service>
    </>
  )
}
