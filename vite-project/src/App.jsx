import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button className='increment'
      onClick={()=>setCount((count +1))}
      >increment</button>
      <button
      className='decrement'
      onClick={()=>setCount((count -1))}
      disabled={count===0}
      >decrement</button>
      <button
      className='reset'
       onClick={()=>setCount((0))}
       disabled={count===0}
       >reset </button>
    </>
  )
}

export default App
