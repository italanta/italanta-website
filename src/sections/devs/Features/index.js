import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Images } from "~data";
import TabContentWidget from "./Component/TabContentWidget";
import TabNavWidget from "./Component/TabNavWidget";
import Feature from "./style";
const FeatureSection = ({ ...rest }) => {
  return (
    <Feature>
      <Feature.Shapes>
        <img src={Images.marketing.featureShape1} alt="shape1" className="w-100"/>
        <Feature.ShapeTwo>
          <img src={Images.marketing.featureShape2} className="w-100" alt="shape1"/>
        </Feature.ShapeTwo> 
      </Feature.Shapes>
      
      <Container>
        <Row>
          <Col xs="auto" className="col-xl-8 col-lg-10">
            <Feature.Box mb="35px" mbMD="80px" mbLG="148px">
              <Feature.Title className="mb-5" as="h2" fontColor="#fff">
                An offer for every stage<br className="d-none d-xs-block" />
                of <span style={{color: `#ff971d`}}>your</span> development.
              </Feature.Title>
              <Feature.Text className="mt-8" fontColor="#fff">
                Regular academy intakes, quarterly apprenticeship recruitements and continuous open positions for senior development, UX/UI, QA and project
                management.
                {/* <br className="d-none d-xs-block" />. */}
              </Feature.Text>
            </Feature.Box>
          </Col>
        </Row>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first"
        >
          <Feature.Tab>
            <Col className="col-xxl-3 col-lg-3 col-md-12 col-xs-10 col-12">
              <Feature.TabNavWrapper className="nav row ms-0 me-0" as={Nav}>
                <Nav.Link
                  eventKey="first"
                  className="nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  <TabNavWidget iconClass="fas fa-graduation-cap" text="For newlings" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
                <Nav.Link
                  eventKey="second"
                  className="col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                   <TabNavWidget iconClass="fas fa-seedling" text="For juniors" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
                <Nav.Link
                  eventKey="third"
                  className="widget widget--feature nav-item col-lg-12 col-md-4 col-xs-6 col-8 me-md-0 me-lg-0"
                >
                  <TabNavWidget iconClass="fas fa-dumbbell" text="For seniors" className="nav-widget" mb="30px" mbLG="50px"/>
                </Nav.Link>
              </Feature.TabNavWrapper>
            </Col>
            <Col xs="auto" className="col-xxl-9 col-lg-9 col-md-12 col-sm-12">
            <Tab.Content className="tab-content tab-content--feature">
              <Tab.Pane eventKey="first">
                <Row className="align-items-center">
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget count="Academy" 
                      title="iTalanta Academy. Frequent intakes!" 
                      text={`
                        We encourage new graduates to join our campus in <br class="d-none d-lg-block" /> 
                        Nairobi or Kakuma which prepares you for the start <br class="d-none d-lg-block" /> 
                        of a professional carreer. We mostly recruit from our <br class="d-none d-lg-block" />
                        campus graduates. New areas opening soon!`}/>
                  </Col>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget 
                      count="e-Academy" 
                      title="iTalanta e-cadamy. Start learning anytime" 
                      text={`
                        <b>[Coming soon!]</b> Our online academy will start soon <br class="d-none d-lg-block" /> 
                            and take in cohorts on bi-weekly basis. Our online <br class="d-none d-lg-block" /> 
                            campus is accessible to anyone, offering access<br class="d-none d-lg-block" />
                            to fast learning and world-class coaches!`}/>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget 
                      count="Kuza Talanta" 
                      title="High-Potential Apprenticeships" 
                      text={
                        `Break into a software development carreer by <br class="d-none d-lg-block" /> 
                         joining our junior program. Apprentices work in<br class="d-none d-lg-block" /> 
                         teams on international client projects while up-<br class="d-none d-lg-block" />
                         skilling to senior in the shortest of time.`}/>
                  </Col>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget 
                      count="The Goal" 
                      title="Enter the House of Talent"
                      text={
                        `Succesful apprentices are offered long-term opp-<br class="d-none d-lg-block" /> 
                         ortunities to further their global carreer in software<br class="d-none d-lg-block" /> 
                         -development, -management, -quality, -product, <br class="d-none d-lg-block" />
                         -sales and architecture/solution-design.<br class="d-none d-lg-block" />
                         <i>We also support special tracks for entrepreneurship, tech education and talent development.</i>`}/>
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                  >
                    <TabContentWidget 
                      count="Makazi Talanta" 
                      title="Access global opportunities" 
                      text={
                        `Join our House of Talent with well-equipped<br class="d-none d-lg-block" />
                         campuses across different locations in East-<br class="d-none d-lg-block" /> 
                         Africa and access global, top 1% tech opportunities.<br class="d-none d-lg-block" />
                         <i>We are an equal-opportunity employer with special attention to growth and work-life balance.</i>`
                    }/>
                  </Col>
                  <Col
                    className="col-md-6 col-sm-6 col-xs-9"
                    xs="auto"
                    
                  >
                    <TabContentWidget 
                      count="Digital Nomads" 
                      title="Work from heaven" 
                      text={
                        `Work from any of our campuses as you discover<br class="d-none d-lg-block" />
                        the vibrant city-life of Nairobi one week; Head<br class="d-none d-lg-block" /> 
                        into the plains of Nanyuki the week after; Top<br class="d-none d-lg-block" /> 
                        it off with some code at the beach.<br class="d-none d-lg-block" />
                        All while not missing a day of work.<br class="d-none d-lg-block" />
                        <i>Contact us for individual or corporate packages.</i>`
                      }/>
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          </Feature.Tab>
        </Tab.Container>
      </Container>
    </Feature>
  )
}

export default FeatureSection
