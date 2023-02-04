import React from 'react';
import {useNewsSelector} from "../../../hooks/useNewsSelector";

const Comments = ({newsId}) => {
    const news = useNewsSelector('selectOneNews', +newsId);

    const {kids} = news ? news : {kids: []};

    return (
        <>

        </>
    );
};

export default Comments;