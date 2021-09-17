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
                title="Meet the minds shaping <br class='d-none d-xs-block'>your digital business"
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
              <TeamCard image={Images.itServices.jente} userName="Jente Rosseel" userPosition="CEO"/>
              <TeamCard image={Images.itServices.peter} userName="Peter Reinartz" userPosition="Management"/>
              <TeamCard image={Images.itServices.ken} userName="Kennedy Adhola" userPosition="Management"/>
              <TeamCard image={Images.itServices.joyce} userName="Joyce Njoki" userPosition="Support"/>
              <TeamCard image={Images.itServices.denis} userName="Denis Githinji" userPosition="Engineer"/>
              <TeamCard image={Images.itServices.esther} userName="Esther Bidali" userPosition="Engineer"/>
              <TeamCard image={Images.itServices.noella} userName="Noella Mwanzia" userPosition="Engineer"/>
              <TeamCard image={Images.itServices.joylinda} userName="Joy Linda" userPosition="Engineer"/>
              <TeamCard image={Images.itServices.fatuma} userName="Fatuma Abdullahi" userPosition="Engineer"/>
            </Slider>
            </Team.SliderWrapper>
      </Container>
    </Team>
  )
}
