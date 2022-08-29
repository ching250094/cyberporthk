import styled, { css } from 'styled-components'
import LeftHumanSvg from '../../assets/images/summary/industry_1.svg'
import RightHumanSvg from '../../assets/images/summary/industry_2.svg'
import WindowsSvg from '../../assets/images/summary/industry_3.svg'
import MainContainer, { Heading } from './mainContainer'
import { Container, Statistics, Data } from './shared'

const ImageGroup = styled.div`
    display: flex;
    background: url(${WindowsSvg});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 650px;
    min-width:400px;
    max-height: 600px;
    min-height:450px;
    img {
        width: 18rem;
    }
`

const StatisticsContainer = styled(Statistics)`
    div:last-child {
        ${Data} {
            color: #0055AD;
            font-size: 1.3rem;
            font-weight: 400;
        }
    }
`

const headingCss = css`
    ${Heading}{
        color: #87C846;
    }
`

export default function IndustryDevelopment() {
    return (
        <MainContainer heading='INDUSTRY DEVELOPMENT' renderImage={() => renderImage()} css={headingCss}>
            <Container>
                <StatisticsContainer dataColor="#87C846">
                    <div>
                        <div>Jobs created by community companies during the year</div>
                        <Data>11,178</Data>
                    </div>
                    <div>
                        <div>Accumulated no. of local and overseas industry events supported by Overseas / Mainland Market Development Support Scheme (MDSS)</div>
                        <Data>166</Data>
                    </div>
                    <div>
                        <div>Incubatees and alumni's expansions to non-local markets to date</div>
                        <Data>170+ companies Mainland and 30+ overseas markets</Data>
                    </div>
                </StatisticsContainer>
            </Container>
        </MainContainer>
    )

    function renderImage() {
        return (
            <ImageGroup>
                <img src={LeftHumanSvg} />
                <img src={RightHumanSvg} />
            </ImageGroup>
        )
    }

}