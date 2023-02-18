import { useState, useEffect } from 'react';

type FetchingMethod<Data> = () => Promise<Data>;

export function useLoading<Data>(fetchingMethod: FetchingMethod<Data>): [Data | null, boolean] {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            const data = await fetchingMethod();

            setData(data);
            setLoading(false);
        }
        fetchData();
    }, [fetchingMethod]);

    return [data, loading];
}