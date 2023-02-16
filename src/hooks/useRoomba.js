import React from 'react';
import { useCallback } from "react";
import { useState } from "react";

export default function useRoomba() {
    const [pointer, setPointer] = useState('👉');
    const [coord, setCoord] = useState([0, 0]);

    const togglePointer = useCallback(() => {
        if (pointer === '👉') {
            setPointer('👇')
        } else if (pointer === '👇') {
            setPointer('👈')
        } else if (pointer === '👈') {
            setPointer('👆')
        } else if (pointer === '👆') {
            setPointer('👉')
        }
    }, [pointer]);

    const move = React.useCallback(() => {
        let [x, y] = coord;
        if (pointer === '👉') {
            y += 1;
        } else if (pointer === '👇') {
            x += 1;
        } else if (pointer === '👈') {
            y -= 1;
        } else if (pointer === '👆') {
            x -= 1;
        }

        if (x > 4) {
            x = 4;
            togglePointer();
        }

        if (y > 4) {
            y = 4;
            togglePointer();
        }

        if (x < 0) {
            x = 0;
            togglePointer();
        }

        if (y < 0) {
            y = 0;
            togglePointer();
        }

        setCoord([x, y]);
    }, [coord, pointer, togglePointer]);

    return {pointer, coord, togglePointer, move};
}