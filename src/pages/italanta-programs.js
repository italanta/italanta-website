import React from "react";

import { PageWrapper } from "~components/Core"
import HeaderButton from "~sections/it/Header"
import FeatureSection from '~sections/it/Feature'
import ContentSectionOne from '~sections/it/ContentOne'
import ProcessSection from '~sections/it/Process'
import ContactSection from '~sections/it/Contact'
import FooterThree from '~sections/it/FooterThree'

const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--with-border site-header--sticky",
  containerFluid:false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnText="Purchase"
      mr="15px"
      mrLG="0"
    />
  ),
}

export default function HomeIt() {
  return (
    <PageWrapper headerConfig={header}>
        <FeatureSection/>
        <ProcessSection/>  
        <ContentSectionOne/>
        <ContentSectionOne/>
        <ContentSectionOne/>
        <ContactSection/>
        <FooterThree/>
    </PageWrapper>
  )
}