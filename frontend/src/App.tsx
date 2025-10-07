import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EasaLanding from './components/EASA-Landing-Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <EasaLanding />
    </div>
  )
}

export default App
