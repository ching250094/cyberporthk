import styled, { css } from 'styled-components'
import LeftHumanSvg from '../../assets/images/summary/community_1.svg'
import WindowsSvg from '../../assets/images/summary/community_2.svg'
import RightHumanSvg from '../../assets/images/summary/community_3.svg'
import MainContainer, { Heading } from './mainContainer'
import { Container, Statistics, Data } from './shared'

const ImageGroup = styled.div`
    display: flex;
    img {
        width: 15rem;
    }
`

const headingCss = css`
    ${Heading}{
        color: #489F73;
    }
`

/* eslint-disable jsx-a11y/alt-text */

export default function CyberportCommunity() {
    return (
        <MainContainer heading='CYBERPORT COMMUNITY' renderImage={() => renderImage()} css={headingCss}>
            <Container>
                <div>No. of Companies</div>
                <Statistics dataColor="#489F73">
                    <div>
                        <div>Fintech</div>
                        <Data>398</Data>
                    </div>
                    <div>
                        <div>Community Companies</div>
                        <Data>
                            <div>180+</div>
                            <div>onsite: 800+</div>
                            <div>offsize: 900+</div>
                        </Data>
                    </div>
                    <div>
                        <div>Smart Living</div>
                        <Data>744</Data>
                    </div>
                    <div>
                        <div>Digital Entertainment and Esports</div>
                        <Data>151</Data>
                    </div>
                </Statistics>
            </Container>
        </MainContainer>
    )

    function renderImage() {
        return (
            <ImageGroup>
                <img src={LeftHumanSvg} />
                <img src={WindowsSvg} />
                <img src={RightHumanSvg} />
            </ImageGroup>
        )
    }

}