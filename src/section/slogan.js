import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Timeline } from 'react-gsap'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'


const Container = styled.div`
  overflow: hidden;

  .section {
    height: 20vh;
    background: linear-gradient(90deg, rgba(255,255,255,1) 16%, rgba(144,178,245,1) 45%, rgba(255,255,255,1) 79%);
  }
  .contentsContainer {
    height: 100vh;
    background: linear-gradient(90deg, rgba(255,255,255,1) 16%, rgba(144,178,245,1) 45%, rgba(255,255,255,1) 79%);
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
    font-size: 3.5rem;
    color: #FFF;
    opacity: ${p => p.opacity};
`

const Mask = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #FFF;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0 ;
  z-index: 20;
`

const VideoContainer = styled.div`
  background-color: #FFF;
  opacity: 0;
  position: relative;
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



const offset = 0.005
const duration = 1 / 5

function Trigger({ firstScenesRef, secondScenesRef, maskRef, videoRef, progress }) {
    useEffect(() => {
        if (progress > offset && progress < duration * 2) {
            gsap.to(firstScenesRef.current, { opacity: 1 })
            gsap.to(secondScenesRef.current, { opacity: 0 })
            gsap.to(maskRef.current, { opacity: 0 })
        } else if (progress > offset && progress > duration && progress < duration * 3) {
            gsap.to(firstScenesRef.current, { opacity: 0 })
            gsap.to(secondScenesRef.current, { opacity: 1 })
            gsap.to(maskRef.current, { opacity: 0 })
            gsap.to(videoRef.current, { opacity: 0 })
        } else if (progress > duration * 3 && progress < duration * 4) {
            gsap.to(maskRef.current, { opacity: progress })
        } else if (progress > duration * 4) {
            gsap.to(maskRef.current, { opacity: 0 })
            gsap.to(videoRef.current, { opacity: 1 })
        }
    }, [progress])
    return <div />
}

export default function SloganSection() {
    const firstScenesRef = useRef()
    const secondScenesRef = useRef()
    const maskRef = useRef()
    const videoRef = useRef()

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
                                        <Trigger progress={progress} firstScenesRef={firstScenesRef} secondScenesRef={secondScenesRef} maskRef={maskRef} videoRef={videoRef} />
                                        <Mask ref={maskRef} />
                                        <Text ref={firstScenesRef} opacity={1}>
                                            <div>UNLOCKING</div><div>OPPORTUNITIES</div>
                                        </Text>
                                        <Text ref={secondScenesRef} opacity={0}><div>BEYOND</div><div>BOUNDARIES</div></Text>
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