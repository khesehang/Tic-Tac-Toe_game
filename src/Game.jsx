import React, { useState } from 'react'
import Board from './Board'

export const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCuerrntMove] = useState(0)
    const [sortOrder, setSortOrder] = useState('ascending')
    const currentSquares = history[currentMove]
    const xIsNext = currentMove % 2 === 0;
console.log('history',history)
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory)
        setCuerrntMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCuerrntMove(nextMove)
        setHistory(history.slice(0, nextMove + 1))
    }

    const moves = history.map((squares, move) => {
        let description;
        console.log('sqqares',squares,move)
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li>
                <button onClick={() => jumpTo(move)} > {description} </button>
            </li>
        )
    })

    function ToggleSort() {
       setSortOrder(sortOrder === 'ascending'?'descending':'ascending')
    }

    const SortedMoves = sortOrder === 'ascending'?
    moves: moves.slice( ).reverse()

    return (
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
            <button className='toggleSort' onClick = {ToggleSort}>
            Sort Order to : {sortOrder}
            </button>
                <ol>{SortedMoves}</ol>
            </div>
        </div>
    )
}
