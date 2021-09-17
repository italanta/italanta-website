import React from "react"
import Content from "./style"
import SectionTitle from "./Components/SectionTitle"
import { StaticImage as Img } from "gatsby-plugin-image"
import { Col, Container, Row } from "react-bootstrap"
import Progressbar from "./Components/Progressbar"
export default function ContentSectionOne() {
  return (
    <Content backgroundColor="#f3f4f6">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1">
            <Content.Box mb="65px">
              <SectionTitle
                subTitle="WE DISCOVER TALENT"
                title="Italanta Academy"
                text="The first phase of the iTalanta Programs is called “Gundua Talanta”, Swahili for “Discover Talent”. With the help of partners, we identify talented youth from disadvantaged communities, such as refugees, teenage mothers, incapacitated youngsters from slums, etc. <br/>


        Candidates only need to have finished secondary education, no prior IT knowledge is required. During the curriculum, students are supervised and supported by iTalanta coaches after which they are employable as “Junior Developers”.<br/>
        
        Candidates undergo an intensive 20-week hands-on curriculum, at no cost. The program has been developed and successfully deployed in Belgium, to prepare immigrants for the IT labor market, as coders"
                subTitleProps={{ mb: "10px" }}
                titleProps={{ mb: "10px", as: "h2" }}
                mb="69px"
              />
            </Content.Box>
          </Col>
          <Col
            xs="12"
            className="col-xl-7 col-lg-6 col-md-8 col-xs-10 order-1 order-lg-2"
          >
            <Content.Image>
              <Img
                className="w-100"
                src="../../../assets/image/it-services/elewa-team.png"
                alt="content"
                layout="fullWidth"
                placeholder="blurred"
              />
            </Content.Image>
          </Col>
        </Row>
      </Container>
    </Content>
  )
}
