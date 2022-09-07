import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Timeline, Tween } from 'react-gsap'
import LeftSideSvg from '../../assets/images/ahead/asset_1.png'
import MiddleSideSvg from '../../assets/images/ahead/asset_2.png'
import RightSideSvg from '../../assets/images/ahead/asset_3.png'

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .section {
        height: 50vh;
    }

    .contentsContainer {
        height: 100vh;
        width: 100%;
      }
`

const Trigger = styled.div`
    margin: 5rem auto;
`

const Puzzles = styled.div`
    position: relative;
    width: 100%;

`
const Item = styled.div`
    position: absolute;
    width: ${p => p.width}%;
    height: 400px;
    background: url(${p => p.src});
    background-repeat: no-repeat;
    background-size: cover;
    will-change: transform;
    transform: ${p => p.transform};

`

export default function LookingAhead() {
    return (
        <Container>
            <div className="section" />
            <Trigger id="trigger" />
            <Controller>
                <Scene triggerHook="onEnter" duration={3000} offset={600} triggerElement="#trigger">
                    {(progress) => (
                        <div className="contentsContainer">
                            <Timeline totalProgress={progress} paused>
                                <Puzzles>
                                    <Tween to={{ transform: "skew(0, 0)" }} totalProgress={progress}>
                                        <Item src={LeftSideSvg} zIndex={3} width={40} transform="skew(5deg, -0.2deg)" />
                                    </Tween>

                                    <Tween to={{ transform: "skew(0, 0)" }} >
                                        <Item src={MiddleSideSvg} zIndex={1} width={70} transform="skew(-6deg, 6deg)" />
                                    </Tween>
                                    <Tween to={{ transform: "skew(0, 0)" }} >
                                        <Item src={RightSideSvg} zIndex={2} width={35} transform="skew(4deg, -7deg)" />
                                    </Tween>
                                </Puzzles>
                            </Timeline>
                        </div>
                    )}
                </Scene>
            </Controller >
        </Container >
    )
}