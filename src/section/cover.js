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

    &:before{
        content: "";
        position: absolute;
        width: 200%;
        height: 200%;
        top: 40%;
        left: -50%;
        z-index: -1;
        background: radial-gradient(ellipse closest-side at 50% 50%, rgba(117, 156, 245, 1) 0%, rgba(124, 161, 245, 1) 12.9%, rgba(155, 184, 248, 1) 36.5%, rgba(185, 207, 251, 1) 54.9%, rgba(220, 231, 253, 1) 72%, rgba(237, 242, 253, 1) 83.3%, rgba(247, 249, 254, 1) 100%);
        transform: rotate(90deg);
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