import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todo from './Pages/todo/Todo'
import Pomodoro from './Pages/pomodoro/Pomodoro'
import './App.css'


import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index  element={<Todo/>} />
        <Route path='pomodoro' element={<Pomodoro/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
