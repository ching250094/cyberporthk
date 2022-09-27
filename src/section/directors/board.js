import styled from 'styled-components'
import { Tween } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'
import breakpoints from '../../style/breakpoints'
import useMediaQuery from '../../hooks/useMediaQuery'
import { photoGrid } from './boardPhotos'

const Photo = styled.img`   
    width: 20rem;
    cursor: pointer;
`

const PhotoContainer = styled.div`
    position: relative;
    will-change: transform;
    transform-style: preserve-3d;
    margin-left: 3rem;
    margin-right: 3rem;
`

const BoardRow = styled.div`
    display: flex;
    position: relative;
    margin-top: 13rem;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: radial-gradient(circle, rgba(220,235,255,1) 14%, rgba(198,223,255,1) 35%, rgba(118,180,255,1) 60%, rgba(80,157,249,1) 81%, rgba(12,119,247,1) 96%);

    .section {
        height: 30vh;
    }

    @media only screen and ${breakpoints.mobile} {
        ${PhotoContainer} {
            margin-left: -2px;
            margin-right: -2px;
            margin-bottom: -4px;
        }

        ${Photo} {
            width: 100%;
            display: block;
        }
        
        ${BoardRow} {
            margin-top: 0;
        }
    }

`

const Trigger = styled.div`
    margin: 2rem auto;
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
    const isDesktop = useMediaQuery('desktop')

    return (
        <Container>
            {isDesktop && <TitleTag>Annual Summary</TitleTag>}
            <Trigger id="trigger" />
            {isDesktop ? <Desktop setModal={setModal} /> : <Mobile setModal={setModal} />}
            <div className="section" />
        </Container>
    )
}

function Desktop({ setModal }) {
    return (
        <Controller>
            <Scene
                offset={400}
                triggerElement="#trigger"
                triggerHook="onEnter"
                duration={2500}>
                {(progress) => (
                    <div>
                        {photoGrid.map(renderRow(progress))}
                    </div>
                )}
            </Scene>
        </Controller>
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
                            </PhotoContainer>}
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

function Mobile({ setModal }) {
    return (
        <div>
            {photoGrid.map(renderRow)}
        </div>
    )

    function renderRow(photos, index) {
        return (
            <BoardRow key={index}>
                {photos.map((path, idx) => (
                    <div onClick={() => setModal({ contents: 123 })}>
                        <PhotoContainer>
                            <Photo src={path} key={idx} />
                        </PhotoContainer>
                    </div>
                ))}
            </BoardRow>)
    }
}