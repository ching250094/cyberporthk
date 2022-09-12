import styled, { css } from 'styled-components'
import industryPng from '../../assets/images/summary/industry_1.png'
import industryBg from '../../assets/images/summary/industry_bg.png'
import MainContainer, { Heading, TitleTag } from './mainContainer'
import { Container, Statistics, Data } from './shared'

const ImageGroup = styled.div`
    display: flex;

    img {
        width: 40rem;
    }
`

const StatisticsContainer = styled(Statistics)`
    div:last-child {
        ${Data} {
            color: #34B778;
            font-size: 1.3rem;
            font-weight: 400;
        }
    }
`

const headingCss = css`
    ${Heading}{
        color: #34B778;
    }
    ${TitleTag} {
        background-color: #34B778;
    }
`

/* eslint-disable jsx-a11y/alt-text */

export default function IndustryDevelopment() {
    return (
        <MainContainer background={industryBg} heading='INDUSTRY DEVELOPMENT' renderImage={() => renderImage()} css={headingCss}>
            <Container>
                <StatisticsContainer dataColor="#34B778">
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
                <img src={industryPng} />
            </ImageGroup>
        )
    }

}