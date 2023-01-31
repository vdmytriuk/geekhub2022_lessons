import React, {useEffect} from 'react';
import {useLoading} from "../../hooks/useLoading";
import {Link, useSearchParams} from "react-router-dom";

import {ROUTER} from "../../config/router";
import {fetchAllTodos} from "../../http/todosApi";

import Card from "../../components/particles/Card/Card";
import {Wrapper} from "../../components/layouts/Wrapper/Wrapper";


const HomePage = () => {
    const [todos, loading, setTodos] = useLoading(fetchAllTodos);

    const [params] = useSearchParams();

    useEffect(() => {
        if (params && !loading) {
            const sortParam = params.get('sortBy');

            switch (sortParam) {
                case "completed":
                    setTodos(prevState => prevState.filter(i => i.completed));
                    break;
                case "titles":
                    setTodos([...todos.sort((a, b) => a.title.localeCompare(b.title))])
                    break;
                default:
                    setTodos(todos);
            }
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

            <Wrapper loading={loading}>
                {todos && todos.map(todo => (
                    <Card
                        key={todo.id}
                        todoId={todo.id}
                        userId={todo.userId}
                        title={todo.title}
                        completed={todo.completed}
                    />
                ))}
            </Wrapper>
        </section>
    );
};

export default HomePage;