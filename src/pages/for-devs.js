import React from "react"
import { PageWrapper } from "~components/Core"
import HeroSection from "~sections/devs/Hero"
import ServiceSection from "~sections/devs/Service"
import FeatureSection from "~sections/devs/Features"
import ContentSectionOne from "~sections/devs/ContentOne"
import ContentSectionTwo from "~sections/devs/ContentTwo"
import TestimonialSection from "~sections/devs/Testimonial"
import CounterSection from "~sections/devs/Counter"
import CtaSection from "~sections/devs/Cta"

import FooterThree from '~sections/it/FooterThree'

import { header } from '../elements/header';

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection/>
      <FeatureSection/>
      <ContentSectionOne/>
      <ContentSectionTwo/>
      <TestimonialSection />
      <CounterSection/>
      <ServiceSection/>
      <CtaSection />
      <FooterThree/>
    </PageWrapper>
  )
}
