import React, { useRef } from 'react'
import Slider from "react-slick"
import { Images } from '~data'
import { Col, Container, Row } from 'react-bootstrap'
import TestimonialCard from './Components/Card'
 import Testimonial from "./style"
export default function TestimonialSection(){
const elSlider = useRef()

  const sliderConfig1 = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    centerPadding:false,
    autoPlay:true,
    slide:false,
    responsive: [
        {
            breakpoint: 20000,
            settings: 'unslick'
        },
        {
            breakpoint: 1200,
            settings: 'unslick'
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
  }
return(
<Testimonial backgroundColor="#f3f4f6">
    <Container className="container">
    <Row className="justify-content-center">
        <Col xs="12" className="col-12 col-lg-8 col-xl-9 col-xxl-7 text-center">
            <Testimonial.Box mb="30px" mbSM="40px" mbLG="100px">
                <Testimonial.Subtitle as="h6" fontColor="#ff5722" mb="30px">Don't take it from us</Testimonial.Subtitle>
                <Testimonial.Title as="h2">We would be nothing without our clients</Testimonial.Title>
            </Testimonial.Box>
            
        </Col>
        
    </Row>
    <Testimonial.SliderWrapper>
        <Slider 
        ref={elSlider}
        className="testimonial-slider row"
        {...sliderConfig1}
        >
            <Col className="col-lg-6 col-md-12">
                <TestimonialCard 
                    title="Geoffroy Uyttenhove, CEO Syndic4you" 
                    image={Images.itServices.testiMonialUserImg1}
                    text="As a fast-growing SaaS in Belgium and France, it's important to have partners we can rely on. iTalanta handles our technology end-to-end.
                    With support from their Belgian and global talent, we are able to deliver on our promise – offering the best real-estate management platform in the world!" />
            </Col>
            <Col className="col-lg-6 col-md-12">
                <TestimonialCard
                    title="Wim Bellemans, Founder Spotlights BV" 
                    image={Images.itServices.testiMonialUserImg2}
                    text="Searching for a partner to develop my MVP, I talked to many software agencies. With iTalanta, things
                    were different. They took the time to understand my use case and provided me with an offer
                    based on my unique requirements and broken down in a language I could understand." />
            </Col>
            {/* <Col className="col-lg-4 col-md-12">
                <TestimonialCard text="There are many variations passages of Lorem lpsum available, but the majority have suffered alteration in some form, by injected or randomised." title="Jack Jill" image={Images.itServices.testiMonialUserImg3}/>
            </Col> */}
        </Slider>
    </Testimonial.SliderWrapper>
    
    </Container>
</Testimonial>
)
}