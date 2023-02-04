import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useNewsSelector} from "../../hooks/useNewsSelector";

import {newsOperations} from "../../store/news";

import NewsCard from "../../components/particles/NewsCard/NewsCard";
import LoadingWrapper from "../../components/layouts/LoadingWrapper/LoadingWrapper";

const MainPage = () => {
    const dispatch = useDispatch();

    const newsIds = useNewsSelector('selectNewsIds');

    const [rerender, setRerender] = useState(false);

    const forceRerender = () => {
        setTimeout(() => {
            setRerender(!rerender);
        }, 60000);
    };

    forceRerender();

    useEffect(() => {
        dispatch(newsOperations.getNews());
    }, [rerender]);

    return (
        <LoadingWrapper updateCallback={() => dispatch(newsOperations.getNews())}>
            {newsIds.map(newsId => (
                <NewsCard
                    key={newsId}
                    newsId={newsId}
                />
            ))}
        </LoadingWrapper>
    );
};

export default MainPage;