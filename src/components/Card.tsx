import React from 'react';

interface Props {
    card: number[][]
}

const Card = ({ card }) => {
    const handleButtonClick = (number: number) => {
        console.log(number);
    };

    return (
        <div className="grid grid-cols-5 gap-2">
        {card.map((row: number[], rowIndex: number) => (
            row.map((number: number, colIndex: number) => (
                <button
                    key={`${rowIndex}-${colIndex}`}
                    onClick={() => handleButtonClick(number)}
                    className="p-4 bg-indigo-100 text-black rounded hover:bg-indigo-700 hover:text-white"
                >
                    {rowIndex===2 && colIndex===2 ? 'FREE' : number}
                </button>
            ))
        ))}
    </div>
    )

};

export default Card;