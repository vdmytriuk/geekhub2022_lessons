import React from 'react';
import { useNavigate } from "react-router-dom";
import {useNewsSelector} from "../../../hooks/useNewsSelector";

import {Card, CardActionArea, Divider, Link, Skeleton, Stack, Typography} from "@mui/material";

import {ROUTER} from "../../../config/router";

import Date from "../../common/Date/Date";
import Rating from "../../common/Rating/Rating";
import Author from "../../common/Author/Author";
import CommentsCounter from "../../common/CommentsCounter/CommentsCounter";
import NewsLink from "../../UI/NewsLink/NewsLink";

const newsModel = {
    title: '',
    by: '',
    score: 0,
    time: 0,
    kids: [],
    url: ''
}

const NewsCard = ({newsId, isAction = false}) => {
    const news = useNewsSelector('selectOneNews', +newsId);
    const navigate = useNavigate();

    const {title, by, score, time, kids, url} = news ? news : newsModel;

    const commentsCount = kids?.length;

    const loaded = title !== '';

    return (
        <Card
            sx={{mb: 2}}
            onClick={() => isAction ? navigate(ROUTER.routes.NEWS(newsId)) : {}}
        >
            <CardActionArea sx={{p: [2, 3], pointerEvents: isAction ? 'all' : 'none'}}>
                <Typography variant="h5">
                    {loaded ? title : <Skeleton />}
                </Typography>

                {!isAction &&
                    <NewsLink url={url}/>
                }

                <Divider/>

                {loaded
                    ?
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="flex-start"
                        divider={<Divider orientation="vertical" flexItem />}
                    >
                        <Rating score={score}/>

                        <Date time={time}/>

                        <Author by={by}/>

                        {commentsCount && isAction &&
                          <CommentsCounter showText={!isAction} count={commentsCount}/>
                        }
                    </Stack>
                    :
                    <Typography variant="h6">
                        <Skeleton />
                    </Typography>
                }
            </CardActionArea>
        </Card>
    );
};

export default NewsCard;