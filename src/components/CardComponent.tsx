import React from 'react';

interface Props {
    card: number[][]
}

const CardComponent = ({ card }) => {
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
                    className="p-4 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    {rowIndex===2 && colIndex===2 ? 'FREE' : number}
                </button>
            ))
        ))}
    </div>
    )

};

export default CardComponent;