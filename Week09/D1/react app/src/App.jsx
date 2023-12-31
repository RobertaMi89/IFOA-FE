import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  const [showImage, SetShowImage] = useState(true)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          {showImage && <ImageComponent src={viteLogo} myClass="vite logo" alt={"vite logo"}/>}
        </a>
        <a href="https://react.dev" target="_blank">
          <ImageComponent src={reactLogo} myClass="react logo" alt={"react logo"}/>
        </a>
      </div>
      <h1>Esercizio IFOA</h1>
      <div className="card">
        <ButtonComponent text="Cliccami" btn={()=>{SetShowImage(!showImage)}}/>
      </div>
      
    </>
  )
}

export default App
