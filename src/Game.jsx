import React, { useState } from 'react'
import Board from './Board'

export const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCuerrntMove] = useState(0)
    const currentSquares = history[currentMove]
    const xIsNext = currentSquares % 2 === 0;
    console.log('currentsqaure', currentSquares)

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory)
        setCuerrntMove(nextHistory.length - 1)
    }

    function jumpTo(nextMove) {
        setCuerrntMove(nextMove)
    }

    const moves = history.map((squares, move) => {
        let description;
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

    return (
        <div className='game'>
            <div className='game-board'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}
