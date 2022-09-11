import styled, { css } from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Timeline, Tween } from 'react-gsap'
import LeftSideSvg from '../../assets/images/ahead/asset_1.png'
import MiddleSideSvg from '../../assets/images/ahead/asset_2.png'
import RightSideSvg from '../../assets/images/ahead/asset_3.png'
import LeftSideBgImg from '../../assets/images/ahead/asset_4.png'
import MiddleBgSideImg from '../../assets/images/ahead/asset_5.png'
import CyberportImg from '../../assets/images/ahead/cyberport.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #0055AD;

    .section {
        height: 30vh;
    }

    .contentsContainer {
        height: 100%;
        width: 100%;
      }
`

const Trigger = styled.div`
    margin: 5rem auto;
`

const Title = styled.div`
      font-size: 6rem;
      color: #FFF;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      margin-bottom: 5rem;

      div:first-child {
        margin-right: 10%;
      }
`

const Puzzles = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;

`
const Item = styled.img`
    position: relative;
    max-width: ${p => p.maxWidth}px;
    min-width: ${p => p.minWidth}px;
    will-change: transform;
    transform: ${p => p.transform};
    margin-top: ${p => p.marginTop}%;
    z-index: ${p => p.zIndex};
`

const Background = styled.img`
      position: absolute;
      min-width: ${p => p.minWidth}px;
      max-width:  ${p => p.maxWidth}px;
      bottom: ${p => p.bottom}%;
      left: ${p => p.left}%;
      z-index: 1;
`


const Contents = styled.div`
      color: #FFF;
      font-size: 1.3rem;
      line-height: 1.6;
      padding: ${p => p.padding};
      display: flex;
      flex-direction: column;
      align-items: ${p => p.alignItems};
      
      > * {
        width: 60%;
      }

      * + * {
        margin-top: 1rem;
      }
`

const Group = styled.div`
    position: relative;
    display: flex;
    transform: ${p => p.transform};
`

const StaticContents = styled.div`
      margin-top: 5rem;
`

const Photo = styled.img`
    margin: 5% 0;
    width: 60%;
`

export default function LookingAhead() {
    return (
        <Container>
            <div className="section" />
            <Trigger id="ahead-trigger" />
            <Title>
                <div>LOOKING</div>
                <div>AHEAD</div>
            </Title>
            <Controller>
                <Scene triggerHook="onEnter" duration={1200} offset={800} triggerElement="#ahead-trigger">
                    {(progress) => (
                        <div className="contentsContainer">
                            <Timeline totalProgress={progress} paused>
                                <Puzzles>
                                    <Tween to={{ transform: "translate(167%, 0)" }} totalProgress={progress}>
                                        <Group transform="translate(150%, 0)">
                                            <Background src={LeftSideBgImg} minWidth={450} maxWidth={460} bottom={7} left={10} />
                                            <Item src={LeftSideSvg} minWidth={450} maxWidth={460} zIndex={22} />
                                        </Group>
                                    </Tween>
                                    <Tween>
                                        <Group transform="translate(34%, 0)">

                                            <Item src={MiddleSideSvg} minWidth={730} maxWidth={830} zIndex={20} />
                                        </Group>
                                    </Tween>
                                    <Tween to={{ transform: "translate(-15%, 0)" }} totalProgress={progress}>
                                        <Group>
                                            <Item src={RightSideSvg} minWidth={300} maxWidth={330} marginTop={47} zIndex={20} />
                                        </Group>
                                    </Tween>
                                </Puzzles>
                            </Timeline>
                            <StaticContents>
                                <Contents padding="0 10% 0">
                                    <div>
                                        Despite the pandemic and the challenges of uncertain times, Cyberport has not faltered in its engagement with the local and global community.
                                    </div>
                                    <div>
                                        Engagement is essential to effectively supporting our start-up community and we look forward to continuing active dialogue with our stakeholders and fostering effective collaborations in the GBA and beyond.
                                    </div>
                                </Contents>
                                <Photo src={CyberportImg} />
                                <Contents alignItems="flex-end" padding="0 10% 0 0">
                                    <div>
                                        Looking forward, the Cyberport 5 expansion project will become home to a growing addition of new and innovative start-ups. We will continue to advance efforts in talent cultivation, industry development, integration of new and traditional economies, and market outreach as Hong Kong's digital technology hub.
                                    </div>
                                </Contents>
                            </StaticContents>
                        </div>
                    )}
                </Scene>
            </Controller >
            <div className="section" />
        </Container >
    )
}