import React from "react";
import { PageWrapper } from "~components/Core";
import BreadCrumbSection from "~sections/contact/BreadCrumb";
import ContentSection from '~sections/about/Content'
import TeamSection from '~sections/about/Team'
import PromoSection from '~sections/about/Promo'
import FooterThree from '~sections/it/FooterThree';

import { header } from '../elements/header';

export default function ContactUs() {
  return (
    <PageWrapper headerConfig={header}>
        <BreadCrumbSection 
          title="We're eager to get to know you!"></BreadCrumbSection>
        {/* <AboutSection/> */}
        {/* <FeatureSection/> */}
        {/* <ContentSection/> */}
        {/* <TeamSection/> */}
        <PromoSection/>
        <FooterThree/>
    </PageWrapper>
  )
}
