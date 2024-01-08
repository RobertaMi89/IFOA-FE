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
      <h1>Vite + React</h1>
      <div className="card">
        <ButtonComponent text="Button" btn={()=>{SetShowImage(!showImage)}}/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
