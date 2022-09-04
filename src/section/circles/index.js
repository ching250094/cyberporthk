import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import gsap from 'gsap'
import { useEffect, useState, useRef, memo } from 'react'
import BgTalents from '../../assets/images/circle/bg_talents.svg'
import BgIndustry from '../../assets/images/circle/bg_industry.svg'
import BgMarketing from '../../assets/images/circle/bg_marketing.svg'
import BgEconomies from '../../assets/images/circle/bg_economies.svg'


const bg = {
    talents: "radial-gradient(circle, rgba(111,217,248,1) 27%, rgba(0,185,241,1) 81%, rgba(0,185,241,1) 100%)",
    industry: "radial-gradient(circle, rgba(133,193,255,1) 0%, rgba(75,163,255,1) 31%, rgba(0,91,185,1) 71%, rgba(0,85,173,1) 81%, rgba(0,85,173,1) 100%)",
    economies: "radial-gradient(circle, rgba(135,200,70,1) 27%, rgba(72,159,115,1) 81%, rgba(72,159,115,1) 100%)",
    marketing: "radial-gradient(circle, rgba(203,217,65,1) 27%, rgba(135,200,70,1) 81%, rgba(135,200,70,1) 100%)"
}


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
    position: stickty;
    width: 100%;
    height: 100%;
`

const Path = styled.div`
    position: absolute;
    top: -57%;
    border: 3px solid #0C77F7;
    border-radius: 50%;
    width: 85%;
    height: 80%;
    z-index: 10;
`

const ItemContainer = styled.div`
    position: absolute;
    left: ${p => p.left}%;
    top: ${p => p.top}%;
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

const Text = styled.div`
    position: absolute;
    color: #FFF;
    font-size: 1.3rem;
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
const duration = 1 / 5

function Trigger({ progress, talentsRef, industryRef, economiesRef, marketingRef, bgRef }) {
    useEffect(() => {
        if (progress < duration && progress < duration * 2) {
            gsap.to(talentsRef.current, { background: bg.talents })
            gsap.to(industryRef.current, { background: '#999999' })
            gsap.to(economiesRef.current, { background: '#999999' })
            gsap.to(marketingRef.current, { background: '#999999' })
            gsap.to(bgRef.current, { background: `url(${BgTalents})` })
        }
        else if (progress > duration * 2 && progress < duration * 3) {
            gsap.to(industryRef.current, { background: bg.industry })
            gsap.to(talentsRef.current, { background: '#999999' })
            gsap.to(economiesRef.current, { background: '#999999' })
            gsap.to(marketingRef.current, { background: '#999999' })
            gsap.to(bgRef.current, { background: `url(${BgIndustry})` })
        }
        else if (progress > duration * 3 && progress < duration * 4) {
            gsap.to(economiesRef.current, { background: bg.economies })
            gsap.to(talentsRef.current, { background: '#999999' })
            gsap.to(industryRef.current, { background: '#999999' })
            gsap.to(marketingRef.current, { background: '#999999' })
            gsap.to(bgRef.current, { background: `url(${BgEconomies})` })
        }
        else if (progress > duration * 3) {
            gsap.to(marketingRef.current, { background: bg.marketing })
            gsap.to(talentsRef.current, { background: '#999999' })
            gsap.to(industryRef.current, { background: '#999999' })
            gsap.to(economiesRef.current, { background: '#999999' })
            gsap.to(bgRef.current, { background: `url(${BgMarketing})` })
        }

    }, [progress])
    return <div />
}


const Circles = () => {
    const talentsRef = useRef()
    const industryRef = useRef()
    const economiesRef = useRef()
    const marketingRef = useRef()
    const bgRef = useRef()

    return (
        <Container>
            <Controller>
                <div>
                    <Scene
                        triggerHook="onLeave"
                        duration={4000}
                        pin
                    >
                        {(progress) => (
                            <div className="contentsContainer">
                                <Timeline totalProgress={progress} paused>
                                    <div className="contents">
                                        <Heading>
                                            <Trigger progress={progress} bgRef={bgRef} talentsRef={talentsRef} industryRef={industryRef} marketingRef={marketingRef} economiesRef={economiesRef} />
                                            <Path />
                                            <Background ref={bgRef} />

                                            <ItemContainer top={5} left={12} background={BgTalents}>
                                                <Circle ref={talentsRef} />
                                                <Text>Talents</Text>
                                            </ItemContainer>

                                            <ItemContainer top={14} left={32}>
                                                <Circle ref={industryRef} />
                                                <Text>Industry</Text>
                                            </ItemContainer>

                                            <ItemContainer top={14} left={52}>
                                                <Circle ref={economiesRef} />
                                                <Text marginLeft={14}>Economies Integration</Text>
                                            </ItemContainer>

                                            <ItemContainer top={6} left={72}>
                                                <Circle ref={marketingRef} />
                                                <Text marginLeft={14}>Marketing Integration</Text>
                                            </ItemContainer>

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

export default Circles;