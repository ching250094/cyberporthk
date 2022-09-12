import styled, { css } from 'styled-components'
import CummunityPng from '../../assets/images/summary/community_1.png'
import CummunityBg from '../../assets/images/summary/community_bg.png'
import MainContainer, { Heading, TitleTag } from './mainContainer'
import { Container, Statistics, Data } from './shared'

const ImageGroup = styled.div`
    display: flex;
    img {
        width: 40rem;
    }
`


const headingCss = css`
    ${Heading}{
        color: #0069B5;
        font-family: Arial, Helvetica, sans-serif;
    }
    ${TitleTag}{
        background-color: #0069B5;
    }
`

/* eslint-disable jsx-a11y/alt-text */

export default function CyberportCommunity() {
    return (
        <MainContainer background={CummunityBg} heading='CYBERPORT COMMUNITY' renderImage={() => renderImage()} css={headingCss}>

            <Container>
                <div>No. of Companies</div>
                <Statistics dataColor="#0069B5">
                    <div>
                        <div>Fintech</div>
                        <Data>398</Data>
                    </div>
                    <div>
                        <div>Community Companies</div>
                        <Data>
                            <div>180+</div>
                            <div>onsite: 800+</div>
                            <div>offsite: 900+</div>
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
                
                <img src={CummunityPng} />
            </ImageGroup>
        )
    }

    

}