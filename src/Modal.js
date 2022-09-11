import styled from 'styled-components'
import closeSvg from './assets/images/button/close.svg'

const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #FFF;
`

const ModalWrapper = styled.div`
    z-index: 1000;
    position: fixed;
    overflow: auto;
    inset: 0;
`

const Card = styled.div`
    position: relative;
    top: 20%;
    margin: 0 auto;
    max-width: calc(100vw - 120px);
    background-color: #FFF;
    box-shadow: 6px 6px 13px #C8C8C8;
`

const Header = styled.div`
    display: flex;
    justify-content: flex-end;
`

const CloseButton = styled.img`
    width: 2rem;
    margin: 2rem;
    cursor: pointer;
    z-index: 1001;
`

export default function Modal({ contents, onClose }) {
    console.log({ onClose })
    return (
        <Mask>
            <Header>
                <CloseButton src={closeSvg} onClick={onClose} />
            </Header>
            <ModalWrapper>
                <Card>
                    {contents}
                </Card>
            </ModalWrapper>
        </Mask>
    )
}