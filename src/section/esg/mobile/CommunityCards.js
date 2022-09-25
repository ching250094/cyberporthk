import { css } from 'styled-components'
import communityImg from '../../../assets/images/esg/community_1.png'
import conferenceImg from '../../../assets/images/esg/community_2.png'
import Text from '../constants'
import { Card, BaseContainer } from '../shared'

const cardCss = css`
    margin-top: 3rem;
`

export default function MobileCommunityCards() {
    return (
        <BaseContainer>
            <Card src={communityImg} text={Text.card.community} />
            <Card src={conferenceImg} text={Text.card.conference} css={cardCss} />
        </BaseContainer>
    )
}