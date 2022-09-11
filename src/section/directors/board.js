import styled from 'styled-components'
import { Tween } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'
import { photoGrid } from './boardPhotos'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(circle, rgba(220,235,255,1) 14%, rgba(198,223,255,1) 35%, rgba(118,180,255,1) 60%, rgba(80,157,249,1) 81%, rgba(12,119,247,1) 96%);

    .section {
        height: 30vh;
    }
`

const Trigger = styled.div`
    margin: 2rem auto;
`

const BoardRow = styled.div`
    display: flex;
    position: relative;
    margin-top: 13rem;
`

const Photo = styled.img`   
    width: 20rem;
`

const PhotoContainer = styled.div`
    position: relative;
    will-change: transform;
    transform-style: preserve-3d;
    margin-left: 3rem;
    margin-right: 3rem;
`

const TitleTag = styled.div`
    align-self: flex-end;
    background-color: #0C77F7;
    color: #FFFFFF;
    font-size: 1.4em;
    padding: .5rem .8rem;
    margin-top: 3rem;
    margin-right: 2rem;
    z-index: 10;
`

export default function DirectorBoard({ setModal }) {
    return (
        <Container>
            <TitleTag>Annual Summary</TitleTag>
            <Trigger id="trigger" />
            <Controller>
                <Scene
                    offset={400}
                    triggerElement="#trigger"
                    triggerHook="onEnter"
                    duration={2500}
                >
                    {(progress) => (
                        <div>
                            {photoGrid.map(renderRow(progress))}
                        </div>
                    )}
                </Scene>
            </Controller>
            <div className="section" />
        </Container>
    )

    function renderRow(progress) {
        return (photos, index) => (
            <BoardRow key={index}>
                {photos.map((path, index) => (
                    <div onClick={() => setModal({ contents: 123 })}>
                        {index !== 1 ? (
                            <Transformer progress={progress}>
                                <PhotoContainer>
                                    <Photo src={path} key={index} />
                                </PhotoContainer>
                            </Transformer>) :
                            <PhotoContainer>
                                <Photo src={path} key={index} />
                            </PhotoContainer>
                        }

                    </div>
                ))}
            </BoardRow>
        )
    }
}

function Transformer({ children, progress }) {
    return (
        <Tween
            from={{
                transform: `translate(0px, 0)`,
            }}
            to={{
                transform: `translate(0px, -${progress * 400}px) `,
            }}
            totalProgress={progress}>
            {children}
        </Tween>

    )
}
