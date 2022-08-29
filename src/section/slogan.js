import styled from 'styled-components'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'


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

  .text {
    position: absolute;
    font-size: 3.5rem;
    color: #FFF;
  }
`;

const SloganSection = () => (
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
                                    <Tween
                                        from={{ opacity: 1 }}
                                        to={{ opacity: 0 }}
                                    >
                                        <div className="text">
                                            <div>UNLOCKING</div><div>OPPORTUNITIES</div>
                                        </div>
                                    </Tween>
                                    <Timeline
                                        target={<div className="text"><div>BEYOND</div><div>BOUNDARIES</div></div>}>
                                        <Tween
                                            from={{ opacity: 0 }}
                                            to={{ opacity: 1 }}
                                        />
                                    </Timeline>
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

export default SloganSection;