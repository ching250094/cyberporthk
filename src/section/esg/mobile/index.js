import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import Points from './Points'
import CommunityCards from './CommunityCards'
import CommunityText from './CommunityText'
import Recycling from './Recycling'
import Parking from './Parking'
import Room from './Room'
import Cyberport from './Cyberport'

const Container = styled.div`
    overflow: hidden;

    .contentsContainer {
        height: 100vh;
    }
`

const Slide = styled.div`
    display: flex;
    position:relative;
    overflow: hidden;
    height: 100vh;
    width:${p => p.width * 8}px;

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

     > div:nth-child(5) {
        left:${p => p.width * 4}px;
     }

     > div:nth-child(6) {
        left:${p => p.width * 5}px;
     }

     > div:nth-child(7) {
        left:${p => p.width * 6}px;
     }

     > div:nth-child(8) {
        left:${p => p.width * 7}px;
     }

`


function SlideContents() {
    const visibleWidth = window.innerWidth;
    return (
        <Slide width={visibleWidth}>
            <div><Points /></div>
            <div><CommunityCards /></div>
            <div><CommunityText /></div>
            <div><Recycling /></div>
            <div><Parking /></div>
            <div><Room /></div>
            <div><Cyberport /></div>
        </Slide>
    )
}

export default function Mobile() {
    return (
        <Container>
            <Controller>
                <div>
                    <Scene triggerHook="onLeave" duration={5000} pin>
                        {(progress) => (
                            <div className="contentsContainer">
                                <Timeline totalProgress={progress} paused>
                                    <div>
                                        <Tween from={{ x: '0' }} to={{ x: '-600%' }}>
                                            <div><SlideContents /></div>
                                        </Tween>
                                    </div>
                                </Timeline>
                            </div>
                        )}
                    </Scene>
                </div>
            </Controller>
        </Container>
    )
}