import styled, { css } from 'styled-components'
import startupPng from '../../assets/images/summary/startup_1.png'
import startupBg from '../../assets/images/summary/startup_bg.png'
import MainContainer, { Heading, TitleTag } from './mainContainer'
import { Container, Statistics, Data } from './shared'

const ImageGroup = styled.div`
    display: flex;
    img {
        width: 25rem;
        margin-right: 5rem;
    }
`



const headingCss = css`
    ${Heading}{
        color: #C19A44;
    }
    ${TitleTag}{
        background-color: #C19A44;
    }
`

export default function StartupAchievements() {
    return (
        <MainContainer background={startupBg} heading='START-UP ACHIEVEMENTS' renderImage={() => renderImage()} css={headingCss}>
            <Container>
                <Statistics dataColor="#C19A44">
                    <div>
                        <div >Accumulated funds raised</div>
                        <Data>HK$ 33,908 m</Data>
                    </div>
                    <div>
                        <div>Accelerator programmes admitted</div>
                        <Data>219</Data>
                    </div>
                    <div>
                        <div>Accumulated property rights</div>
                        <Data>441</Data>
                    </div>
                    <div>
                        <div>Accumulated industry awards</div>
                        <Data>1,159</Data>
                    </div>
                </Statistics>
            </Container>
        </MainContainer>
    )

    function renderImage() {
        return (
            <ImageGroup>
                <img src={startupPng} />
               
            </ImageGroup>
        )
    }

}