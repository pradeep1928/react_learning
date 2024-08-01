import { useState, useCallback } from "react";
import UseCallbackChild from './UseCallbackChild'
import './App.css'

function useCallbackEx() {
    const [count, setCount] = useState(0)
    const [dark, setDark] = useState(0)

    const updateCount = () => {
        setCount((preCount) => preCount + 1)
    }

    const printCount = useCallback(() => {
        return [count, count + 1, count + 2]
    }, [count])

    const toggleTheme = () => {
        setDark((dark) => !dark)
    }

    const theme = {
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333'
    }

    return (
        <div style={theme}>
            <h3>useCallback example</h3>
            <h3>count = {count}</h3>
            <button type='button' onClick={updateCount}>count</button>
            <button type='button' onClick={toggleTheme}>Toggle Theme</button>
            <UseCallbackChild printCount={printCount} />
        </div>
    )
}

export default useCallbackEx