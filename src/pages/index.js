import React from "react";

import { PageWrapper } from "~components/Core";

import HeroSection from '~sections/it/Hero'
import ServicesSection from '~sections/it/Services'
import FeatureSection from '~sections/it/Feature'
import ContentSectionOne from '~sections/it/ContentOne'
import TestimonialSection from '~sections/it/Testimonial'
import ContactSection from '~sections/it/Contact'
import FooterThree from '~sections/it/FooterThree'

import { header } from '../elements/header';

export default function HomeIt() {
  return (
    <PageWrapper headerConfig={header}>
        <HeroSection/>
        <ServicesSection/>
        <FeatureSection/>
        <ContentSectionOne/>
        {/* <ProcessSection/> */}
        {/* <CtaSection/> */}
        <TestimonialSection/>
        <ContactSection/>
        <FooterThree/>
    </PageWrapper>
  )
}