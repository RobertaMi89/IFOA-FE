import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import NavBarDark from './components/NavBarDark'
import Footer from './components/Footer'
import Jumbotron from './components/Jumbotron'
import CardBooks from './components/AllTheBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBarDark/>
        <Jumbotron/>
        <CardBooks/>
        <Footer/>
      </div>
    </>
  )
}

export default App;
