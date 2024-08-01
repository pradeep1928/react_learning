import { useState, useMemo, useEffect } from 'react'
import './App.css'

function UseCallbackChild({printCount}) {
  const [items, setItem] = useState([])

  useEffect(() => {
    setItem(printCount())
    console.log('Updating child')
  }, [printCount])

  return (
    <>
        {items.map(item => <h4 key={item}>{item}</h4>)}
    </>
  )
}

export default UseCallbackChild
