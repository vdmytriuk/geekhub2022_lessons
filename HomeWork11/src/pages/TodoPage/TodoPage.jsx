import React from 'react';
import {useParams} from "react-router-dom";
import {useLoading} from "../../hooks/useLoading";

import {fetchOneTodo} from "../../http/API";

import Card from "../../components/particles/Card/Card";
import {Wrapper} from "../../components/layouts/Wrapper/Wrapper";


const TodoPage = () => {
    const {id, numb} = useParams();
    const [todo] = useLoading(fetchOneTodo, {userId: id, todoId: numb});

    return (
        <section>
            <Wrapper loading={!!todo}>
                {todo.length !== 0 &&
                    <Card
                        title={todo[0].title}
                        completed={todo[0].completed}
                    />
                }
            </Wrapper>
        </section>
    );
};

export default TodoPage;