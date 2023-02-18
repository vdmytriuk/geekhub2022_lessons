import $host from "./host";

import {IPerson} from "../../types/global";

export const fetchAllPersons = async (): Promise<IPerson[]> => {
    const {data} = await $host.get('/people');

    return data.results;
}