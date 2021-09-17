import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Feature from "./style"
import { StaticImage as Img } from "gatsby-plugin-image"

import SectionTitle from "./Components/SectionTitle"
import CounterBlock from "./Components/CounterBlock"

export default function FeatureSection() {
  return (
    <Feature backgroundColor="#fff">
      <Container>
        {/* Section Title */}
        <Row>
          <Col className="col-xl-8 col-lg-10">
            <Feature.Box>
              <SectionTitle
                subTitle=" Italanta - High Quality Talent"
                title="East Africa's powerhouse for <br class='d-none d-xs-block'>
                quality IT talent!"
                titleProps={{ mb: "33px" }}
                subTitleProps={{ mb: "20px" }}
              />
            </Feature.Box>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
            <Feature.Box>
              <Feature.Text mrLG="30px">
                “Talanta” is the Swahili word for Talent. We aim to Discover,
                Develop and Deploy talent in the Information Technology Domain.
                We have local presence in the EU and US where we work with
                clients to address tech needs.
              </Feature.Text>
            </Feature.Box>
          </Col>
          <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
            <Feature.Box>
              <Feature.Text mrLG="30px">
                Spinning off our famous Elewa Academy in Brussels, we are
                training East-African software-engineers on cutting-edge
                technology through personalized apprenticeship-programs and
                on-the-job training. Internally and with international clients.
              </Feature.Text>
            </Feature.Box>
          </Col>
        </Row>
        {/*/ .Section Title */}
        {/* Feature Content */}
        <Row className="align-items-center justify-content-center">
          <Col xs="12" className="col-lg-6 col-md-12">
            <Feature.Image mb="30px">
              <Img
                className="w-100"
                src="../../../assets/image/it-services/feature-l3-image.png"
                alt="it-service"
                layout="fullWidth"
                placeholder="blurred"
              />
            </Feature.Image>
          </Col>
          <Col className="col-lg-6 col-md-12">
            <Feature.Box>
              {/* Feature List */}
              <Feature.Contentlist mbLG="65px" mb="30px">
                <Feature.List> iTalanta Academy</Feature.List>
                <Feature.List> iTalanta Apprenticeship Program</Feature.List>
                <Feature.List> House of Talent</Feature.List>
              </Feature.Contentlist>
              {/*/ .Feature List */}
              <CounterBlock mt="50px" />
            </Feature.Box>
          </Col>
        </Row>
        {/*/ .Feature Content */}
      </Container>
    </Feature>
  )
}
