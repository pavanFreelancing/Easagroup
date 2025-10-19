import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EasaLanding from './components/EASA-Landing-Page'
import AssetManagement from './components/AssetManagement'
import SolarEnergy from './components/SolarEnergy'
import GreenHydrogen from './components/GreenHydrogen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EasaLanding />} />
        <Route path="/asset-management" element={<AssetManagement />} />
        <Route path="/solar-energy" element={<SolarEnergy />} />
        <Route path="/green-hydrogen" element={<GreenHydrogen />} />
      </Routes>
    </Router>
  )
}

export default App
