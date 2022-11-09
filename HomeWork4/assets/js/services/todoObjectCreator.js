export const todoObjectCreator = (formData) => {
    const toDoObject = {};

    const date = new Date(Date.now());
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    for (const entry of formData.entries()) {
        toDoObject.id = Date.now();
        toDoObject[entry[0]] = entry[1];
        toDoObject.humanDate = `${date.toLocaleDateString()}  ${hours}:${minutes}`;
    }

    return toDoObject;
}