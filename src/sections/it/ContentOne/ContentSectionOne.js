import React from 'react'
import Content from './style'
import SectionTitle from './Components/SectionTitle'
import { StaticImage as Img } from 'gatsby-plugin-image'
import { Col, Container, Row } from 'react-bootstrap'

export default function ContentSectionOne(){
return(
<Content backgroundColor="#f3f4f6">
  <Container>
    <Row className="align-items-center justify-content-center">
      <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
        <Content.Box mb="65px">
        <SectionTitle
        subTitle="Where Quality meets Impact" 
        title="Our Commitment"
        text="As Europe is suffering under a lack of available workforce,
        East-Africa contains an unimaginable pool of highly-skilled talent 
        that is being wasted due to lack of opportunity. <br/><br/>Over the next 5 years, 
        our vision is to offer <b>world-class jobs to over 500 highly motivated 
        youths each year</b>, with a <b>quality standard much higher
        than what is available</b> in the global market."
        subTitleProps={{mb:"10px"}}
        titleProps={{mb:"10px",as:"h2"}}
        mb="69px" />
        </Content.Box>
        <div className="skillbar-wrapper">
          <b><a href="/for-devs">Learn how we are making this happen</a></b>
        </div>
        {/* <div className="skillbar-wrapper">
          {/* Single Skill Bar */}
          {/* <Progressbar percentage="65%" barFillColor="#15cda8" title="Prosperity" elemColor="#25373f" mb="30px"/> */}
          {/*/ .End Single Skill Bar */}
          {/* <Progressbar percentage="80%" barFillColor="#7984ee" title="Quality */}
{/* " elemColor="#25373f" mb="30px"/> */}
          {/* <Progressbar percentage="40%" barFillColor="#ff971d" title="Guaranty */}
{/* " elemColor="#25373f" mb="30px"/> */}
          {/* <Progressbar percentage="60%" barFillColor="#fd346e" title="Services" elemColor="#25373f" mb="30px"/> */}
        {/* </div> */}
      </Col>
      <Col xs="12" className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2">
        <div className="founder-overlay">
          <div className="founder-name">Jente Rosseel</div>
          <div className="founder-title">Co-Founder, Computer Scientist,<br/>Teacher & iTalanta Lead Engineer</div> 
          <div className="founder-socials">
            <ul className="d-none d-xl-flex list-unstyled">
              <li><a href="https://www.linkedin.com/in/jrosseel/" target="_blank"><i className="fab fa-linkedin text-primary"></i></a></li>
              <li><a href="https://github.com/jrosseel" target="_blank"><i className="fab fa-github text-primary"></i></a></li>
            </ul>
          </div>
        </div>
        <Content.Image>
          <Img className="w-100" src="../../../assets/image/it-services/jente-2.png" alt="Jente Rosseel, Co-Founder" layout="fullWidth" placeholder="blurred"/>
        </Content.Image>
      </Col>
    </Row>
  </Container>
</Content>

)
}