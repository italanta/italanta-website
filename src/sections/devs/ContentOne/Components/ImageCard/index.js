import React from "react"
import Card from "./style"
export default function ImageCard({...rest}) {
  return (
    <Card {...rest}>
      <Card.CounterBlock>
        <Card.Counter>1Y</Card.Counter>
        <Card.CounterBlockIcon>
          <i className="fa fa-arrow-up" />
        </Card.CounterBlockIcon>
      </Card.CounterBlock>
        <Card.Text>
          From junior to senior.
        </Card.Text>
    </Card>
  )
}
