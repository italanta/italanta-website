import React from "react";
import { PageWrapper } from "~components/Core";
import BreadCrumbSection from "~sections/about/BreadCrumb";
import AboutSection from '~sections/about/about'
import FeatureSection from '~sections/about/Feature'
import ContentSection from '~sections/about/Content'
import TeamSection from '~sections/about/Team'
import PromoSection from '~sections/about/Promo'
import FooterThree from '~sections/it/FooterThree';

export default function About() {
  return (
    <PageWrapper innerPage={true}>
        <BreadCrumbSection title="About" text="Talanta is the Swahili word for Talent. 
          We are a software agency that doubles as a talent accelerator. 
          From the first steps our clients and engineers take, to their rise into startdom. 
          We are with them all the way." />
        {/* <AboutSection/> */}
        {/* <FeatureSection/> */}
        <ContentSection/>
        <TeamSection/>
        <PromoSection/>
        <FooterThree/>
    </PageWrapper>
  )
}
