import React from 'react';
import {Link} from "react-router-dom";
import {useLoading} from "../../../hooks/useLoading";

import {ROUTER} from "../../../config/router";
import {fetchAllUsers} from "../../../http/userApi";

import {Wrapper} from "../Wrapper/Wrapper";

import "./SideBar.css";


const SideBar = () => {
    const [users, loading] = useLoading(fetchAllUsers);

    return (
        <aside className="SideBar">
            <Wrapper loading={loading}>
                {users &&
                    <nav>
                        <ul>
                            {users.map(user => (
                                <li key={user.id}>
                                    <Link to={`${ROUTER.routes.USER}/${user.id}`}>
                                        {user.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                }
            </Wrapper>
        </aside>
    );
};

export default SideBar;