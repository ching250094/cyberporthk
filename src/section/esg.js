import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import gsap from 'gsap'
import { useRef, memo, useEffect, forwardRef } from 'react'
import BackgroundSvg from '../assets/images/esg/background.svg'
import widget_1 from '../assets/images/esg/widget_1.svg'
import widget_2 from '../assets/images/esg/widget_2.svg'
import widget_3 from '../assets/images/esg/widget_3.svg'
import widget_4 from '../assets/images/esg/widget_4.svg'
import widget_5 from '../assets/images/esg/widget_5.svg'
import point_1 from '../assets/images/esg/point_1.svg'
import point_2 from '../assets/images/esg/point_2.svg'
import point_3 from '../assets/images/esg/point_3.svg'

const Container = styled.div`
    position :relative;

    .section {
        height: 20vh;
      }

    .contentsContainer {
        height: 100vh;
        width: 100%;
      }

      .contents {
        width: 100%;
        height: 100%;
        position: absolute;
      }
`

const EarthContainer = styled.div`
    background: url(${BackgroundSvg});
    background-position: bottom;
    background-repeat: no-repeat;
    position: sticky;
    height: 100%;
    width: 100%;
    display flex;
`

const Widget = styled.img`
      width: ${p => p.width}%;
      height: ${p => p.height}%;
      position: absolute;
      bottom: ${p => p.bottom}%;
      left: ${p => p.left}%;
`

const StaticText = styled.div`
      color: #87C846;
      line-height: 1.3;
      padding-left: 4rem;
      padding-top: 4rem;
`

const Title = styled.div`
      font-size: 2.5rem;
      width: 25rem;
`

const SubTitle = styled.div`
      font-size: 1.5rem;
      margin-top: 16px;
`

const PointContainer = styled.div`
      margin-top: 2rem;
      overflow: hidden;
      height: 50%;
      margin-left: 10%;
`

const PointGroupContainer = styled.div`
      display: flex;
      align-items: center;
      height: 8rem;
      transform: translate(0, 300%);
      opacity: 0;
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



const duration = 1 / 4
const offset = 0.2

const Trigger = memo(({ progress, firstPointRef, secondPointsRef, thirdPointsRef }) => {
    useEffect(() => {
        if (progress < offset) {
            gsap.to(firstPointRef.current, { opacity: 1, transform: 'translate(0px, 300%)' })
            gsap.to(secondPointsRef.current, { opacity: 1, transform: 'translate(0px, 300%)' })
            gsap.to(thirdPointsRef.current, { opacity: 1, transform: 'translate(0px, 300%)' })
        }
        else if (progress > offset && progress < duration * 2) {
            console.log('1')
            gsap.to(firstPointRef.current, { opacity: 1, transform: 'translate(0px, 200%)' })
            gsap.to(secondPointsRef.current, { opacity: 1, transform: 'translate(0px, 250%)' })
            gsap.to(thirdPointsRef.current, { opacity: 1, transform: 'translate(0px, 300%)' })
        } else if (progress > duration + offset && progress < duration * 3) {
            console.log('2')
            gsap.to(firstPointRef.current, { opacity: 1, transform: 'translate(0px, 100%)' })
            gsap.to(secondPointsRef.current, { opacity: 1, transform: 'translate(0px, 100%)' })
            gsap.to(thirdPointsRef.current, { opacity: 1, transform: 'translate(0px, 200%)' })
        } else if (progress > duration * 2 && progress < duration * 4) {
            console.log('3')
            gsap.to(firstPointRef.current, { opacity: 1, transform: 'translate(0px, 0%)' })
            gsap.to(secondPointsRef.current, { opacity: 1, transform: 'translate(0px, 0%)' })
            gsap.to(thirdPointsRef.current, { opacity: 1, transform: 'translate(0px, 0%)' })
        }

        console.log(progress)
    }, [progress])
    return <div />
})

const Esg = () => {
    const firstPointRef = useRef()
    const secondPointsRef = useRef()
    const thirdPointsRef = useRef()

    return (
        <Container>
            <div className="section" />
            <Controller>
                <div>
                    <Scene
                        triggerHook="onLeave"
                        duration={3000}
                        pin>
                        {(progress) => (
                            <div className="contentsContainer">
                                <Timeline totalProgress={progress} paused>
                                    <div className="contents">
                                        <EarthContainer>
                                            <StaticText>
                                                <Title>Environmental, Social and Governance</Title>
                                                <SubTitle>Energy Saving in 2020/21</SubTitle>
                                            </StaticText>
                                            <Trigger progress={progress} firstPointRef={firstPointRef} secondPointsRef={secondPointsRef} thirdPointsRef={thirdPointsRef} />
                                            <PointContainer>
                                                <PointGroup ref={firstPointRef} mainContent="Electricity saving 635,585 kWh" src={point_1} description="which equals to" />
                                                <PointGroup ref={secondPointsRef} mainContent="CO2 emission reduction 451,265 kg" src={point_2} description="which equals to" />
                                                <PointGroup ref={thirdPointsRef} mainContent="Planting 19,620 trees" src={point_3} />
                                            </PointContainer>
                                            <Tween>
                                                <Timeline target={<Widget src={widget_1} bottom={10} width={20} height={20} />}>
                                                    <Tween to={{ opacity: 1 }} from={{ opacity: 0 }} />
                                                </Timeline>
                                                <Timeline target={<Widget src={widget_2} bottom={17} left={18} width={25} height={25} />}>
                                                    <Tween to={{ opacity: 1 }} from={{ opacity: 0 }} />
                                                </Timeline>
                                                <Timeline target={<Widget src={widget_3} bottom={4} left={30} width={12} height={12} />}>
                                                    <Tween to={{ opacity: 1 }} from={{ opacity: 0 }} />
                                                </Timeline>
                                                <Timeline target={<Widget src={widget_3} bottom={25} left={59} width={12} height={12} />}>
                                                    <Tween to={{ opacity: 1 }} from={{ opacity: 0 }} />
                                                </Timeline>
                                                <Timeline target={<Widget src={widget_4} bottom={2} left={57} width={18} height={18} />}>
                                                    <Tween to={{ opacity: 1 }} from={{ opacity: 0 }} />
                                                </Timeline>
                                                <Timeline target={<Widget src={widget_5} bottom={0} left={78} width={18} height={18} />}>
                                                    <Tween to={{ opacity: 1 }} from={{ opacity: 0 }} />
                                                </Timeline>
                                            </Tween>
                                        </EarthContainer>
                                    </div>
                                </Timeline>
                            </div>
                        )}
                    </Scene>
                </div>
            </Controller >
        </Container >
    )
}

const PointGroup = forwardRef(({ mainContent, src, description }, ref) => {
    return (
        <PointGroupContainer ref={ref}>
            <GroupImage src={src} />
            <div>
                <GroupTitle>{mainContent}</GroupTitle>
                <Description>{description}</Description>
            </div>
        </PointGroupContainer>
    )
})

export default Esg