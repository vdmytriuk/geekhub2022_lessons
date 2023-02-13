type Coordinates = {
    top: number;
    left: number;
}

export interface IBalloon {
    id: number,
    size: number;
    coordinates: Coordinates;
}