import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl font-semibold'>
        Vite + React
      </h1>
      <div className="card">
        <button 
          className='px-5 py-1 text-lg rounded-sm bg-green-300 text-black'
          onClick={() => setCount((count) => count + 1)}>
          count is <b>{count}</b> 
        </button> 
      </div> 
    </>
  )
}

export default App
