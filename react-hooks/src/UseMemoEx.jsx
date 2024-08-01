import { useState, useMemo } from 'react'
import './App.css'

function UseMemoEx() {
  const [count, setCount] = useState(0)
  const [item, setItem] = useState(0)

  const updateCount = () => {
    setCount((preCount) => preCount + 1)
  }

  const updateItem = () => {
    setItem((preItem) => preItem + 10)
  }

  const memoized = useMemo(() => {
    return count * 5
  }, [count])

  return (
    <>
      <h3>useMemo example</h3>
      <h3>count = {count}</h3>
      <h3>item = {item}</h3>
      <h3>memoized = {memoized}</h3>
      <button type='button' onClick={updateCount}>count</button>
      <button type='button' onClick={updateItem}>item</button>

    </>
  )
}

export default UseMemoEx
