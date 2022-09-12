import styled, { css } from 'styled-components'
import closeSvg from './assets/images/button/close.svg'
import backgroundImg from './assets/images/directors/profile/background.png'
import photo_1Img from './assets/images/directors/profile/photo_1.png'

const openStyle = css`
    animation: slidein .5s cubic-bezier(.78,.14,.15,.86);
    opacity: 1;
    transform: scale(1);

    @keyframes slidein {
        0% {
            opacity: 0;
            transform: scale(0);
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }
      }

`

const closeStyle = css`
    opacity: 0;
    transform: scale(0);
    animation: slideout .5s cubic-bezier(.78,.14,.15,.86);

    @keyframes slideout {
        0% {
            opacity: 1;
            transform: scale(1);
        }

        100% {
            opacity: 0;
            transform: scale(0);
        }
      }
`


const Mask = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    background: #FFF;
    opacity: 0;
    transform: scale(0);

    ${p => p.isOpen === undefined ? null : p.isOpen ? openStyle : closeStyle};
`

const ModalWrapper = styled.div`
    z-index: 1000;
    position: fixed;
    overflow: auto;
    inset: 0;
`

const Card = styled.div`
    position: relative;
    top: 70px;
    margin: 0 auto;
    max-width: calc(100vw - 120px);
    background-color: #FFF;
    box-shadow: 6px 6px 13px #C8C8C8;
    display: flex;
    align-items: center;
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

const LeftSideWrapper = styled.div`
    margin: 2%;
    z-index: 2;
    position: relative;
    overflow: hidden;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Background = styled.div`
    background: #000000b9;
    min-height: 550px;
    max-height: 650px;
    min-width: 550px;
    max-width: 750px;
    z-index: 1;
    position: relative;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    :before {
        background-image: url(${backgroundImg});
        background-repeat: no-repeat;
        background-size: cover;
        width: calc(100% - 50px);
        height: calc(100% - 50px);
        position: absolute;
        top: 25px;
        left: 25px;
        content: "";
        border-radius: 25px;
    }
`

const Position = styled.div`
    font-size: 2rem;
    color: #0055AD;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
`

const Name = styled.div`
    font-size: 1.3rem;
    color: #0055AD;
    margin-bottom: 1rem;
    font-weight: 600;
`

const Text = styled.div`
    position: absolute;
    color: #c5efee;
    width: 80%;
    line-height: 1.6;
    font-size: 1.4rem;
    text-align: center;
`

const RightSideWrapper = styled.div`
    margin-right: 2%;
    margin-top: calc(2rem + 1.3rem + 1rem + 1rem + 0.5rem);
`

const Photo = styled.img`
    max-width: 500px;
`

export default function Modal({ contents, onClose, isOpen }) {
    return (
        <Mask isOpen={isOpen}>
            <Header>
                <CloseButton src={closeSvg} onClick={onClose} />
            </Header>
            <ModalWrapper>
                <Card>
                    <LeftSideWrapper>
                        <Position>Chief Executive officer's Report</Position>
                        <Name>Peter YAN King-shun JP</Name>
                        <Background>
                            <Text>
                                New and traditional economies will become
                                intertwined as we enter a new age and further dive into advanced technological
                                discoveries. With this year's theme, "Unlocking opportunities beyond boundaries",
                                Cyberport aims to propel the entrepreneurship eco-system to the next level in terms of diversity and depth of
                                engagement.
                            </Text>
                        </Background>
                    </LeftSideWrapper>
                    <RightSideWrapper>
                        <Photo src={photo_1Img} />
                    </RightSideWrapper>
                </Card>
            </ModalWrapper>
        </Mask>
    )
}