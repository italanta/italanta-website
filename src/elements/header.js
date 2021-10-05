import React from "react";
import HeaderButton from "~sections/it/Header";

export const header = {
  headerClasses: "site-header site-header--menu-start light-header site-header--with-border site-header--sticky",
  containerFluid:false,
  buttonBlock: (
    <HeaderButton
      className="ms-auto d-none d-xs-inline-flex"
      btnText="For devs"
      mr="15px"
      mrLG="0"
    />
  ),
}