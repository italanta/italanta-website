import React from 'react'
import BreadCrumb from './style'
import { StaticImage as Img } from 'gatsby-plugin-image'
import { Col, Row, Container  } from 'react-bootstrap'

function toggleChat()
{
  window.$chatwoot && window.$chatwoot.toggle();
}

export default function BreadCrumbSection({colClasses,title,...rest}){
return(
<BreadCrumb backgroundColor="#f3f4f6" {...rest}>
  <Container>
    <Row className="row justify-content-center text-center">
      <Col className={colClasses ? colClasses : "col-xl-7"}>
        <BreadCrumb.Title as="h2">{title}</BreadCrumb.Title>
        <p>
          There's multiple ways to reach us! Just <a href="#chat" onClick={toggleChat}>say hi on chat</a>, or 
          shoot an email to <a href="mailto:contact@italanta.net">contact@italanta.net</a>.
          <br/>
          See you soon!
        </p>
      </Col>
    </Row>
  </Container>
  {/* <BreadCrumb.Image>
    <Img className="w-100" src="../../../assets/image/mixed/inner-banner-shape.png" alt="shape" layout="fullWidth" placeholder="blurred"/>
  </BreadCrumb.Image> */}
</BreadCrumb>
)
}