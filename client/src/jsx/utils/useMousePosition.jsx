import { useState } from 'react'

const useMousePosition = () => {

    const [coordinate, setMousePosition] = useState(
        {
            x: null,
            y: null,
        }
    )

    const updateMousePosition = e => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });
    };

    return (
        coordinate,
        updateMousePosition
    )
}

export default useMousePosition