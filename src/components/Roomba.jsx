import React from 'react';
import { useEffect } from 'react';
import useRoomba from '../hooks/useRoomba';
import Grid from './Grid';

export default function Roomba() {
    const { pointer, coord, togglePointer, move } = useRoomba();

    useEffect(() => {
        const timer = setInterval(move, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [move])

    return (
        <div>
            <h1>Roomba</h1>
            <p>
                <button onClick={togglePointer}>Change Direction</button>
            </p>
            <Grid coord={coord} pointer={pointer} />
        </div>
    )
}