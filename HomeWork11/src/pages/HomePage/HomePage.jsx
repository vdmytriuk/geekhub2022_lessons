import React, {useEffect} from 'react';
import {useLoading} from "../../hooks/useLoading";
import {Link, useSearchParams} from "react-router-dom";

import {ROUTER} from "../../config/router";
import {sortTodos} from "../../utils/sortTodos";
import {fetchAllTodos} from "../../http/API";

import Card from "../../components/particles/Card/Card";
import {Wrapper} from "../../components/layouts/Wrapper/Wrapper";


const HomePage = () => {
    const [todos, setTodos, loading] = useLoading(fetchAllTodos);

    const [params] = useSearchParams();

    useEffect(() => {
        if (params && !loading) {
            const sortParam = params.toString().split('=').filter(i => i !== '')[1];

            sortTodos(sortParam, todos, setTodos);
        }
    }, [params, loading])

    return (
        <section>
            <Link to={`${ROUTER.routes.HOME}?sortBy=completed`}>
                Sort by completed
            </Link>

            <Link to={`${ROUTER.routes.HOME}?sortBy=titles`}>
                Sort by title
            </Link>

            <Wrapper loading={!!todos}>
                {todos && todos.map(todo =>
                    <Card
                        key={todo.id}
                        todoId={todo.id}
                        userId={todo.userId}
                        title={todo.title}
                        completed={todo.completed}
                    />)
                }
            </Wrapper>
        </section>
    );
};

export default HomePage;