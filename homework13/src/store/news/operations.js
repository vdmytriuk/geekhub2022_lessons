import $host from "../../http/host";

import {resetNews, setIsError, setIsLoading, setNews, setNewsIds} from "./index";

const getNews = () => {
    return async (dispatch) => {
        try {
            dispatch(resetNews());
            dispatch(setIsLoading(true));

            const newsIdsResponse = await $host.get('/newstories.json?print=pretty&orderBy="$key"&limitToFirst=100');

            const newsIds = newsIdsResponse?.data;

            dispatch(setNewsIds(newsIds));
            dispatch(setIsLoading(false));

            for (const newsId of newsIds) {
                const newsResponse = await $host.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);

                dispatch(setNews(newsResponse.data));
            }
        } catch (e) {
            dispatch(setIsError(true));
        }
    }
}

const getOneNews = (newsId) => {
    return async (dispatch) => {
        try {
            dispatch(resetNews());
            dispatch(setIsLoading(true));

            const newsResponse = await $host.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`);

            dispatch(setNews(newsResponse.data));
            dispatch(setIsLoading(false));
        } catch (e) {
            dispatch(setIsError(true));
        }
    }
}


const operations = {
    getNews,
    getOneNews
};

export default operations;