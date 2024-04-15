import { useState } from 'react'
import { Button } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Button onClick={() => setCount(count + 1)}>click me: {count}</Button>
  )
}

export default App
