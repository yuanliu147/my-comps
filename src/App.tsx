import { useState } from 'react'
import { Button, Image } from 'antd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button onClick={() => setCount(count + 1)}>click me</Button>
      <Image src="/vite.svg" />
    </>
    
  )
}

export default App
