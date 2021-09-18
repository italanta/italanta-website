import React from "react"
import { Navbar } from "react-bootstrap"
import siteBrandDark from "~image/logo/logo-black.png"
import siteBrandLight from "~image/logo/logo-white.png"
import Menu from "./Menu"
const SiteNavbar = ({buttonBlock,darkLogo,customLogo,defaultLogo}) => {

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="site-navbar"
      >
        <Navbar.Brand href="/">

          {defaultLogo ? (<img src={defaultLogo} alt="site-brand" id="h-logo" />) : customLogo ? (
            <img src={customLogo} id="h-logo" alt="site-brand"/>
          ) : (
            <img src={darkLogo ? siteBrandDark : siteBrandLight} id="h-logo" alt="site-brand"/>
          )}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="hamburgur"
        />
        <Menu/>
        {buttonBlock}
      </Navbar>
    </>
  )
}

export default SiteNavbar
