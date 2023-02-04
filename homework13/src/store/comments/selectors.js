const selectOneComment = (commentId) => {
    return ({comments}) => comments.items.find(i => i?.id === commentId);
};

const selectOneReplies = (parentId) => {
    return ({comments}) => comments.replies.find(i => i?.parentId === parentId) ?? [];
};

const selectIsError = ({comments}) => comments.isError;

const selectors = {
    selectOneComment,
    selectOneReplies,
    selectIsError
};

export default selectors;