import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Timeline } from 'react-gsap'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import BgTalents from '../../assets/images/circle/bg_talents.svg'
import BgIndustry from '../../assets/images/circle/bg_industry.svg'
import BgMarketing from '../../assets/images/circle/bg_marketing.svg'
import BgEconomies from '../../assets/images/circle/bg_economies.svg'
import { MainTilteText, ContentText } from './constants'
import { bg } from './styles'


const Container = styled.div`
  overflow: hidden;

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
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }

  .text {
    position: absolute;
    font-size: 3.5rem;
    color: #FFF;
  }
`;

const Heading = styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    width: 100%;
    height: 100%;
`

const ItemContainer = styled.div`
    position: absolute;
    left: calc(${p => p.index} * 8rem);
    top: 5%;
    width: 8rem;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`

const Circle = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 6px 6px 13px #C8C8C8;
    background-color: #999999;
    z-index: 10;
`

const CircleText = styled.div`
    position: absolute;
    color: #FFF;
    font-size: 1.1rem;
    margin-left: ${p => p.marginLeft}px;
    z-index: 10;
`

const Background = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
`


const Text = styled.div`
  position: absolute;
  color: ${p => p.color};
  top: ${p => p.top};
  opacity: 0;
  font-size: ${p => p.isMain && '2.3rem'};
  padding: 0 1.6rem;

  > div {
    margin-bottom: 3rem;
  }
`

const Contents = styled.div`
  position: relative
  height: 100%;
  width: 100%;
  line-height: 1.5;
  z-index: 2;
  font-size: 1.9rem;
  text-align: center;
