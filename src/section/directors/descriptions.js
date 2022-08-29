import styled from 'styled-components'
import DirectorsBg from '../../assets/images/directors/background.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background: url(${DirectorsBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

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