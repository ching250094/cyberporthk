import styled, { css } from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import gsap from 'gsap'
import { useRef, memo, useEffect, forwardRef } from 'react'
import BackgroundSvg from '../assets/images/esg/background.png'
import widget_1 from '../assets/images/esg/widget_1.svg'
import widget_2 from '../assets/images/esg/widget_2.svg'
import widget_3 from '../assets/images/esg/widget_3.svg'
import widget_4 from '../assets/images/esg/widget_4.svg'
import widget_5 from '../assets/images/esg/widget_5.svg'
import point_1 from '../assets/images/esg/point_1.svg'
import point_2 from '../assets/images/esg/point_2.svg'
import point_3 from '../assets/images/esg/point_3.svg'
import earthImg from '../assets/images/esg/earth_1.png'
import recyclingImg from '../assets/images/esg/recycling.png'
import sustainableImg from '../assets/images/esg/sustainable.png'
import roomImg from '../assets/images/esg/room.png'
import parkingImg from '../assets/images/esg/parking.png'
import cyberportImg from '../assets/images/esg/cyberport.png'
import communityImg from '../assets/images/esg/community_1.png'
import conferenceImg from '../assets/images/esg/community_2.png'

const Container = styled.div`
    position :relative;

    .section {
        height: 30vh;
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
    height: 100%;
    width: 100%;
    display flex;

`

const Background = styled.div`
    background: url(${BackgroundSvg});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 90%;
    position: sticky;
    height: 100%;
    width: 100%;
    z-index: 2;
`


const Widget = styled.img`
    width: ${p => p.width}%;
    height: ${p => p.height}%;
    position: absolute;
    bottom: ${p => p.bottom}%;
    left: ${p => p.left}%;
    z-index: 25;
`

const MainTitle = styled.div`
    position: absolute;
    color: #87C846;
    font-size: 8rem;
    text-align: center;
    z-index: 1;
    transform: translateY(100%);
    opacity: 0;
    display: flex;
    flex-wrap: wrap;

    div {
        width: 100%;
    }
    
`

const StaticText = styled.div`
      color: #87C846;
      line-height: 1.3;
      opacity: 0;
      position: absolute;
      top :10%;
      left: 3%;
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
      position: absolute;
      top:0;
      right: 8%;
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

const SceneContainer = styled.div`
      position: absolute;
      top: 0;
      left:0;
      height: 100%;
      width: 100%;
      opacity: 0;
      z-index: 3;

      ${p => p.css}
`

const sceneThirdCss = css`
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
`

const CentralEarthOuter = styled.div`
    transform: scale(0);
    display: flex;
    justify-content: center;
    align-items: center;
