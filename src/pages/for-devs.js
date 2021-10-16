import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/devs/Hero"
import ServiceSection from "~sections/devs/Service"
import FeatureSection from "~sections/devs/Features"
import ContentSectionOne from "~sections/devs/ContentOne"
import ContentSectionTwo from "~sections/devs/ContentTwo"

import FooterThree from '~sections/it/FooterThree'

import { header } from '../elements/header';

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection/>
      <FeatureSection/>
      <ContentSectionOne/>
  
      <ServiceSection/>
      
      <FooterThree/>
    </PageWrapper>
  )
}
