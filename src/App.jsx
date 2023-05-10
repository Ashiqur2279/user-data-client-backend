import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './Componets/Nav/Nav'

function App() {
  
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  )
}

export default App
