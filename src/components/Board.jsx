
import React from 'react';
import Square from './Square';


const Board = ({squares,onClick}) => {
    let board = []
        for(let i = 0, j = 3; i < j; i++)
        {
            let square = [];
            for(let k = 0, l = 3; k < l; k++)
            {
                square.push(<Square value={squares[i]} onClick={() => onClick(i)} />)
            }
            board.push(<div className='row' key={i}> {square} </div>)
        }
    }

export default Board
