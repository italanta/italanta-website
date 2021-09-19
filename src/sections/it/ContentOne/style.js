import styled from 'styled-components/macro';
import {
    Box,
    Heading,
    Paragraph
} from '~styled';

const Container = styled(Box)
`
    padding-top: 50px;
    padding-bottom: 36px;

    @media (min-width:768px) {
        padding-top: 70px;
        padding-bottom: 55px;
    }

    @media (min-width:992px) {
        padding-top: 110px;
        padding-bottom: 100px;
    }

    .founder-overlay {
        height: 0;
    }
        .founder-name {
            font-weight: bold;

            position: relative;
            top: 90px;
            left: 150px;
        }
        .founder-title {
            position: relative;
            top: 95px;
            left: 150px;
        }
        .founder-socials {
            position: relative;
            top: 100px;
            left: 150px;
        }
            .founder-socials a {
                margin-right: 6px;
                color: #FFB800;
            }
`

Container.Image = styled(Box)`
padding-bottom: 35px;

@media (min-width: 992px) {
    padding-bottom: 0;
}

@media (min-width: 1200px) {
    margin-left: 60px;
}
`

Container.Box = styled(Box)`

`




export default Container;