import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useNewsSelector} from "../../hooks/useNewsSelector";

import {newsOperations} from "../../store/news";

import Comments from "../../components/particles/Comments/Comments";
import NewsCard from "../../components/particles/NewsCard/NewsCard";
import LoadingWrapper from "../../components/layouts/LoadingWrapper/LoadingWrapper";

const NewsPage = () => {
    const {newsId} = useParams();
    const dispatch = useDispatch();

    const isError = useNewsSelector('selectIsError');
    const isLoading = useNewsSelector('selectIsLoading');

    useEffect(() => {
        dispatch(newsOperations.getOneNews(newsId));
    }, []);

    return (
        <LoadingWrapper
            updateCallback={() => dispatch(newsOperations.getOneNews(newsId))}
            isLoading={isLoading}
            isError={isError}
            isBackspace
        >
            <NewsCard newsId={newsId}/>

            <Comments newsId={newsId}/>
        </LoadingWrapper>
    );
};

export default NewsPage;