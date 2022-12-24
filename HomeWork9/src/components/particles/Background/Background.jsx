import React from 'react';

import "./Background.css";


const Background = ({color, setColor}) => {
    return (
        <div
            className="background"
            style={{
                backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`
            }}
            onClick={setColor}
        />
    );
};

export default Background;