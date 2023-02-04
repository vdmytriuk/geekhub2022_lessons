import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useCommentsSelector} from "../../../hooks/useCommentsSelector";

import {commentsOperations} from "../../../store/comments";

import {Button, Card, Divider, LinearProgress, Skeleton, Stack, Typography} from "@mui/material";

import Date from "../../common/Date/Date";
import Author from "../../common/Author/Author";

const commentModel = {
    text: '',
    by: '',
    time: 0,
}

const CommentCard = ({commentId}) => {
    const dispatch = useDispatch();
    const comment = useCommentsSelector('selectOneComment', +commentId);
    const {ids} = useCommentsSelector('selectOneReplies', +commentId);

    const [repliesLoading, setRepliesLoading] = useState(false);
    const [repliesVisible, setRepliesVisible] = useState(false);

    const repliesIds = comment?.kids ?? [];

    const {text, by, time} = comment ? comment : commentModel;

    const loaded = text !== '';

    const showReplies = () => {
        setRepliesLoading(true);

        dispatch(commentsOperations.getReplies(commentId, repliesIds))
            .then(() => {
               setRepliesLoading(false);
               setRepliesVisible(true);
            });
    }

    return (
        <Card sx={{mt: 2, p: [2, 3]}} variant="outlined">
            {loaded
                ?
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-start"
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Author by={by} isComment/>

                    <Date time={time}/>
                </Stack>
                :
                <Typography variant="h6">
                    <Skeleton />
                </Typography>
            }

            <Divider/>

            <Typography variant="p">
                {loaded ? text : <Skeleton />}
            </Typography>

            {repliesVisible
                ? <>
                    {ids.map(commentId => (
                        <CommentCard
                            key={commentId}
                            commentId={commentId}
                        />
                    ))}
                  </>
                : repliesIds.length !== 0 &&
                    <Button
                        sx={{
                            display: 'block',
                            mt: 2
                        }}
                        onClick={showReplies}
                    >
                        {repliesLoading
                            ? <LinearProgress height={20}/>
                            : "Show replies"
                        }
                    </Button>
            }
        </Card>
    );
};

export default CommentCard;