import {render} from "../core/render.js";
import {lastCommitTemplate} from "../templates/lastCommitTemplate.js";

import {ROUTES} from "../config/routes.js";
import {VARIABLES} from "../lib/variables.js";

export const repClickHandler = () => {
    const reps = document.querySelectorAll('.rep');

    reps.forEach(rep => {
       const repName = rep.getAttribute('data-rep-name');
       const lastCommitWrap = rep.querySelector('.rep__last-commit');

       rep.addEventListener('click', () => {
            if (!rep.classList.contains('rep_active')) {
                rep.classList.add('rep_active');

                render(lastCommitWrap, ROUTES.get_repo_last_commit(VARIABLES.USERNAME, repName), lastCommitTemplate);
            } else {
                rep.classList.remove('rep_active');

                lastCommitWrap.innerHTML = '';
            }
       });
    });
}