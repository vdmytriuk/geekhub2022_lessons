import React from 'react';

import {useParams} from "react-router-dom";
import {useLoading} from "../../hooks/useLoading";

import {fetchOneUser, fetchOneUserTodos} from "../../http/API";

import Card from "../../components/particles/Card/Card";
import {Wrapper} from "../../components/layouts/Wrapper/Wrapper";


const UserPage = () => {
    const {id} = useParams();
    const [user] = useLoading(fetchOneUser, id);
    const [userTodos] = useLoading(fetchOneUserTodos, id);

    return (
        <section>
            <Wrapper loading={!!user && !!userTodos}>
                {userTodos && user &&
                    <>
                        <h2>
                            Name: {user.name}
                        </h2>

                        <h3>
                            Username: {user.username}
                        </h3>

                        <h2>
                            TODOS:
                        </h2>

                        <div>
                            {userTodos.map(todo =>
                                <Card
                                    key={todo.id}
                                    id={todo.id}
                                    todoId={todo.id}
                                    userId={todo.userId}
                                    title={todo.title}
                                    completed={todo.completed}
                                />
                            )}
                        </div>
                    </>
                }
            </Wrapper>
        </section>
    );
};

export default UserPage;