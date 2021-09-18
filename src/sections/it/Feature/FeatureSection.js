import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Feature from './style'
import { StaticImage as Img } from 'gatsby-plugin-image'
import SectionTitle from './Components/SectionTitle'
import CounterBlock from './Components/CounterBlock'
export default function FeatureSection(){
return(
<Feature backgroundColor="#fff">
  <Container>
    {/* Section Title */}
    <Row>
      <Col className="col-xl-8 col-lg-10">
        <Feature.Box>
        <SectionTitle 
                subTitle="Our Key to Success" 
                title="Local Presence, Global Resources"
                titleProps={{mb:"33px"}}
                subTitleProps={{mb:"20px"}}
                />
        </Feature.Box>
      </Col>
    </Row>
    <Row>
      <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
        <Feature.Box>
          <Feature.Text mrLG="30px">
          <p>With a core experience in the startup and innovation space, iTalanta partners with clients as an <b>end-to-end technology solution provider</b>.</p>
          <p>Specialised over a series of different projects, we design holistic solutions that look beyond just the producy but that fit well with your vision, team and operations.</p>
          </Feature.Text>
        </Feature.Box>
      </Col>
      <Col xs="12" className="col-lg-6 col-md-12 mb-5 mb-lg-7">
        <Feature.Box>
          <Feature.Text mrLG="30px">
           <p>Our <b>local presence, global resources formula</b> allows us to offer 
           high- and cutting-edge technology quality at an unmatched price.</p>
           <p>We act as the bridge between your context and culture, and talent in the South. 
           Not lacking a short of highly-motivated talent, our academies currently train up 45 youth annually to international coding standards, scaling to 500 soon.
           </p>
          </Feature.Text>
        </Feature.Box> 
      </Col>
    </Row>
    {/*/ .Section Title */}
    {/* Feature Content */}
    <Row className="align-items-center justify-content-center">
      <Col xs="12" className="col-lg-6 col-md-12">
        <Feature.Image mb="30px">
          <Img className="w-100" src="../../../assets/image/it-services/team-big.png" alt="italanta-team" layout="fullWidth" placeholder="blurred"/>
        </Feature.Image>
      </Col>
      <Col className="col-lg-6 col-md-12">
        <Feature.Box>
          {/* Feature List */}
          <Feature.Contentlist mbLG="65px" mb="30px">
            <Feature.List>Developed and handling SaaS stack of the fastest acquired Belgian startup.</Feature.List>
            <Feature.List>14 developers actively on client projects, growing every month.</Feature.List>
            <Feature.List>4 developers dedicated to <a href="https://github.com/iote/elewa">open source</a>, high-impact projects.</Feature.List>
          </Feature.Contentlist>
          {/*/ .Feature List */}
          <CounterBlock mt="50px"/>
        </Feature.Box>
      </Col>
    </Row>
    {/*/ .Feature Content */}
  </Container>
</Feature>

)
}