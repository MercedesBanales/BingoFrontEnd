import React from 'react';

interface Props {
    sequence: string;
}

const Sequence = ({ sequence }: Props) => {
    const sequenceArray = sequence.split(',');

    return (
        <div className="flex flex-wrap justify-center items-center gap-2">
            {sequenceArray.map((number, index) => (
                <span 
                    key={index} 
                    className={`${index === sequenceArray.length - 1 ? 'text-3xl font-bold' : 'text-xl'}`}
                >
                    {number},
                </span>
            ))}
        </div>
    );
};

export default Sequence;
