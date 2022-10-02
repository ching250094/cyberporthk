import styled from 'styled-components'
import CyberportSvg from './assets/images/cyberportLogo.svg'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Logo = styled.img.attrs({ src: CyberportSvg })`
  width: 30%;
`

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #339cd6;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
    background: #339cd6;
  }
  
  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
    background: #54c1f0;
  }
  
  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
    background: #89c640;
  }

  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
    background: #bdd630;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`


export default function Spinner() {
  return (
    <Container>
      <Logo />
      <Loader><div></div><div></div><div></div><div></div></Loader>
    </Container>
  )

}