import { Link } from '~components'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Images } from '~data'
import Footer from "./style"
export default function FooterThree(){
return(
    <Footer>
    <Container>
        <Footer.Box pbXL="95px">
        <Row>
            <Col xs="12" className="col-lg-4 col-md-8 col-xs-10">
            <Footer.Widgets className="footer-widgets footer-widgets--l7">
                {/* Brand Logo*/}
                <Footer.Box mb="30px">
                    <Link  to="#">
                        <img id="logo-footer" src={Images.FooterSix.LogoBlack} alt="logo" />
                    </Link>
                </Footer.Box>
                <Footer.Text mb="36px">
                <b>Discover, Develop, Deploy!</b><br className="d-none d-xl-block" />Developing products, apps and the teams to grow <br/> them,
so that you can grow the business.</Footer.Text>

            </Footer.Widgets>
            </Col>
            <Col xs="12" className="col-lg-8">
            <Row>
                <Col xs="12" className="col-lg-4 col-xs-6">
                    <Footer.Widgets>
                        <Footer.Title>Contact (BE)</Footer.Title>
                        <Footer.Address className="widgets-address">
                            <Footer.AddressItem>
                                <span>Krabos 22<br className="d-block" />
                                1501 Halle (BE)<br className="d-block" />
                                <a href="https://kbopub.economie.fgov.be/kbopub/toonondernemingps.html?ondernemingsnummer=780602847">BE0780.602.847</a></span>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <a href="tel+:0032479385504">+32 479 38 55 04
                                <span className="d-block"> 5 Days - 9am - 6pm </span> </a>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <a href="mailto:peter@italanta.net">contact@italanta.be</a>
                            </Footer.AddressItem>
                        </Footer.Address>
                    </Footer.Widgets>
                </Col>
                <Col xs="12" className="col-lg-4 col-xs-6">
                    <Footer.Widgets>
                        <Footer.Title>Contact (KE)</Footer.Title>
                        <Footer.Address className="widgets-address">
                            <Footer.AddressItem>
                                <span>3rd Floor, The Promenade,<br className="d-block" /> 
                                General Mathenge Rd.<br className="d-block" />
                                Nairobi (KE)</span>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <a href="tel+:00254789227755">+254 78 92 27 755
                                <span className="d-block"> 5 Days - 8am - 5pm </span> </a>
                            </Footer.AddressItem>
                            <Footer.AddressItem>
                                <a href="mailto:kennedy@italanta.net">kennedy@italanta.net</a>
                            </Footer.AddressItem>
                        </Footer.Address>
                    </Footer.Widgets>
                </Col>

                <Col xs="12" className="col-lg-4 col-xs-7">
                    <Footer.Widgets>
                        <Footer.Title>Links</Footer.Title>
                        <Footer.List>
                            <Footer.ListItems>
                                <a href="/">Home
                                us</a>
                            </Footer.ListItems>
                            <Footer.ListItems>
                                <a href="/about-us">About
                                us</a>
                            </Footer.ListItems>
                            <Footer.ListItems>
                                <a href="/for-devs">For Developers</a>
                            </Footer.ListItems>
                            <Footer.ListItems>
                                <a href="https://www.linkedin.com/company/italanta/" target="_blank">LinkedIn</a>
                            </Footer.ListItems>
                        </Footer.List>
                    </Footer.Widgets>
                </Col>
            </Row>
            </Col>
        </Row>
        </Footer.Box>
        <Footer.Copyright>
        <Footer.CopyrightText>© 2022 iTalanta BV. All Rights Reserved. Proud member of the Elewa Group.</Footer.CopyrightText>
        <Footer.SocialShare>
            {/* <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-facebook-square" />
                </a>
            </Footer.SocialShareItem> */}
            <Footer.SocialShareItem>
                <a href="https://github.com/iote" target="_blank">
                <i className="fab fa-github" />
                </a>
            </Footer.SocialShareItem>
            {/* <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-twitter" />
                </a>
            </Footer.SocialShareItem> */}
            {/* <Footer.SocialShareItem>
                <a href="#">
                <i className="fab fa-instagram" />
                </a>
            </Footer.SocialShareItem> */}
            <Footer.SocialShareItem>
                <a href="https://www.linkedin.com/company/italanta" target="_blank">
                <i className="fab fa-linkedin" />
                </a>
            </Footer.SocialShareItem>
        </Footer.SocialShare>
        </Footer.Copyright>
    </Container>
    </Footer>
)
}