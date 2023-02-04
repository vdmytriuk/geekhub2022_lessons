import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useNewsSelector} from "../../../hooks/useNewsSelector";
import {useCommentsSelector} from "../../../hooks/useCommentsSelector";

import {commentsOperations, resetComments} from "../../../store/comments";

import CommentCard from "../CommentCard/CommentCard";
import LoadingWrapper from "../../layouts/LoadingWrapper/LoadingWrapper";
import CommentsCounter from "../../common/CommentsCounter/CommentsCounter";

const Comments = ({newsId}) => {
    const dispatch = useDispatch();
    const news = useNewsSelector('selectOneNews', +newsId);
    const isError = useCommentsSelector('selectIsError');

    const comments = news?.kids ?? [];
    const commentsCount = comments?.length;

    useEffect(() => {
        dispatch(resetComments());
        dispatch(commentsOperations.getComments(comments));
    }, [])

    return (
        <LoadingWrapper
            isLoading={false}
            isError={isError}
        >
            <CommentsCounter showText count={commentsCount}/>

            {comments.map(commentId => (
                <CommentCard
                    key={commentId}
                    commentId={commentId}
                />
            ))}
        </LoadingWrapper>
    );
};

export default Comments;