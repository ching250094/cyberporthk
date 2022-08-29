import styled, { css } from 'styled-components'
import HumanSvg from '../../assets/images/summary/startup_1.svg'
import WindowSvg from '../../assets/images/summary/startup_2.svg'
import MainContainer, { Heading } from './mainContainer'
import { Container, Statistics, Data } from './shared'

const ImageGroup = styled.div`
    display: flex;
    position: relative;
`

const HumanImage = styled.img.attrs({ src: HumanSvg })`
    position: relative;
    right: 8rem;
    width: 22rem;
`

const WindowImage = styled.img.attrs({ src: WindowSvg })`
    position: absolute;
    bottom: .5rem;
    right: 0;
    max-width: 750px;
    min-width: 700px;
`

const headingCss = css`
    ${Heading}{
        color: #00B8F1;
    }
`

export default function StartupAchievements() {
    return (
        <MainContainer heading='START-UP ACHIEVEMENTS' renderImage={() => renderImage()} css={headingCss}>
            <Container>
                <Statistics dataColor="#00B8F1">
                    <div>
                        <div>Accumulated funds raised</div>
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
                <HumanImage />
                <WindowImage />
            </ImageGroup>
        )
    }

}