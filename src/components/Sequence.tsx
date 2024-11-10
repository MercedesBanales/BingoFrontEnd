import React from 'react';

interface Props {
    sequence: string;
}

const Sequence = ({ sequence }: Props) => {
    return (
        <div className="flex flex-wrap justify-center items-center gap-2">
            {sequence.split(',').map((number, index) => (
                <span key={index} className="text-xl">{number}</span>
            ))}
        </div>
    );
};

export default Sequence;
