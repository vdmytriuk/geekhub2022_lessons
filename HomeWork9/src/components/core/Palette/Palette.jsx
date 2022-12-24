import React, {useState} from 'react';

import Background from "../../particles/Background/Background";
import AverageColor from "../../particles/AverageColor/AverageColor";
import DominantColor from "../../particles/DominantColor/DominantColor";

import "./Palette.css";


const Palette = () => {
    const [rgbColor, setRgbColor] = useState({red: 127, green: 127, blue: 127});
    const [averageColor, setAverageColor] = useState(rgbColor);
    const [allColors, setAllColors] = useState([rgbColor]);
    const [dominantColor, setDominantColor] = useState("All colors are equal");

    const getSum = (arr, key) => arr.reduce((sum, current) => sum + current[key], 0);
    const getRandomNumb = max => Math.floor(Math.random() * max);
    const getCorrectNumb = n => Number(n).toFixed();

    const generateNewAverage = (newColor) => {
        const actualColors = [...allColors, newColor];
        const {length} = actualColors;

        const averageColor = {
            red: getCorrectNumb(getSum(actualColors, "red") / length),
            green: getCorrectNumb(getSum(actualColors, "green") / length),
            blue: getCorrectNumb(getSum(actualColors, "blue") / length),
        }

        setAverageColor(averageColor);
    }

    const generateNewDominant = (newColor) => {
        const {red, green, blue} = newColor;

        switch (true) {
            case red > green && red > blue:
                setDominantColor("Red");
                break;

            case green > red && green > blue:
                setDominantColor("Green");
                break;

            case blue > red && blue > green:
                setDominantColor("Blue");
                break;

            default:
                setDominantColor("All colors are equal");
        }
    }

    const generateNewColor = () => {
        const newColor = {
            red: getRandomNumb(255),
            green: getRandomNumb(255),
            blue: getRandomNumb(255)
        }

        setRgbColor(newColor);
        setAllColors(prevState => [...prevState, newColor]);

        generateNewDominant(newColor);
        generateNewAverage(newColor);
    }

    return (
        <div className="palette">
            <Background
                color={rgbColor}
                setColor={generateNewColor}
            />

            <AverageColor
                color={averageColor}
            />

            <DominantColor
                color={dominantColor}
            />
        </div>
    );
};

export default Palette;