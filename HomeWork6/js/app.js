import {render} from "./core/render.js";
import {reposTemplate} from "./templates/reposTemplate.js";
import {profileTemplate} from "./templates/profileTemplate.js";
import {repClickHandler} from "./handlers/repClickHandler.js";

import {ROUTES} from "./config/routes.js";
import {VARIABLES} from "./lib/variables.js";


const profileWrap = document.querySelector('#profile');
const reposWrap = document.querySelector('#repos');

render(
    profileWrap,
    ROUTES.get_main_user_info(VARIABLES.USERNAME),
    profileTemplate
);

render(
    reposWrap,
    ROUTES.get_user_repos(VARIABLES.USERNAME),
    reposTemplate
).then(() => repClickHandler());