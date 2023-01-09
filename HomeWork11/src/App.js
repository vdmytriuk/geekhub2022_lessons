import React from 'react';

import AppLayout from "./components/layouts/AppLayout/AppLayout";
import AppRouter from "./components/core/AppRouter/AppRouter";

import "./App.css";


const App = () => {
    return (
        <AppLayout>
            <AppRouter/>
        </AppLayout>
    );
};

export default App;