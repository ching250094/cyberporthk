import { css } from 'styled-components'
import parkingImg from '../../../assets/images/esg/parking.png'
import Text from '../constants'
import { Card, BaseContainer, TextCard } from '../shared'

const cardCss = css`
    margin-bottom: 3rem;
`

export default function MobileParking() {
    return (
        <BaseContainer>
            <Card src={parkingImg} text={Text.card.parking} css={cardCss} />
            <TextCard>{Text.parking.map(content => <div>{content}</div>)}</TextCard>
        </BaseContainer>
    )
}