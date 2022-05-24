import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AddEntry from './pages/AddEntry'
import MainPage from './pages/mainPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/addentry" element={<AddEntry />} />
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
