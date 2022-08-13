import { useState, useReducer } from 'react'
export const State = () => {
    let [count, setCount] = useState(() => 1)
    let [number, dispatch] = useReducer((state, action) => {
    } )
    return (
        <>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>-</button>
        </>
    )
}