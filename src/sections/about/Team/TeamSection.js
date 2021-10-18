import React from "react"
import Slider from "react-slick"
import { Images } from "~data"
import { Col, Container, Row } from "react-bootstrap"
import SectionTitle from './Components/SectionTitle'
import TeamCard from "./Components/Card"
import Team from "./style"
export default function TeamSection({...rest}) {
  const elSlider = React.useRef();

  const sliderConfig = {
    centerMode: true,
    centerPadding: "180px",
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 1,
          dots: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "100px",
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  }
  return (
    <Team {...rest} backgroundColor="#f3f4f6">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xxl-6 col-md-8 col-xs-10">
            <Team.Box className="text-center">
            <SectionTitle
                subTitle="Our Team" 
                title="Meet the innovators behind your technology"
                titleProps={{mb:"33px"}}
                subTitleProps={{mb:"20px"}}
                />
            </Team.Box>
          </Col>

        </Row>
          
      </Container>
      <Container fluid={true}>
      <Team.SliderWrapper>
            
            <Slider
              ref={elSlider}
              {...sliderConfig}
            >
              <TeamCard image={Images.PageAboutUs.JenteImg} userName="Jente Rosseel"       userPosition="Lead Engineer & CEO"      link="https://www.linkedin.com/in/jrosseel/"/>
              <TeamCard image={Images.PageAboutUs.LindaImg} userName="Linda Warui"         userPosition="Chief Operations Officer" link="https://www.linkedin.com/in/linda-warui/"/>
              <TeamCard image={Images.PageAboutUs.NoellaImg} userName="Noella Mwanzia"     userPosition="iTalanta Developer"       link="https://www.linkedin.com/in/noella-mwanzia-633803173/"/>
              <TeamCard image={Images.PageAboutUs.FatumaImg} userName="Fatuma Samatar"     userPosition="iTalanta Developer"       link="https://www.linkedin.com/in/fatuma-abdullahi-6b804948/"/>
              <TeamCard image={Images.PageAboutUs.JoyLindaImg} userName="Joy-Linda Wawira" userPosition="iTalanta Developer"       link="https://www.linkedin.com/in/joy-l-035438148/"/>
              <TeamCard image={Images.PageAboutUs.KenImg} userName="Kennedy Adhola"        userPosition="HR Director"              link="https://www.linkedin.com/in/kennedy-adhola-97570535/"/>
              <TeamCard image={Images.PageAboutUs.PeterImg} userName="Peter Reinartz"      userPosition="Executive Chairman"       link="https://www.linkedin.com/in/peter-reinartz-1b4452ab/"/>
              <TeamCard image={Images.PageAboutUs.EstherImg} userName="Esther Bidali"      userPosition="Solution Designer"        link="https://www.linkedin.com/in/esther-bidali-740b729a/"/>
            </Slider>
            </Team.SliderWrapper>
      </Container>
    </Team>
  )
}
