import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import CyberportCommunity from './community'
import TalentCultivation from './cultivation'
import IndustryDevelopment from './industry'
import StartupAchievements from './startup'

const Container = styled.div`
    overflow: hidden;

    .section {
        height: 20vh;
    }

    .contentsContainer {
        height: 100vh;
    }

`

const Slide = styled.div`
    display: flex;
    position:relative;
    overflow: hidden;
    width:${p => p.width * 4}px;

    > div {
        height:100%;
        width: ${p => p.width}px;
    }

    > div:nth-child(1) {
       left:0;
    }

    > div:nth-child(2) {
        left:${p => p.width}px;
     }

     > div:nth-child(3) {
        left:${p => p.width * 2}px;
     }

     > div:nth-child(4) {
        left:${p => p.width * 3}px;
     }

`

function SlideContents() {
    const visibleWidth = window.innerWidth;
    return (
        <Slide width={visibleWidth}>
            <div><CyberportCommunity /></div>
            <div><TalentCultivation /></div>
            <div><IndustryDevelopment /></div>
            <div><StartupAchievements /></div>
        </Slide>
    )
}


const Summary = () => (
    <Container>
        <div className="section" />
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
                                <div>
                                    <Tween from={{ x: '0' }} to={{ x: '-300%' }}>
                                        <div><SlideContents /></div>
                                    </Tween>
                                </div>
                            </Timeline>
                        </div>
                    )}
                </Scene>
            </div>
        </Controller>
        <div className="section" />
    </Container >
);


export default Summary