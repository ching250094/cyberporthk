import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Timeline, Tween } from 'react-gsap'
import MissionSvg from '../assets/images/governance/mission.svg'
import ExpectationSvg from '../assets/images/governance/expectations.svg'
import GrowthSvg from '../assets/images/governance/growth.svg'
import breakpoints from '../style/breakpoints'

const AnimationContainer = styled.div`
    overflow: hidden;
    background: #00192B;

    .section {
        height: 20vh;
      }

    .contentsContainer {
        height: 2000px;
        width: 100%;
      }

      .contents {
        width: 100%;
        height: 100%;
      }
`


const Column = styled.div`
    height: 100%;
    width: calc(100% / 4);
    z-index: ${p => p.zIndex};
    overflow: hidden;
    text-align: ${p => p.textAlign};
    position: sticky;
`

const GovernanceGird = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;

    > * + ${Column} {
        border-left: 1px solid #999999;
    }
`

const Content = styled.div`
    position: relative;
    will-change: transform;
    transform-style: preserve-3d;
    transform: translate(calc(100% / 4 * ${p => p.index} * 5), 0);
    font-size: 7.5rem;
    margin: 0 12px;
    color: #0056AE;

`

const StaticContents = styled.div`
    position: absolute;
    top: 25%;
    z-index: 20;
    width: calc(100% / 4 - 20%);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
`

const Box = styled.div`
    width: ${p => p.width ?? 40}%;
    text-align: center;
    margin: ${p => p.margin};
    color: #0056AE;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    img {
        width: 7rem;
        margin-bottom: 1rem;
    }
    @media only screen and ${breakpoints.pad} {
        width: 70%;
    }
`

const Animation = () => {
    return (
        <AnimationContainer>
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
                                        <GovernanceGird>
                                            <Tween>
                                                <Column zIndex={11} textAlign="right">
                                                    <Timeline target={<Content index={1}>CO</Content>}>
                                                        <Tween to={{ transform: "translate(0px, 0)" }} />
                                                    </Timeline>
                                                    <Timeline target={<Content index={1}>GO</Content>}>
                                                        <Tween to={{ transform: "translate(0px, 0)" }} />
                                                    </Timeline>
                                                </Column>
                                                <Column zIndex={11}>
                                                    <Timeline target={<Content index={2}>RPO</Content>}>
                                                        <Tween to={{ transform: "translate(0px, 0)" }} />
                                                    </Timeline>
                                                    <Timeline target={<Content index={2}>VER</Content>}>
                                                        <Tween to={{ transform: "translate(0px, 0)" }} />
                                                    </Timeline>
                                                </Column>
                                                <Column zIndex={11}>
                                                    <Timeline target={<Content index={3}>RAT</Content>}>
                                                        <Tween to={{ transform: "translate(0px, 0)" }} />
                                                    </Timeline>
                                                    <Timeline target={<Content index={3}>NAN</Content>}>
                                                        <Tween to={{ transform: "translate(0px, 0)" }} />
                                                    </Timeline>
                                                </Column>
                                                <Column zIndex={11}>
                                                    <Timeline target={<Content index={4}>E</Content>}>
                                                        <Tween to={{ transform: "translate(0px, 0)" }} />
                                                    </Timeline>
                                                    <Timeline target={<Content index={4}>CE</Content>}>
                                                        <Tween to={{ transform: "translate(0px, 0)" }} />
                                                    </Timeline>
                                                </Column>
                                            </Tween>
                                            <StaticContents>
                                                <Box>Cyberport believes</Box>
                                                <Box width="25" margin="5rem">that good corporate governance is essential to</Box>
                                                <Box margin="2.5rem 0">
                                                    <img src={MissionSvg} />
                                                    <div>accomplishing our public missions,</div>
                                                </Box>
                                                <Box margin="2.5rem 0">
                                                    <img src={ExpectationSvg} />
                                                    <div>meeting stakeholders' expectations,</div>
                                                </Box>
                                                <Box margin="2.5rem 0">
                                                    <img src={GrowthSvg} />
                                                    <div>and attaining sustainable growth.</div>
                                                </Box>
                                                <Box margin="5rem 0">
                                                    We are committed to upholding high standards of corporate governance and have adopted accountability, transparency, fairness, ethics and integrity as the cornerstones of our framework.
                                                </Box>
                                            </StaticContents>
                                        </GovernanceGird>
                                    </div>
                                </Timeline>
                            </div>
                        )}
                    </Scene>
                </div>
            </Controller >
        </AnimationContainer >
    )
}


export default Animation