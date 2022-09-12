import { useState } from 'react'
import styled, { css } from 'styled-components'
import CoverSection from './section/cover'
import SloganSection from './section/slogan'
import AnnualSummary from './section/summary'
import Directors from './section/directors'
import Circles from './section/circles'
import Esg from './section/esg'
import Governance from './section/governance'
import LookingAhead from './section/ahead'
import Modal from './Modal'


function App() {
  const [modal, setModal] = useState()

  return (
    <div className="app">
      <CoverSection />
      <SloganSection />
      <AnnualSummary />
      <Directors setModal={setModal} />
      <Circles />
      <Esg />
      <Governance />
      <LookingAhead />
      <Modal contents={modal?.contents} onClose={() => setModal()} isOpen={modal} />
    </div >
  );
}

export default App;
