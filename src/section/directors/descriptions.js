import styled from 'styled-components'
import DirectorsBg from '../../assets/images/directors/background.svg'
import breakpoints from '../../style/breakpoints'


const Contents = styled.div`
    width: 50%;
    font-size: 1.8rem;
    line-height: 1.7;
    margin-left: 4.5rem;
    color: #FFFFFF;
    
    * + * {
        font-size: 2.5rem;
        margin-top: 1.5rem;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-image: url(${DirectorsBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background: linear-gradient(360deg, rgba(12,119,247,1) 14%, rgba(80,157,249,1) 35%, rgba(118,180,255,1) 47%, rgba(167,206,255,1) 65%, rgba(198,223,255,1) 78%, rgba(220,235,255,1) 89%);


    @media only screen and ${breakpoints.mobile} {
        justify-content: flex-start;
        height: auto;
        padding-top: 10rem;
        ${Contents} {
            width: 95%;
            font-size: 1.2rem;
            margin-left: 0;
            padding: 0 1rem;
        }
    }
`

export default function Descriptions() {
    return (
        <Container>
            <Contents>
                <div>
                    These astonishing results are achieved by our community members, a dedicated team of managers and staff, as well as out honourable
                </div>
                <div>Board of Directors</div>
            </Contents>
        </Container>
    )
}