import $host from "./host";

export const fetchAllTodos = async () => {
    const {data} = await $host.get('/todos');

    return data;
}

export const fetchOneUserTodos = async (id) => {
    const {data} = await $host.get(`/users/${id}/todos`);

    return data;
}

export const fetchOneTodo = async ({userId, todoId}) => {
    const {data} = await $host.get(`/users/${userId}/todos/?id=${todoId}`);

    return data;
}