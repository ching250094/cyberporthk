import { css } from 'styled-components'
import cyberportImg from '../../../assets/images/esg/cyberport.png'
import Text from '../constants'
import { Card, BaseContainer, TextCard } from '../shared'

const cardCss = css`
    margin-bottom: 3rem;
`

const TextCss = css`
    * + * {
        margin-top: 2rem;
    }
`

export default function MobileCyberport() {
    return (
        <BaseContainer>
            <Card src={cyberportImg} text={Text.card.cyberport} css={cardCss} />
            <TextCard css={TextCss}><div>{Text.cyberport.main}</div>
                <ul>{Text.cyberport.points.map(point => <li>{point}</li>)}</ul></TextCard>
        </BaseContainer>
    )
}