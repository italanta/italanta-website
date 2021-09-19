import React from 'react'
// import { Link } from '~components'
import styled from 'styled-components/macro'
import { Box } from '~styled'

const HeaderButtonWrapper = styled(Box).attrs({className:"header-btn-block"})`
    .btn{
        min-width:125px;
        height: 42px;
        border-radius: 3px;
        color: var(--bs-white);
        font-size: 13px;
        font-weight: 500;
        line-height: 1.2;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-left:15px;
        padding-right:15px;
        letter-spacing: -0.4px;
        color:#fff;
        margin-left:10px;
        background-color: #0033CC;
        border-color: #0033CC;
        box-shadow: 0 24px 50px rgba(25, 83, 255, 0.2);
        border-radius:500px;
        &:hover{
            box-shadow: 0 24px 50px rgba(25, 83, 255, 0.05);
            /* box-shadow: 0 0px 0px rgba(241, 139, 98, 0.3); */
        }
    }
`
const HeaderButton = ({btnLink,btnText,as,...rest})=>{
    return(
        <HeaderButtonWrapper {...rest}>
            <Box as={as} target="_blank" className="btn" to={btnLink ? btnLink : "/"}>
                {btnText}
            </Box>
        </HeaderButtonWrapper>
    )
}

export default HeaderButton;