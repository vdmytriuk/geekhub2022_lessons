const selectNewsIds = ({news}) => news.itemsIds;

const selectNews = ({news}) => news.items;

const selectOneNews = (newsId) => {
    return ({news}) => news.items.find(i => i?.id === newsId);
};

const selectIsLoading = ({news}) => news.isLoading;

const selectIsError = ({news}) => news.isError;

const selectors = {
    selectNewsIds,
    selectNews,
    selectOneNews,
    selectIsLoading,
    selectIsError
};

export default selectors;