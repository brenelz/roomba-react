import React from 'react';
import { range } from "../utils";

function Grid({ coord, pointer }) {
    // eslint-disable-next-line no-unused-vars
    const grid = range(5).map(_ => range(5).map(_ => ''));
    const [x, y] = coord;

    return (
        grid.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex' }}>
                {row.map((_, columnIndex) => (
                    <div key={columnIndex} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        'alignItems': 'center',
                        width: 100,
                        height: 100,
                        border: '1px solid #333',
                        fontSize: 50
                    }}>
                        {x === rowIndex && y == columnIndex ? pointer : null}
                    </div>
                ))}
            </div >
        ))
    )
}

export default Grid;