import { useState, Suspense } from 'react'
import styled from 'styled-components'
import BackgroundImg from './assets/images/cover/background.png'
import CoverSection from './section/cover'
import SloganSection from './section/slogan'
import AnnualSummary from './section/summary'
import Directors from './section/directors'
import Circles from './section/circles'
import Esg from './section/esg'
import Governance from './section/governance'
import LookingAhead from './section/ahead'
import Modal from './Modal'

const Background = styled.div`
  background: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

function App() {
  const [modal, setModal] = useState()

  return (
    <div className="app">
      <Background>
        <CoverSection />
        <SloganSection />
      </Background>
      <AnnualSummary />
      <Directors setModal={setModal} />
      <Circles />
      <Esg />
      <Governance />
      <LookingAhead />
      <Modal contents={modal?.contents} onClose={() => setModal()} isOpen={modal} />
    </div>
  );
}

export default App;
