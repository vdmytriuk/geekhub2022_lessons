import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {ROUTER} from "../../../config/router";

import MainPage from "../../../pages/MainPage/MainPage";
import NewsPage from "../../../pages/NewsPage/NewsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                index
                path={ROUTER.routes.MAIN}
                element={<MainPage/>}
            />

            <Route
                index
                path={`${ROUTER.routes.NEWS()}/:newsId`}
                element={<NewsPage/>}
            />
        </Routes>
    );
};

export default AppRouter;