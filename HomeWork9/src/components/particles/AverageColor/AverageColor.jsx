import React from 'react';

const AverageColor = ({color}) => {
    const {red, green, blue} = color;

    return <h3>The average color is: rgb({red}, {green}, {blue})</h3>
};

export default AverageColor;