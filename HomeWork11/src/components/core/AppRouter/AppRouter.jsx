import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {ROUTER} from "../../../config/router";

import HomePage from "../../../pages/HomePage/HomePage";
import UserPage from "../../../pages/UserPage/UserPage";
import TodoPage from "../../../pages/TodoPage/TodoPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                index
                path={ROUTER.routes.HOME}
                element={<HomePage/>}
            />

            <Route path={ROUTER.routes.USER}>
                <Route
                    exact
                    path=":id"
                    element={<UserPage/>}
                />

                <Route
                    path={`:userId${ROUTER.routes.TODO}/:todoId`}
                    element={<TodoPage/>}
                />
            </Route>

            <Route
                path={ROUTER.routes.NONE}
                element={<Navigate to={ROUTER.routes.HOME}/>}
            />
        </Routes>
    );
};

export default AppRouter;