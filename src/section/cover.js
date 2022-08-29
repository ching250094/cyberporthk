import { forwardRef } from 'react'
import styled from 'styled-components'
import CyberportSvg from '../assets/images/cyberportLogo.svg'

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    background: linear-gradient(90deg, rgba(255,255,255,1) 16%, rgba(144,178,245,1) 45%, rgba(255,255,255,1) 79%);
`

const CyberportLogo = styled.img.attrs({ src: CyberportSvg })`
    width: 13rem;
    align-self: flex-end;
    margin-top: 4rem;
    margin-right: 4rem;
`

const TitleContainer = styled.div`
    font-size: 5.5rem;
    font-weight:800;
    align-self: center;
    line-height: 1.2;
    color: #0955AD;
    * + * {
        color: #09B8F1;
    }
`

const SubTitleContainer = styled.div`
    font-size: 1.8rem;
    text-align: center;
    margin-bottom:4rem;
    line-height: 1.5;
    color: #FFFFFF;
`

const CoverSection = forwardRef((_, ref) => {
    console.log(ref)

    return (
        <Container ref={ref}>
            <CyberportLogo />
            <TitleContainer>
                <div>Cyberport</div>
                <div>Annual report 2022</div>
            </TitleContainer>
            <SubTitleContainer>
                <div>Since 2004, Cyberport has been</div>
                <div>helping over 1,650 startups</div>
            </SubTitleContainer>
        </Container>

    )
});

export default CoverSection