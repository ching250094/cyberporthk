import styled, { css } from 'styled-components'
import CultivationSvg from '../../assets/images/summary/cultivation.svg'
import MainContainer, { Heading } from './mainContainer'
import { Container, Statistics, Data } from './shared'

const ImageGroup = styled.div`
    display: flex;
    img {
        width: 40rem;
    }
`

const headingCss = css`
    ${Heading}{
        color: #0055AD;
    }
`

/* eslint-disable jsx-a11y/alt-text */

export default function CyberportCommunity() {
    return (
        <MainContainer heading='TALENT CULTIVATION' renderImage={() => renderImage()} css={headingCss}>
            <Container>
                <Statistics dataColor="#0055AD">
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
                <img src={CultivationSvg} />
            </ImageGroup>
        )
    }

}