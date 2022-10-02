import styled, { keyframes, css } from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Timeline } from 'react-gsap'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import bulbImg from '../assets/images/cover/bulb.png'
import humanImg from '../assets/images/cover/human.png'
import treeImg from '../assets/images/cover/tree.png'
import rocketImg from '../assets/images/cover/rocket.png'
import fiveGImg from '../assets/images/cover/five_g.png'
import mapImg from '../assets/images/cover/map.png'


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
  }
`

const Text = styled.div`
    position: absolute;
    font-size: 2.7rem;
    color: #FFF;
    opacity: ${p => p.opacity};
    text-align: center;
    margin-top: 10%;
`

const VideoContainer = styled.div`
  background-color: #FFF;
  opacity: 0;
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  overflow: hidden;
`

const Video = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  margin: 2rem;
  border-radius: 70px;
  width: 100vw;
    &:after{
        position: absolute;
        top: 0;
        left: 0;
        background: #000;
        width: 100%;
        height: 100%;
        content: "";
        opacity: 0.5;
        overflow: hidden;
    }
`

const VideoContents = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15%;
  left: 10%;
  color: #FFF;
    > div {
        width: 70%;
        font-size: 1.5rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;

        &:last-child{
            font-size: 3rem;
            margin-top: 2rem;
        }
    }
`

const Bulb = styled.div`
    width: 350px;
    height: 100%;
    bottom: 0;
    position: relative;
    z-index: 2;
    :before {
        content: "";
        position: absolute;
        background: url(${bulbImg});
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: bottom;
        width: 100%;
        height: 100%;
    }
`

const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`

const floatAnimation = keyframes`
    25% {
        transform: translateY(-5px);
    }
    100%,
    {
        transform: translateY(0px);
    }
`

const animation = css`
    animation: ${floatAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`

const HumanImage = styled.img.attrs({ src: humanImg })`
    z-index: 3;
    width: 200px;
    position: absolute;
    bottom: 20%;
    left: 10%;
`

const TreeImage = styled.img.attrs({ src: treeImg })`
    z-index: 3;
    width: 200px;
    position: absolute;
    bottom: 40%;
    left: -10%;
    ${animation}
`

const RocketImage = styled.img.attrs({ src: rocketImg })`
    z-index: 3;
    width: 100px;
    position: absolute;
    bottom: 40%;
    right: -10%;
    ${animation}
`

const FiveGImage = styled.img.attrs({ src: fiveGImg })`
    z-index: 3;
    width: 100px;
    position: absolute;
    bottom: 30%;
    right: -10%;
    ${animation}
`

const MapImage = styled.img.attrs({ src: mapImg })`
    z-index: 3;
    width: 750px;
    position: absolute;
    bottom: 5%;
    left: -60%;
    z-index: 1;
`



const offset = 0.005
const duration = 1 / 5

function Trigger({ firstScenesRef, secondScenesRef, videoRef, bulbRef, progress }) {
    useEffect(() => {
        if (progress > offset && progress < duration * 2) {
            gsap.to(firstScenesRef.current, { opacity: 1 })
            gsap.to(secondScenesRef.current, { opacity: 0 })
            gsap.to(bulbRef.current, { opacity: 1 })
        } else if (progress > offset && progress > duration && progress < duration * 3) {
            gsap.to(firstScenesRef.current, { opacity: 0 })
            gsap.to(secondScenesRef.current, { opacity: 1 })
            gsap.to(videoRef.current, { opacity: 0 })
            gsap.to(bulbRef.current, { opacity: 1 })
        } else if (progress > duration * 3 && progress < duration * 4) {
        } else if (progress > duration * 4) {
            gsap.to(videoRef.current, { opacity: 1 })
            gsap.to(bulbRef.current, { opacity: 0 })

        }
    }, [progress])
    return <div />
}

export default function SloganSection() {
    const firstScenesRef = useRef()
    const secondScenesRef = useRef()
    const videoRef = useRef()
    const bulbRef = useRef()

    return (
        <Container>
            <div className="section" />
            <Controller>
                <div>
                    <Scene
                        triggerHook="onLeave"
                        duration={2500}
                        pin
                    >
                        {(progress) => (
                            <div className="contentsContainer">
                                <Timeline totalProgress={progress} paused>
                                    <div className="contents">
                                        <Trigger progress={progress} firstScenesRef={firstScenesRef} secondScenesRef={secondScenesRef} videoRef={videoRef} bulbRef={bulbRef} />
                                        <Contents>
                                            <Text ref={firstScenesRef} opacity={1}>
                                                <div>UNLOCKING</div><div>OPPORTUNITIES</div>
                                            </Text>
                                            <Text ref={secondScenesRef} opacity={0}><div>BEYOND</div><div>BOUNDARIES</div></Text>
                                            <Bulb ref={bulbRef}>
                                                <HumanImage />
                                                <TreeImage />
                                                <RocketImage />
                                                <FiveGImage />
                                                <MapImage />
                                            </Bulb>
                                        </Contents>
                                        <VideoContainer ref={videoRef}>
                                            <Video>
                                                <iframe src="https://www.youtube.com/embed/jvsgUaUVk0c?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist=jvsgUaUVk0c" width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                                            </Video>
                                            <VideoContents>
                                                <div>Despite the global market sentiment gas been weak for the whole 2021</div>
                                                <div>Cyberport and its startup community has achieved remarkable results</div>
                                                <div>ANNUAL HIGHLIGHTS</div>
                                            </VideoContents>
                                        </VideoContainer>
                                    </div>
                                </Timeline>
                            </div>
                        )}
                    </Scene>
                </div>
            </Controller>
        </Container >)
}