import {setComments, setIsError, setReplies} from "./index";
import $host from "../../http/host";

const getComments = (ids) => {
    return async (dispatch) => {
        try {
            for (const commentId of ids) {
                const commentResponse = await $host.get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`);

                dispatch(setComments(commentResponse.data));
            }
        } catch (e) {
            dispatch(setIsError(true));
        }
    }
}

const getReplies = (parentId, ids) => {
    return async (dispatch) => {
        try {
            const replies = [];

            for (const commentId of ids) {
                const commentResponse = await $host.get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`);

                replies.push(commentResponse.data);
            }

            dispatch(setReplies({parentId, replies}))
        } catch (e) {
            dispatch(setIsError(true));
        }
    }
}

const operations = {
    getComments,
    getReplies
};

export default operations;