//OLD SOLUTION

// const getDoorNumber = (apartmentNumber) => {
//     const firstDoor = createDoor(1, 1, 20);
//     const secondDoor = createDoor(2, 21, 40);
//     const thirdDoor = createDoor(3, 41, 60);
//
//     const allDoors = [firstDoor, secondDoor, thirdDoor];
//
//     for (let i = 0; i < allDoors.length; i++) {
//         if (allDoors[i].apartments.includes(apartmentNumber)) {
//             return `Your door is ${allDoors[i].number}!`;
//         }
//     }
//
//     return 'There is no such apartment in these entrances';
// }
//
// const createDoor = (number, start, stop) => {
//     const door = {
//         number: number,
//         apartments: []
//     };
//
//     while (start <= stop) {
//         door.apartments.push(start++);
//     }
//
//     return door;
// }


//NEW SOLUTION (IF/ELSE)

const getDoorNumber = (apartmentNumber) => {
    if (apartmentNumber >= 1 && apartmentNumber <= 20) return 'Your door is 1!';

    if (apartmentNumber >= 21 && apartmentNumber <= 40) return 'Your door is 2!';

    if (apartmentNumber >= 41 && apartmentNumber <= 60) return 'Your door is 3!';

    return 'There is no such apartment in these entrances';
}

console.log(getDoorNumber(21))