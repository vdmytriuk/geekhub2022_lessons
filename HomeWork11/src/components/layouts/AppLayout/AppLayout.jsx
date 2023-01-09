import React from 'react';

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

const AppLayout = ({children}) => {
    return (
        <>
            <Header/>

            <main className="AppLayout">
                <SideBar/>

                {children}
            </main>
        </>
    );
};

export default AppLayout;