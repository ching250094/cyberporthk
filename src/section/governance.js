import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Timeline, Tween } from 'react-gsap'
import MissionSvg from '../assets/images/governance/mission.svg'
import ExpectationSvg from '../assets/images/governance/expectations.svg'
import GrowthSvg from '../assets/images/governance/growth.svg'

const AnimationContainer = styled.div`
    overflow: hidden;
    background: #00192B;

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
      }
`

const GovernanceGird = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;

    > * + * {
        border-left: 1px solid #999999;
    }
`

const Column = styled.div`
    height: 100%;
    width: calc(100% / 4);
    z-index: ${p => p.zIndex};
    overflow: hidden;
    text-align: ${p => p.textAlign}
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
    height: 30rem;
    top: 50%;
`

const Group = styled.div`
    img {
        width: 10rem;
        margin-bottom: 1rem;
    }
`

const Animation = () => {
    return (
        <AnimationContainer>
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