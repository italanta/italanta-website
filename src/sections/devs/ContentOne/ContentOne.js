import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ImageGroup from './Components/ImageGroup'
import Content from "./style"

export default function ContentSectionOne({...rest}){
return(
<>
<Content backgroundColor="#fff" {...rest}>
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col xs="10" className="col-xl-5 col-lg-5 col-md-6 col-xs-8">
        <ImageGroup mb="60px" mbLG="0"/>
      </Col>
      {/* Content Widgets */}
      <Col xs="auto" className="col-xxl-4 col-xl-5 offset-xl-1 col-lg-6 offset-lg-1 col-md-8 col-xs-9">
        <Content.Title as="h2">Marketer <br /> to Senior Dev<br /> in one year.</Content.Title>
        <Content.Text>
          <p>Meet Esther, a Bachelor in Communication graduate who, while working as a marketer, 
          upskilled herself as a developer to the point where she could join the apprenticeship program. </p>
          <p>
            Since then, her growth has been phenomenal! Esther is the fastest apprentice to ever clear our program and
            now works as a solution designer for one of our European startup. 
          </p>
        </Content.Text>
      </Col>
    </Row>
  </Container>
</Content>

</>
)
}