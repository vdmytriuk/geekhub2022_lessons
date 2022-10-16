const getDoorNumber = (apartmentNumber) => {
    const firstDoor = createDoor(1, 1, 20);
    const secondDoor = createDoor(2, 21, 40);
    const thirdDoor = createDoor(3, 41, 60);

    const allDoors = [firstDoor, secondDoor, thirdDoor];

    for (let i = 0; i < allDoors.length; i++) {
        if (allDoors[i].apartments.includes(apartmentNumber)) {
            return `Your door is ${allDoors[i].number}!`;
        }
    }

    return 'There is no such apartment in these entrances';
}

const createDoor = (number, start, stop) => {
    const door = {
        number: number,
        apartments: []
    };

    while (start <= stop) {
        door.apartments.push(start++);
    }

    return door;
}

console.log(getDoorNumber(61))