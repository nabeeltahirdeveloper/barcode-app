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
import ViewProduct from './pages/ViewProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/addentry" element={<AddEntry />} />
          <Route path="/viewData" element={<ViewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
