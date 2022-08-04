import { useState } from 'react'
import './MyButton.css'

export default function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <button className="btn" onClick={handleClick}>
      Clicked {count} times
    </button>
  )
}
