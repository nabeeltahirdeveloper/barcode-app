import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AddEntry from './pages/AddEntry'
import MainPage from './pages/mainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AddEntry />
      <MainPage />
    </div>
  )
}

export default App
