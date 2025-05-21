import { useState } from 'react'
import './App.css'
import Time from './component/Time'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Time/>
    </>
  )
}

export default App
