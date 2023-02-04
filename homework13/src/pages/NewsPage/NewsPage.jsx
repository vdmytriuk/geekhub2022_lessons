import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import {newsOperations} from "../../store/news";

import Comments from "../../components/particles/Comments/Comments";
import NewsCard from "../../components/particles/NewsCard/NewsCard";
import LoadingWrapper from "../../components/layouts/LoadingWrapper/LoadingWrapper";

const NewsPage = () => {
    const {newsId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(newsOperations.getOneNews(newsId));
    }, []);

    return (
        <LoadingWrapper>
            <NewsCard newsId={newsId}/>

            <Comments newsId={newsId}/>
        </LoadingWrapper>
    );
};

export default NewsPage;