import React from 'react';
import {useParams} from "react-router-dom";
import {useLoading} from "../../hooks/useLoading";

import {fetchOneTodo} from "../../http/todosApi";

import Card from "../../components/particles/Card/Card";
import {Wrapper} from "../../components/layouts/Wrapper/Wrapper";


const TodoPage = () => {
    const {userId, todoId} = useParams();
    const [todo, loading] = useLoading(() => fetchOneTodo({userId, todoId}));

    const todo_ = todo?.[0];

    return (
        <section>
            <Wrapper loading={loading}>
                {todo_ &&
                    <Card
                        title={todo_.title}
                        completed={todo_.completed}
                    />
                }
            </Wrapper>
        </section>
    );
};

export default TodoPage;