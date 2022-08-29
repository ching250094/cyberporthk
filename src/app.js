import React, { useRef } from 'react'
import CoverSection from './section/cover'
import SloganSection from './section/slogan'
import AnnualSummary from './section/summary'
import Directors from './section/directors'

function App() {
  const coverRefs = useRef()

  return (
    <div className="app">
      <CoverSection ref={coverRefs} />
      <SloganSection />
      <AnnualSummary />
      <Directors />
    </div >
  );
}

export default App;
