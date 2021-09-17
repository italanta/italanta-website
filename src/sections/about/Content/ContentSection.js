import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { StaticImage as Img } from 'gatsby-plugin-image'
import Content from './style'
import SectionTitle from './Components/SectionTitle'
export default function ContentSection(){
  return(
    <Content>
      <Container>
        <Content.InnerWrapper>
          <Row className="align-items-center justify-content-center">
            <Col xs="12" className="">
              <Content.Image mt="30px" mb="30px" mbMD="0" mtMD="0">
                <Img src="../../../assets/image/it-services/elewa-team.png" alt="content" layout="fullWidth" placeholder="blurred"/>
              </Content.Image>
            </Col>
          </Row>
        </Content.InnerWrapper>
      </Container>
    </Content>
    
    )
}