`

const CentralEarth = styled.img`
    width: 80%;
    -webkit-animation: aniSix-x 10s linear infinite 0.5s;
    animation: aniSix-x 10s linear infinite 0.5s;
    

    @keyframes aniSix-x {
        0% {
            -webkit-transform: rotate(0deg);
        }
        25% {
            -webkit-transform: rotate(90deg);
        }
        50% {
            -webkit-transform: rotate(180deg);
        }
        75% {
            -webkit-transform: rotate(270deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
`

const BaseCard = styled.div`
    position: absolute;
    top: ${p => p.top}%;
    left: ${p => p.left}%;
    background-color: #FFF;
    text-align: center;
    box-shadow: 6px 6px 13px #C8C8C8;

    img {
        max-width: 350px;
        min-width: 300px;
        padding: 1.5rem 1.5rem 1rem;
    }
    div {
        font-size: 1.5rem;
        padding-bottom: 2rem;
        width: 80%;
        margin: 0 auto;
    }
`

const TextCard = styled.div`
    position: absolute;
    top: ${p => p.top}%;
    left: ${p => p.left}%;
    background-color: #FFF;
    box-shadow: 6px 6px 13px #C8C8C8;
    width: 40%;
    border-radius: 25px;
    padding: 2rem;
    line-height: 1.5;

    font-size: 14px;
    * + * {
        margin-top: 1rem;
    }

`

const Slide = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
`

const duration = 1 / 13
const offset = 0.02
const titleDuration = 0.05
const baseOffset = offset + titleDuration

const Trigger = memo(({ progress, firstPointRef, secondPointsRef, thirdPointsRef, mainTitleRef, sceneSecondRef, titleRef, bgRef }) => {
    useEffect(() => {
        if (progress > offset && progress < titleDuration) {
            gsap.to(mainTitleRef.current, { opacity: 1, transform: 'translateY(10%)', duration: 1, onComplete: () => gsap.to(mainTitleRef.current, { opacity: 0 }) })
            gsap.to(sceneSecondRef.current, { opacity: 0 })
            gsap.to(titleRef.current, { opacity: 0 })
            gsap.to(bgRef.current, { transform: 'scale(1)' })
        } else if (progress > baseOffset && progress < duration + baseOffset) {
            gsap.to(mainTitleRef.current, { opacity: 0 })
            gsap.to(sceneSecondRef.current, { opacity: 1 })
            gsap.to(titleRef.current, { opacity: 1 })
            gsap.to(firstPointRef.current, { opacity: 1, transform: 'translate(0px, 300%)' })
            gsap.to(secondPointsRef.current, { opacity: 1, transform: 'translate(0px, 300%)' })
            gsap.to(thirdPointsRef.current, { opacity: 1, transform: 'translate(0px, 300%)' })
            gsap.to(bgRef.current, { transform: 'scale(1)' })
        }
        else if (progress > duration + baseOffset && progress < duration * 2 + baseOffset) {
            gsap.to(mainTitleRef.current, { opacity: 0 })
            gsap.to(firstPointRef.current, { opacity: 1, transform: 'translate(0px, 200%)' })
            gsap.to(secondPointsRef.current, { opacity: 1, transform: 'translate(0px, 250%)' })
            gsap.to(thirdPointsRef.current, { opacity: 1, transform: 'translate(0px, 300%)' })
            gsap.to(bgRef.current, { transform: 'scale(1)' })
            gsap.to(sceneSecondRef.current, { opacity: 1 })
            gsap.to(titleRef.current, { opacity: 1 })
        } else if (progress > duration * 2 + baseOffset && progress < duration * 3 + baseOffset) {
            gsap.to(mainTitleRef.current, { opacity: 0 })
            gsap.to(firstPointRef.current, { opacity: 1, transform: 'translate(0px, 100%)' })
            gsap.to(secondPointsRef.current, { opacity: 1, transform: 'translate(0px, 100%)' })
            gsap.to(thirdPointsRef.current, { opacity: 1, transform: 'translate(0px, 200%)' })
            gsap.to(bgRef.current, { transform: 'scale(1)' })
            gsap.to(sceneSecondRef.current, { opacity: 1 })
            gsap.to(titleRef.current, { opacity: 1 })
        } else if (progress > duration * 5 + baseOffset && progress < duration * 6 + baseOffset) {
            gsap.to(mainTitleRef.current, { opacity: 0 })
            gsap.to(firstPointRef.current, { opacity: 1, transform: 'translate(0px, 0%)' })
            gsap.to(secondPointsRef.current, { opacity: 1, transform: 'translate(0px, 0%)' })
            gsap.to(thirdPointsRef.current, { opacity: 1, transform: 'translate(0px, 0%)' })
            gsap.to(bgRef.current, { transform: 'scale(1)' })
            gsap.to(sceneSecondRef.current, { opacity: 1 })
            gsap.to(titleRef.current, { opacity: 1 })
        } else if (progress > duration * 6 + baseOffset) {
            gsap.to(mainTitleRef.current, { opacity: 0 })
            gsap.to(sceneSecondRef.current, { opacity: 0 })
            gsap.to(bgRef.current, { transform: 'scale(0)' })
            gsap.to(titleRef.current, { opacity: 1 })
        }

    }, [progress])
    return <div />
})

const Esg = () => {
    const firstPointRef = useRef()
    const secondPointsRef = useRef()
    const thirdPointsRef = useRef()
    const titleRef = useRef()
    const mainTitleRef = useRef()
    const sceneSecondRef = useRef()
    const bgRef = useRef()
    const recyclingRef = useRef()
    const parkingRef = useRef()
    const roomRef = useRef()
    const communityRef = useRef()

    return (
        <Container>
            <div className="section" />
            <Controller>
                <div>
                    <Scene
                        triggerHook="onLeave"
                        duration={6000}
                        pin>
                        {(progress) => (
                            <div className="contentsContainer">
                                <Timeline totalProgress={progress} paused>
                                    <div className="contents">
                                        <EarthContainer>
                                            <Background ref={bgRef} />
                                            <MainTitle ref={mainTitleRef}>
                                                <div>Environmental,</div>
                                                <div>Social,</div>
                                                <div>Governance</div>
                                            </MainTitle>
                                            <StaticText ref={titleRef}>
                                                <Title>Environmental, Social and Governance</Title>
                                                <SubTitle>Energy Saving in 2020/21</SubTitle>
                                            </StaticText>
                                            <Tween>
                                                <SceneContainer ref={sceneSecondRef}>
                                                    <Trigger progress={progress}
                                                        firstPointRef={firstPointRef}
                                                        secondPointsRef={secondPointsRef}
                                                        thirdPointsRef={thirdPointsRef}
                                                        mainTitleRef={mainTitleRef}
                                                        sceneSecondRef={sceneSecondRef}
                                                        titleRef={titleRef}
                                                        bgRef={bgRef} />
                                                    <PointContainer>
                                                        <PointGroup ref={firstPointRef} mainContent="Electricity saving 635,585 kWh" src={point_1} description="which equals to" />
                                                        <PointGroup ref={secondPointsRef} mainContent="CO2 emission reduction 451,265 kg" src={point_2} description="which equals to" />
                                                        <PointGroup ref={thirdPointsRef} mainContent="Planting 19,620 trees" src={point_3} />
                                                    </PointContainer>
                                                    <Timeline target={<Widget src={widget_1} bottom={10} width={20} height={20} />} >
                                                        <Tween to={{ opacity: 0 }} from={{ opacity: 1 }} />
                                                    </Timeline>
                                                    <Timeline target={<Widget src={widget_2} bottom={17} left={18} width={25} height={25} />}>
                                                        <Tween to={{ opacity: 0 }} from={{ opacity: 1 }} />
                                                    </Timeline>
                                                    <Timeline target={<Widget src={widget_3} bottom={4} left={30} width={12} height={12} />}>
                                                        <Tween to={{ opacity: 0 }} from={{ opacity: 1 }} />
                                                    </Timeline>
                                                    <Timeline target={<Widget src={widget_3} bottom={25} left={59} width={12} height={12} />}>
                                                        <Tween to={{ opacity: 0 }} from={{ opacity: 1 }} />
                                                    </Timeline>
                                                    <Timeline target={<Widget src={widget_4} bottom={2} left={57} width={18} height={18} />}>
                                                        <Tween to={{ opacity: 0 }} from={{ opacity: 1 }} />
                                                    </Timeline>
                                                    <Timeline target={<Widget src={widget_5} bottom={0} left={78} width={18} height={18} />}>
                                                        <Tween to={{ opacity: 0 }} from={{ opacity: 1 }} />
                                                    </Timeline>
                                                </SceneContainer>
                                            </Tween>
                                            <SceneContainer css={sceneThirdCss}>
                                                <Timeline target={<CentralEarthOuter><CentralEarth src={earthImg} /></CentralEarthOuter>}>
                                                    <Tween to={{ scale: 1 }} from={{ scale: 0 }} />
                                                </Timeline>
                                                <Timeline>
                                                    <Tween to={{ opacity: 1 }} >
                                                        <Slide ref={communityRef}>
                                                            <Card src={communityImg} text="Co-building for a Sustainable Community" top={40} left={10} />
                                                            <Card src={conferenceImg} text="Cyberport FinTect for ESG Conference 2021" top={10} left={55} />
                                                            <CommunityText top={60} left={50} />
                                                        </Slide>
                                                    </Tween>
                                                </Timeline>
                                                <Timeline>
                                                    <Tween to={{ opacity: 1 }} onStart={() => gsap.to(communityRef.current, ({ opacity: 0 }))}>
                                                        <Slide ref={recyclingRef}>
                                                            <Card src={recyclingImg} text="Recycling" top={40} left={10} />
                                                            <RecyclingText top={50} left={50} />
                                                        </Slide>
                                                    </Tween>
                                                </Timeline>
                                                <Timeline>
                                                    <Tween to={{ opacity: 1 }} onStart={() => gsap.to(recyclingRef.current, ({ opacity: 0 }))}>
                                                        <Slide ref={parkingRef}>
                                                            <Card src={parkingImg} text="EVs and Smart Parking System" top={15} left={60} />
                                                            <ParkingText top={45} left={8} />
                                                        </Slide>
                                                    </Tween>
                                                </Timeline>
                                                <Timeline>
                                                    <Tween to={{ opacity: 1 }} onStart={() => gsap.to(parkingRef.current, ({ opacity: 0 }))}>
                                                        <Slide ref={roomRef}>
                                                            <Card src={sustainableImg} text="Sustainable Food Sourcing" top={40} left={10} />
                                                            <Card src={roomImg} text="Smart Room Control Technology" top={10} left={60} />
                                                        </Slide>
                                                    </Tween>
                                                </Timeline>
                                                <Timeline>
                                                    <Tween to={{ opacity: 1 }} onStart={() => gsap.to(roomRef.current, ({ opacity: 0 }))}>
                                                        <Slide>
                                                            <Card src={cyberportImg} text="Cyberport 5 Expansion" top={30} left={60} />
                                                            <CyberportText top={40} left={5} />
                                                        </Slide>
                                                    </Tween>
                                                </Timeline>
                                            </SceneContainer>
                                        </EarthContainer>
                                    </div>
                                </Timeline>
                            </div>
                        )
                        }
                    </Scene>
                </div >
            </Controller >
            <div className="section" />
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

const Card = forwardRef(({ src, text, top, left }, ref) => {
    return (
        <BaseCard ref={ref} top={top} left={left}>
            <img src={src} />
            <div>{text}</div>
        </BaseCard>
    )
})


const RecyclingText = ({ top, left }) => (
    <TextCard top={top} left={left}>
        On our campus, the 'Big Belly' recycling bins are solar powered, installed with an intelligent sensor and compressor compacting recycled content when they are full and sends notifications to cleaning staff for collection.
    </TextCard>
)

const ParkingText = ({ top, left }) => (
    <TextCard top={top} left={left}>
        <div>Cyberport incubatees, oneCHARGE Solutions and LHC New Energy Company, applied an EV charger system at carpark areas to boost convenience for EV owners and encourage a cleaner alternative method to travel.</div>
        <div>The Smart Car Parking System improvement project boosted efficiency by allowing contactless free parking redemption, feasibilities of e-payment and providing availability of parking spaces via an application.</div>
    </TextCard>
)


const CyberportText = ({ top, left }) => (
    <TextCard top={top} left={left}>
        <div>Sustainable features in our expansion efforts include:</div>
        <ul>
            <li>Designated part of the low zone floor spaces as greenery open
                spaces, sunset observation decks and naturally ventilated wind
                orridors
            </li>

            <li>Revitalisation of the existing waterfront park landscaping features and smart facilities</li>

            <li>Modular Integrated Construction (MiC) Technology implemented</li>
            <li>Observes BEAM plus certification criteria and aims for at least
                30% of construction waste is recycled during the construction
                processes
            </li>
        </ul>
    </TextCard>
)


const CommunityText = ({ top, left }) => (
    <TextCard top={top} left={left}>
        <ul>
            <li>
                Joined the 4T Partnership established by the HKSAR Government to align targets and actions in achieving carbon neutrality by 2050
            </li>

            <li>
                "Cyberport FinTech for ESG Conference 2021" allows businesses to explore how to enhance efficiency when implementing ESG measures
            </li>

            <li>"Shaping a Sustainable Financial Ecosystem: How to Integrate ESG Factors with FinTech" provides a platform for sharing how the industry is promoting global ESG and sustainable development</li>
        </ul>
    </TextCard>
)





export default Esg