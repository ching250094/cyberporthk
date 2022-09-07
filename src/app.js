import CoverSection from './section/cover'
import SloganSection from './section/slogan'
import AnnualSummary from './section/summary'
import Directors from './section/directors'
import Circles from './section/circles'
import Esg from './section/esg'
import Governance from './section/governance'
import LookingAhead from './section/ahead'

function App() {

  return (
    <div className="app">
      <CoverSection />
      <SloganSection />
      <AnnualSummary />
      <Directors />
      <Circles />
      <Esg />
      <Governance />
      {/* <LookingAhead /> */}
    </div >
  );
}

export default App;
