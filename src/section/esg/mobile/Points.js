import styled from 'styled-components'
import point_1 from '../../../assets/images/esg/point_1.svg'
import point_2 from '../../../assets/images/esg/point_2.svg'
import point_3 from '../../../assets/images/esg/point_3.svg'
import Text from '../constants'

const Container = styled.div`
    color: #87C846;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    padding: 0 2.5rem 2.5rem;
    justify-content: center;
    height: 100%;
`

const Title = styled.div`
    font-size: 2.5rem;
    width: 100%;
`

const SubTitle = styled.div`
      font-size: 1.5rem;
      margin-top: 16px;
`

const PointGroupContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 5rem;
`

const GroupImage = styled.img.attrs(p => ({ src: p.src }))`
      width: 4rem;
      margin-right: 16px;
`

const GroupTitle = styled.div`
    font-size: 1.6rem;
    margin-bottom: 12px;
    color: #87C846;
`

const Description = styled.div`
    font-size: 1.5rem;
    color: #999999;
`

export default function MobilePoints() {
    return (
        <Container>
            <Title>{Text.title}</Title>
            <SubTitle>{Text.subTitle}</SubTitle>
            <PointGroup mainContent={Text.esgPoints.electricity} src={point_1} description={Text.esgPoints.description} />
            <PointGroup mainContent={Text.esgPoints.co2} src={point_2} description={Text.esgPoints.description} />
            <PointGroup mainContent={Text.esgPoints.planting} src={point_3} />
        </Container>
    )
}

function PointGroup({ mainContent, src, description }) {
    return (
        <PointGroupContainer>
            <GroupImage src={src} />
            <div>
                <GroupTitle>{mainContent}</GroupTitle>
                <Description>{description}</Description>
            </div>
        </PointGroupContainer>
    )
}