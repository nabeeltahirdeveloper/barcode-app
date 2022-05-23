import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AddEntry from './pages/AddEntry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddEntry/>
    </div>
  )
}

export default App
