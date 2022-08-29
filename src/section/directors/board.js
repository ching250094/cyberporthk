import styled from 'styled-components'
import { Tween, Timeline } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'
import { getColumns } from './boardPhotos'

const Container = styled.div`
display: flex;
    justify-content: center;
`

const Board = styled.div`
    display: flex;
    justify-content: space-between;
`

const BoardCol = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: ${p => p.top};
    margin: 5rem;
`

const Photo = styled.img`   
    width: 15rem;
    margin-top: 5rem;
`


export default function DirectorBoard() {
    const columns = getColumns()

    return (
        <Container>
            <Board>
                <Controller>
                    <Scene duration={1200} pin>
                        <Timeline
                            target={<div><BoardCol top="0px">
                                {columns[1].map(renderPhotos)}
                            </BoardCol></div>}>
                            <Tween
                                from={{ y: "0" }}
                                to={{ y: "30px" }}
                            />
                        </Timeline>

                        {/* <BoardCol top="0px">
                            {columns[1].map(renderPhotos)}
                        </BoardCol>

                        <BoardCol top="5.5rem">
                            {columns[2].map(renderPhotos)}
                        </BoardCol>

                        <BoardCol top="0px">
                            {columns[3].map(renderPhotos)}
                        </BoardCol> */}
                    </Scene>
                </Controller>
            </Board>
        </Container >



    )

    function renderPhotos(path, index) {
        return <Photo src={path} key={index} />
    }
}