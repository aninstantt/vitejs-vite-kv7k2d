import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Test from './Test'
import './App.css'
import useCountdown from './hooks/useCountdown'
import useDebounce from './hooks/useDebounce'

function App() {
  const [count, _setCount] = useState(0)

  const callback = () => console.log('callback' + count)
  const { seconds, start, pause, resume } = useCountdown(callback, 10)
  const setCount = useDebounce<number>(_setCount, 1000)


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>seconds: {seconds}</div>
        <button onClick={start}>start</button>
        <button onClick={pause}>pause</button>
        <button onClick={resume}>resume</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Test />
    </>
  )
}

export default App
