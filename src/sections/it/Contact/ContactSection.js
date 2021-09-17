import React from 'react'
import Contact from './style'
import SectionTitle from './Components/SectionTitle'
import { Col, Container, Row } from 'react-bootstrap'
export default function ContactSection(){
return(
<Contact backgroundColor="#f3f4f6">
  <Container>
    <Row>
      <Col className="col-xl-7 col-lg-7">
        <Contact.Box >
            <SectionTitle
            subTitle="Contact Us" 
            title="Send A Message"
            text="We're here to help and answer any question you might have <br class='d-non d-lg-block'/>
            we look forward to hearing from you."
            subTitleProps={{mb:"10px"}}
            titleProps={{mb:"10px",as:"h2"}}
            mb="50px" />
        </Contact.Box>
        <Contact.From>
            <form action="./">
                    <Row>
                      <Col xs="12" className="col-lg-6 mb-4">
                        <div className="form-floating">
                          <input className="form-control" placeholder="Leave a comment here" id="floatinginput" />
                          <label htmlFor="floatinginput">Your Email</label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-6 mb-4">
                        <div className="form-floating">
                          <input className="form-control" placeholder="Leave a comment here" id="floatinginput2" />
                          <label htmlFor="floatinginput2">Phone number</label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea3"/>
                          <label htmlFor="floatingTextarea3">Your Message Here </label>
                        </div>
                      </Col>
                      <Col xs="12" className="col-lg-12">
                        <Row className="align-items-center mt-3">
                          <div className="col-md-8 col-lg-7 col-md-6 col-xl-8 pt-3">
                            <div className="form-check d-flex align-items-center">
                              <input className="form-check-input bg-white float-none mt-0" type="checkbox" defaultValue id="flexCheckDefault" />
                              <label className="form-check-label" htmlFor="flexCheckDefault">
                                Your email address will not be published. Required fields are marked *
                              </label>
                            </div>
                          </div>
                          <Col xs="12" className="col-md-4 col-lg-5 col-xl-4 text-md-end pt-3">
                            <Contact.Button>Send Message</Contact.Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </form>
        </Contact.From>
      </Col>
      <Col xs="12" className="col-xl-5 col-lg-5">
        <Contact.WidgetsBox className="contact-widget-box">
            <Contact.WidgetsBoxTitle as="h2">Get In Touch</Contact.WidgetsBoxTitle>
            <Contact.WidgetsBoxText as="p">You can visit our offices <br className="d-none d-xl-block" /> at Westalands for any further inquires you might have.</Contact.WidgetsBoxText>
          <Row>
            <Col xs="12" className="col-lg-12 col-sm-6">
              <Contact.Widgets>
                <Contact.WidgetsIcon>
                  <i className="fas fa-envelope" />
                </Contact.WidgetsIcon>
                <Contact.WidgetsBoxBody>
                  <Contact.WidgetsTitle as="h3">visit us :</Contact.WidgetsTitle>
                  <Contact.WidgetsText as="p">4th floor, Le'Mac, <br className="d-block" /> Church Rd, Nairobi</Contact.WidgetsText>
                </Contact.WidgetsBoxBody>
              </Contact.Widgets>
            </Col>
            <Col xs="12" className="col-lg-12 col-sm-6 active">
            <Contact.Widgets>
              <Contact.WidgetsIcon className="active">
                <i className="fas fa-phone-alt" />
              </Contact.WidgetsIcon>
              <Contact.WidgetsBoxBody>
                <Contact.WidgetsTitle as="h3">mail us :</Contact.WidgetsTitle>
                <Contact.WidgetsText as="p">info@italanta.com </Contact.WidgetsText>
              </Contact.WidgetsBoxBody>
              </Contact.Widgets>
            </Col>
            <Col xs="12" className="col-lg-12 col-sm-6">
            <Contact.Widgets>
              <Contact.WidgetsIcon>
                <i className="fas fa-map-marker-alt" />
              </Contact.WidgetsIcon>
              <Contact.WidgetsBoxBody>
                <Contact.WidgetsTitle as="h3">call us :</Contact.WidgetsTitle>
                <Contact.WidgetsText as="p">+254 78 92 27 755</Contact.WidgetsText>
              </Contact.WidgetsBoxBody>
              </Contact.Widgets>
            </Col>
          </Row>
        </Contact.WidgetsBox>
      </Col>
    </Row>
  </Container>
</Contact>

)
}