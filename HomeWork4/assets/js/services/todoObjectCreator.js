export const todoObjectCreator = (formData) => {
    const toDoObject = {
        id: null,
        position: null,
        title: '',
        description: '',
        humanDate: '',
        completed: false
    };

    if (!localStorage.getItem('position')) {
        localStorage.position = 1;
    } else {
        localStorage.position = +localStorage.position + 1;
    }

    const date = new Date(Date.now());
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

    for (const entry of formData.entries()) {
        toDoObject.id = Date.now();
        toDoObject.position = localStorage.position;
        toDoObject[entry[0]] = entry[1];
        toDoObject.humanDate = `${date.toLocaleDateString()}  ${hours}:${minutes}`;
        toDoObject.completed = false;
    }

    return toDoObject;
}