import React, {FC} from 'react';

import {IBalloon} from "../../../types";

import "./Balloon.scss";


const Balloon: FC<IBalloon> = ({id, coordinates, size}) => {
    const {top, left} = coordinates;

    const halfSize: number = size / 2;

    return (
        <div
            className="balloon"
            data-id={id}
            style={{
                top: `${top}%`,
                left: `${left}%`,
                width: size,
                height: size,
                transform: `translate(${left > 50 ? -halfSize : halfSize}px, ${top > 50 ? -halfSize : halfSize}px)`
            }}
        />
    );
};

export default Balloon;