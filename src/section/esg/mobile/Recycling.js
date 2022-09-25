import { css } from 'styled-components'
import recyclingImg from '../../../assets/images/esg/recycling.png'
import Text from '../constants'
import { Card, BaseContainer, TextCard } from '../shared'

const cardCss = css`
    margin-bottom: 3rem;
`

export default function MobileRecycling() {
    return (
        <BaseContainer>
            <Card src={recyclingImg} text={Text.card.recycling} css={cardCss} />
            <TextCard>{Text.recycling}</TextCard>
        </BaseContainer>
    )
}