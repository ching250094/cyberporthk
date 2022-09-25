import Text from '../constants'
import { TextCard, BaseContainer } from '../shared'

export default function MobileCommunityCards() {
    return (
        <BaseContainer>
            <TextCard>
                <ul>{Text.community.points.map(point => <li>{point}</li>)}</ul>
            </TextCard>
        </BaseContainer>
    )
}