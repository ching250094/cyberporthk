import styled from 'styled-components'
import CyberportSvg from '../assets/images/cyberportLogo.svg'
import breakpoints from '../style/breakpoints'


const CyberportLogo = styled.img.attrs({ src: CyberportSvg })`
    width: 13rem;
    align-self: flex-end;
    margin-top: 4rem;
    margin-right: 4rem;
`

const TitleContainer = styled.div`
    font-size: 5.5rem;
    font-weight:800;
    margin-left: 10%;
    margin-bottom: 10%;
    line-height: 1.2;
    color: #0955AD;
    * + * {
        color: #09B8F1;
    }
`

const SubTitleContainer = styled.div`
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 4rem;
    line-height: 1.5;
    color: #FFFFFF;
`

const Container = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    }

    @media only screen and ${breakpoints.pad} {
        justify-content: center;

        > div {
            margin-top: 2rem;
        }

        ${CyberportLogo} {
            width: 9rem;
            margin-top: 0;
            margin-right: 2rem;
        }

        ${TitleContainer} {
            margin-top: 2rem;
            font-size: 2.5rem;
        }

        ${SubTitleContainer} {
            font-size: 1.5rem;
        }
        
    }
`

export default function CoverSection() {
    return (
        <Container>
            <CyberportLogo />
            <TitleContainer>
                <div>Cyberport</div>
                <div>Annual report 2022</div>
            </TitleContainer>
            <SubTitleContainer>
                <div>Since 2004,</div>
                <div>Cyberport has been</div>
                <div>helping over 1,650 startups</div>
            </SubTitleContainer>
        </Container>

    )
}