`

const duration = 1 / 6

function Trigger({ progress, talentsRef, industryRef, economiesRef, marketingRef, bgRef, talentCircleRef,
    industryCircleRef, economiesCircleRef, marketingCircleRef, talentsMainTextRef, talentsContentsRef, secondCentralTextRef, firstCentralTextRef }) {
    useEffect(() => {
        if (progress < duration && progress < duration * 2) {
            gsap.to(talentCircleRef.current, { background: bg.talents })
            gsap.to(talentsMainTextRef.current, { opacity: 1 })
            gsap.to(talentsContentsRef.current, { opacity: 1 })
            gsap.to(industryCircleRef.current, { background: '#999999' })
            gsap.to(economiesCircleRef.current, { background: '#999999' })
            gsap.to(marketingCircleRef.current, { background: '#999999' })
            gsap.to(bgRef.current, { background: `url(${BgTalents})` })
        }
        else if (progress > duration * 2 && progress < duration * 3) {
            gsap.to(talentsMainTextRef.current, { opacity: 0 })
            gsap.to(talentsContentsRef.current, { opacity: 0 })
            gsap.to(industryCircleRef.current, { background: bg.industry })
            gsap.to(talentCircleRef.current, { background: '#999999' })
            gsap.to(economiesCircleRef.current, { background: '#999999' })
            gsap.to(marketingCircleRef.current, { background: '#999999' })
            gsap.to(bgRef.current, { background: `url(${BgIndustry})` })
            gsap.to(secondCentralTextRef.current, { opacity: 0 })
            gsap.to(firstCentralTextRef.current, { opacity: 0 })
        }
        else if (progress > duration * 3 && progress < duration * 4) {
            gsap.to(talentsMainTextRef.current, { opacity: 0 })
            gsap.to(talentsContentsRef.current, { opacity: 0 })
            gsap.to(economiesCircleRef.current, { background: bg.economies })
            gsap.to(talentCircleRef.current, { background: '#999999' })
            gsap.to(industryCircleRef.current, { background: '#999999' })
            gsap.to(marketingCircleRef.current, { background: '#999999' })
            gsap.to(bgRef.current, { background: `url(${BgEconomies})` })
            gsap.to(secondCentralTextRef.current, { opacity: 0 })
            gsap.to(firstCentralTextRef.current, { opacity: 0 })
        }
        else if (progress > duration * 4 && progress < duration * 5) {
            gsap.to(talentsMainTextRef.current, { opacity: 0 })
            gsap.to(talentsContentsRef.current, { opacity: 0 })
            gsap.to(marketingCircleRef.current, { background: bg.marketing })
            gsap.to(talentCircleRef.current, { background: '#999999' })
            gsap.to(industryCircleRef.current, { background: '#999999' })
            gsap.to(economiesCircleRef.current, { background: '#999999' })
            gsap.to(bgRef.current, { background: `url(${BgMarketing})` })
            gsap.to(secondCentralTextRef.current, { opacity: 0 })
            gsap.to(firstCentralTextRef.current, { opacity: 0 })
        } else if (progress > duration * 5) {
            gsap.to(talentsMainTextRef.current, { opacity: 0 })
            gsap.to(talentsContentsRef.current, { opacity: 0 })
            gsap.to(secondCentralTextRef.current, { opacity: 1 })
            gsap.to(firstCentralTextRef.current, { opacity: 1 })
            gsap.to(talentCircleRef.current, { background: bg.talents })
            gsap.to(industryCircleRef.current, { background: bg.industry })
            gsap.to(economiesCircleRef.current, { background: bg.economies })
            gsap.to(marketingCircleRef.current, { background: bg.marketin })
        }

    }, [progress])
    return <div />
}


const Circles = () => {
    const talentsRef = useRef()
    const industryRef = useRef()
    const economiesRef = useRef()
    const marketingRef = useRef()
    const talentCircleRef = useRef()
    const industryCircleRef = useRef()
    const economiesCircleRef = useRef()
    const marketingCircleRef = useRef()
    const talentsMainTextRef = useRef()
    const talentsContentsRef = useRef()
    const firstCentralTextRef = useRef()
    const secondCentralTextRef = useRef()
    const bgRef = useRef()

    return (
        <Container>
            <Controller>
                <div>
                    <Scene
                        triggerHook="onLeave"
                        duration={5000}
                        pin
                    >
                        {(progress) => (
                            <div className="contentsContainer">
                                <Timeline totalProgress={progress} paused>
                                    <div className="contents">
                                        <Heading>
                                            <Trigger
                                                progress={progress}
                                                bgRef={bgRef}
                                                talentsRef={talentsRef}
                                                industryRef={industryRef}
                                                marketingRef={marketingRef}
                                                economiesRef={economiesRef}
                                                talentCircleRef={talentCircleRef}
                                                industryCircleRef={industryCircleRef}
                                                economiesCircleRef={economiesCircleRef}
                                                marketingCircleRef={marketingCircleRef}
                                                talentsMainTextRef={talentsMainTextRef}
                                                talentsContentsRef={talentsContentsRef}
                                                firstCentralTextRef={firstCentralTextRef}
                                                secondCentralTextRef={secondCentralTextRef}
                                            />
                                            <Background ref={bgRef} />

                                            <ItemContainer index={0} background={BgTalents} ref={talentsRef}>
                                                <Circle ref={talentCircleRef} />
                                                <CircleText>Talents</CircleText>
                                            </ItemContainer>

                                            <ItemContainer index={1} ref={industryRef}>
                                                <Circle ref={industryCircleRef} />
                                                <CircleText>Industry</CircleText>
                                            </ItemContainer>

                                            <ItemContainer index={2} ref={economiesRef}>
                                                <Circle ref={economiesCircleRef} />
                                                <CircleText marginLeft={18}>Economies Integration</CircleText>
                                            </ItemContainer>

                                            <ItemContainer index={3} ref={marketingRef}>
                                                <Circle ref={marketingCircleRef} />
                                                <CircleText marginLeft={18}>Marketing Integration</CircleText>
                                            </ItemContainer>

                                            <Contents>
                                                <TitleText top='35%' isMain color='#0C77F7' textRef={talentsMainTextRef} contents={[MainTilteText.talents]} />
                                                <TitleText top='50%' color='#0C77F7' textRef={talentsContentsRef} contents={[ContentText.talents]} />
                                                <TitleText top='30%' color='#87C846' textRef={firstCentralTextRef} contents={[ContentText.central.first, ContentText.central.second]} />
                                            </Contents>

                                        </Heading>
                                    </div>
                                </Timeline>
                            </div>
                        )}
                    </Scene>
                </div>
            </Controller >
            <div className="section" />
        </Container >
    );
}

function TitleText({ contents, color, textRef, ...props }) {
    return (
        <Text color={color} ref={textRef} {...props}>
            {contents.map(c => <div>{c}</div>)}
        </Text>
    )
}

export default Circles;