import React from 'react';

interface Props {
    card: number[][]
}

const Card = ({ card }) => {
    const handleButtonClick = (number: number) => {
        console.log(number);
    };

    return (
        <div className="flex flex-col items-center justify-center gap-6 bg-indigo-100 p-4 rounded-md">
            <p className="text-black text-5xl font-medium">BINGO 75</p>
            <div className="grid grid-cols-5 gap-2">
        {card.map((row: number[], rowIndex: number) => (
            row.map((number: number, colIndex: number) => (
                <button
                    key={`${rowIndex}-${colIndex}`}
                    onClick={() => handleButtonClick(number)}
                    className="p-4 bg-white text-black rounded hover:bg-indigo-700 hover:text-white"
                >
                    {rowIndex===2 && colIndex===2 ? 'FREE' : number}
                </button>
            ))
        ))}
    </div>
        </div>
    )

};

export default Card;