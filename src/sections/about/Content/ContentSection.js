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
            <Col xs="12" className="col-lg-4 col-md-10 col-xs-11 text-center text-lg-start">
              {/* Section Title */}
              <SectionTitle 
                    subTitle="Our program" 
                    title="Three levels of <br class='d-none d-md-block d-lg-none'/> excellence. <br class='d-none d-md-block d-lg-none'/> Tailored to you"
                    text="You're professional growth is important to us! Whether you're taking your first steps into technology, or you're that experienced 10x engineer, 
                            you'll find  we provide a challenging and tailored environment. We're here to take care of you, so you can take care of our clients."
                    titleProps={{mb:"30px"}}
                    subTitleProps={{mb:"25px"}}
                    />
                    <Content.Button background="#FFB800" rounded={true} mt="25px">
                      View our vacancies
                    </Content.Button>
            </Col>
            <Col xs="12" className="col-xxl-5 col-lg-4 col-md-6 col-xs-9">
              <Content.Image mt="30px" mb="30px" mbMD="0" mtMD="0">
                <Img src="../../../assets/image/home-agency/content-1-l5-img.png" alt="content" layout="fullWidth" placeholder="blurred"/>
              </Content.Image>
            </Col>
            <Col xs="12" className="col-xl-3 col-lg-4 col-md-6 col-xs-9 order-3">
              <Content.WidgetsWrapper mb="-10px" mtMD="40px" mtLG="0" mrXS="70px" mrMD="30px" mrLG="0">
                {/* Single Services */}
                <Content.Widget pb="10px">
                  <Content.WidgetTitle>Gundua Talanta</Content.WidgetTitle>
                  <Content.WidgetText>
                    Swahili for 'Discover Talent', our first phase invests in talented youth breaking
                    into the tech space.
                  </Content.WidgetText>
                </Content.Widget>
                {/*/ .Single Services */}
                {/* Single Services */}
                <Content.Widget pb="10px">
                  <Content.WidgetTitle>Kuza Talanta</Content.WidgetTitle>
                  <Content.WidgetText>
                    Our Kuza Talanta program offers a two-year talent accelerator program, 
                    where members work in teams on assignments from local and global customers.
                  </Content.WidgetText>
                </Content.Widget>
                {/*/ .Single Services */}
                {/* Single Services */}
                <Content.Widget pb="10px">
                  <Content.WidgetTitle>Makaza Talanta</Content.WidgetTitle>
                  <Content.WidgetText>
                    Our 'House of Talent' hosts only the best senior engineers, from
                    Kenya and abroad and spread over our many campuses.
                  </Content.WidgetText>
                </Content.Widget>
                {/*/ .Single Services */}
                <Content.Widget>
                  <a href="#">
                    <b>Join the team</b>
                  </a>
                </Content.Widget>
              </Content.WidgetsWrapper>
            </Col>
          </Row>
        </Content.InnerWrapper>
      </Container>
    </Content>
    
    )
}