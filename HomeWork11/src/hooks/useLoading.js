import {useEffect, useState} from "react";

export const useLoading = (fetchMethod, parameter) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMethod(parameter).then((res) => {
            setData(res);
            setLoading(false);
        });
    }, []);

    return [data, setData, loading];
}