import React from 'react';

interface Props {
    card: number[][]
    onClick: (coord_x: number, coord_y: number) => void
}

const Card = ({ card, onClick }) => {
    const handleCellClick = (coord_x: number, coord_y: number) => (event: React.MouseEvent) => {
        event.stopPropagation();
        onClick(coord_x, coord_y);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-6 bg-indigo-100 p-4 rounded-md">
            <p className="text-black text-6xl font-medium">BINGO 75</p>
            <div className="grid grid-cols-5 gap-2">
        {card.map((row: number[], rowIndex: number) => (
            row.map((number: number, colIndex: number) => (
                <button
                    key={`${rowIndex}-${colIndex}`}
                    onClick={handleCellClick(rowIndex, colIndex)}
                    className={`p-4 rounded hover:bg-indigo-700 hover:text-white ${
                        number === 0
                            ? 'bg-indigo-700 text-white'
                            : 'bg-white text-black' 
                    }`}
                    disabled={number === 0}
                >
                    {rowIndex===2 && colIndex===2 ? 'FREE' : (number === 0 ? '' : number)}
                </button>
            ))
        ))}
    </div>
        </div>
    )

};

export default Card;