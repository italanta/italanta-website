import React from 'react'
import Counter from './style'
 
export default function CounterBlock({...rest}){
return(
<Counter {...rest}>
    <Counter.Wrapper>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter">45</span></Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Engineers in training</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter">18</span></Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Top-notch engineers</Counter.Text>
    </Counter.Single>
    <Counter.Single>
        <Counter.Title as="h3" fontColor="#fff"><span className="counter">3500</span>+</Counter.Title>
        <Counter.Text fontColor="#ffffffb3">Kenyan AAA coffee cups</Counter.Text>
    </Counter.Single>
    </Counter.Wrapper>
</Counter>
)
}