import React, { useState, useCallback, useMemo } from "react";
import { shallowEqual } from "react-redux";
import './board.css'
import axios from "axios";
import { useWhyDidYouUpdate } from 'ahooks';
import '../mock/index'
axios.post('/api/add', {name: 1}).then((res) => {
})
axios.post('/api/get', {a: 1}).then((res) => {
    console.log('list')
    console.log(res)
})
class Square extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('nextProps', nextProps)
        console.log('nextState', nextState)
        return true;
    }
    render() {
        return (
        <button className="square-button" onClick={() => this.props.downPieces()}>
            {this.props.display}
        </button>
        )
    }
}
function Board() {
    const [square, setSquare] = useState(new Array(9).fill(0).map((v, i) => i))
    const [isNext, setIsNext] = useState(true)
    const [t, setT] = useState(0)
    const downPieces = useCallback(function downPieces(i) {
        if (square[i] === 'O' || square[i] === 'X') {
            setT(1)
            return
        }
        const nSquare = square.slice()
        nSquare[i] = isNext ? 'O':'X'
        setIsNext(!isNext)
        setSquare([...nSquare])
    })
    const Test = React.memo((i) => {
        return <Square {...i}/>
    })
    return (
        <>
            <div className="square-wraper">
                {
                    square.map((i, index) => <Test key={index} display={i} downPieces={() => downPieces(index)}/>)
                }
            </div>
        </>
    )
}
export const Game = () => {
    return (
        <>
            <Board></Board>
        </>
    )
}