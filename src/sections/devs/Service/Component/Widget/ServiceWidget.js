import React from "react"
import { SuperTag } from "~components";
import Widget from "./style"
export default function ServiceWidget({icon,title,text,linkText, link, ...rest}) {
  return (
    <Widget {...rest}>
      <Widget.Icon>
        <img src={icon} alt="service icon" />
      </Widget.Icon>
      <Widget.Body>
        <Widget.Title>{title}</Widget.Title>
        <Widget.Text>
          <SuperTag value={text}/>
          <a className="tlink" href={link} target="_blank">{linkText}</a>
        </Widget.Text>
      </Widget.Body>
    </Widget>
  )
}
