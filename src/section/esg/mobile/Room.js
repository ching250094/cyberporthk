import { css } from 'styled-components'
import sustainableImg from '../../../assets/images/esg/sustainable.png'
import roomImg from '../../../assets/images/esg/room.png'
import Text from '../constants'
import { Card, BaseContainer } from '../shared'

const cardCss = css`
    margin-top: 3rem;
`

export default function MobileRoom() {
    return (
        <BaseContainer>
            <Card src={sustainableImg} text={Text.card.room} />
            <Card src={roomImg} text={Text.card.sustainable} css={cardCss} />
        </BaseContainer>
    )
}