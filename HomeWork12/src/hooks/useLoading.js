import {useEffect, useState} from "react";

export const useLoading = (fetchMethod) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMethod().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, []);

    return [data, loading];
}