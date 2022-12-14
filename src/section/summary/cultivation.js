import styled, { css } from 'styled-components'
import CultivationPng from '../../assets/images/summary/cultivation.png'
import CultivationBg from '../../assets/images/summary/cultivation_bg.png'
import breakpoints from '../../style/breakpoints'
import MainContainer, { Heading, TitleTag } from './mainContainer'
import { Container, Statistics, Data } from './shared'

const ImageGroup = styled.div`
    display: flex;
    img {
        width: 40rem;
    }
    @media only screen and ${breakpoints.pad} {
        img {
            width: 20rem;
        }
    }
`

const headingCss = css`
    ${Heading}{
        color: #5955A4;
    }
    ${TitleTag} {
        background-color: #5955A4;
    }
`

/* eslint-disable jsx-a11y/alt-text */

export default function CyberportCommunity() {
    return (
        <MainContainer background={CultivationBg} heading='TALENT CULTIVATION' renderImage={() => renderImage()} css={headingCss}>
            <Container>
                <Statistics dataColor="#5955A4">
                    <div>
                        <div>Digital technology interns during the year</div>
                        <Data>xxx</Data>
                    </div>
                    <div>
                        <div>Accumulated no. of participants for Cyberport University Partnership Programme (CUPP)</div>
                        <Data>419</Data>
                    </div>
                    <div>
                        <div>Accumulated no. of grantees of Cyberport Creative Micro Fund (CCMF)</div>
                        <Data>744</Data>
                    </div>
                    <div>
                        <div>Accumulated no. of incubatees of Cyberport incubation Programme (CIP)</div>
                        <Data>1,026</Data>
                    </div>
                </Statistics>
            </Container>
        </MainContainer>
    )

    function renderImage() {
        return (
            <ImageGroup>
                <img src={CultivationPng} />
            </ImageGroup>
        )
    }

}