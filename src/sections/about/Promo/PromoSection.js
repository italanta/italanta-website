import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Images } from '~data'
import Promo from './style'
import { Link } from '~components';
 
export default function PromoSection({...rest}){
return(
<Promo backgroundColor="#0033cc">
  <Container>
    <Row className="justify-content-center text-center">
      <Col className="col-xl-8">
        <Promo.Content>
          <Promo.Title fontColor="#fff" as="h2" mb="45px">Interested in joining our team? </Promo.Title>
          <Promo.Button as={Link} to="/for-devs" background="#FFB800">Check out our developer offers</Promo.Button>
        </Promo.Content>
      </Col>
    </Row>
  </Container>
  <Promo.Shape>
    <img className="w-100" src={Images.PageAboutUs.InnerPromoShape} alt="inner shape" />
  </Promo.Shape>
</Promo>

)
}