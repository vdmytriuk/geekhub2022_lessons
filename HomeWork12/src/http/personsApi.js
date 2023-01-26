import $host from "./host";

export const fetchAllPersons = async () => {
    const {data} = await $host.get('/people');

    return data.results;
}