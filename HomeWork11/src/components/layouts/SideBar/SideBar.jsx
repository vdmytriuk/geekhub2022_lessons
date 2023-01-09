import React from 'react';
import {Link} from "react-router-dom";
import {useLoading} from "../../../hooks/useLoading";

import {ROUTER} from "../../../config/router";
import {fetchAllUsers} from "../../../http/API";

import {Wrapper} from "../Wrapper/Wrapper";

import "./SideBar.css";


const SideBar = () => {
    const [users] = useLoading(fetchAllUsers);

    return (
        <aside className="SideBar">
            <Wrapper loading={!!users}>
                {users &&
                    <nav>
                        <ul>
                            {users.map(user =>
                                <li key={user.id}>
                                    <Link to={`${ROUTER.routes.USER}/${user.id}`}>
                                        {user.name}
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </nav>
                }
            </Wrapper>
        </aside>
    );
};

export default SideBar;