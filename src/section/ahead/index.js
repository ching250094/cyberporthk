import styled from 'styled-components'
import { Contoller, Scene } from 'react-scrollmagic'
import LeftSideSvg from '../../assets/images/ahead/left.svg'
import MiddleSideSvg from '../../assets/images/ahead/middle.svg'
import RightSideSvg from '../../assets/images/ahead/right.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export default function LookingAhead() {
    return (
        <Container>
            <img src={LeftSideSvg} />
            <img src={MiddleSideSvg} />
        </Container>
    )
}