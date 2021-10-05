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
import FooterOne from "~sections/devs/FooterOne"
import HeaderButton from "~sections/devs/Header"

import { header } from '../elements/header';

export default function Marketing() {
  return (
    <PageWrapper headerConfig={header}>
      <HeroSection/>
      <ServiceSection/>
      <FeatureSection/>
      <ContentSectionOne/>
      <ContentSectionTwo/>
      <TestimonialSection />
      <CounterSection/>
      <CtaSection />
      <FooterOne/>
    </PageWrapper>
  )
}
