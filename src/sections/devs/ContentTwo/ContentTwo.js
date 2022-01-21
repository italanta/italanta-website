import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImageGroup from './Components/ImageGroup'
 import Content from "./style"
export default function ContentSectionTwo({...rest}){
return(
<Content backgroundColor="#f8f9fc" {...rest}>
  <Container>
    <Row className="row align-items-center justify-content-center">
      <Col xs="12" className="col-xl-5 col-lg-6 col-md-7 col-md-7 col-xs-9 order-2 order-lg-1">
          <Content.Box mt="40px" mtLG="0px">
            <Content.Title as="h2">
              Always on the<br/> 
              search for<br />talent!</Content.Title>
            <Content.Text>
              Check out <a href="https://www.linkedin.com/company/elewa-company-ltf/jobs">open positions</a> and apply today!
              <br className="d-none d-sm-block" /><i className="disclaimer">iTalanta is a part of the Elewa Group.</i>
            </Content.Text>
          </Content.Box>
      </Col>
      <Col xs="12" className="col-xxl-4 col-xl-5 col-lg-5 offset-lg-1 col-md-7 col-xs-9 order-1 order-lg-2">
        <ImageGroup/>
      </Col>
    </Row>
  </Container>
</Content>
)
}