import React from 'react';

function Time({ width = '25px', height = '25px' }) {
    return (
        <>
            <svg
                width={width}
                height={height}
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="48" stroke="#fff" strokeWidth="4" />
                <line x1="50" y1="50" x2="50" y2="20" stroke="#fff" strokeWidth="4" />
                <line x1="50" y1="50" x2="75" y2="50" stroke="#fff" strokeWidth="4" />
                <circle cx="50" cy="50" r="3" fill="#fff" />
            </svg>
        </>
    );
}

export default Time;
