import {fetchRequestCreator} from "../services/fetchRequestCreator.js";

export const fetchData = async (url) => {
    try {
        const res = await fetchRequestCreator(url);

        const json = await res.json();

        if (!res.ok) {
            throw new Error(json.message);
        }

        return json;

    } catch (e) {
        return e.message;
    }
}