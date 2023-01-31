import {useEffect, useState} from "react";

export const useLoading = (callback) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        callback().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, []);

    return [data, loading, setData];
}