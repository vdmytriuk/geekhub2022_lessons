import React, {useState} from 'react';

import Background from "../../particles/Background/Background";
import AverageColor from "../../particles/AverageColor/AverageColor";
import DominantColor from "../../particles/DominantColor/DominantColor";

import "./Palette.css";


const Palette = () => {
    const [count, setCount] = useState(1);
    const [rgbColor, setRgbColor] = useState({red: 127, green: 127, blue: 127});
    const [averageColor, setAverageColor] = useState(rgbColor);
    const [dominantColor, setDominantColor] = useState("All colors are equal");

    const getRandomNumb = max => Math.floor(Math.random() * max);

    const generateNewAverage = (newColor) => {
        const averageColor = {
            red: Number((rgbColor.red + newColor.red) / count).toFixed(),
            green: Number((rgbColor.green + newColor.green) / count).toFixed(),
            blue: Number((rgbColor.blue + newColor.blue) / count).toFixed(),
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
        setCount(prevState => prevState + 1);

        const newColor = {
            red: getRandomNumb(255),
            green: getRandomNumb(255),
            blue: getRandomNumb(255)
        }

        setRgbColor(newColor);

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