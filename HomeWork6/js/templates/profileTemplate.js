import {timestampConverter} from "../services/timestampConverter.js";

export const profileTemplate =
    ({
        avatar_url,
        followers,
        following,
        html_url,
        id,
        login,
        created_at,
        updated_at
     }) => {

        return `<div class="profile">
                    <div class="profile__avatar">
                        <img src="${avatar_url}" alt="${login}">
                    </div>
                    
                    <ul class="list">
                        <li>
                            <h4 class="h4">
                                GitHub login: <strong>${login}</strong>
                            </h4>
                        </li>
                        
                        <li>
                            <h4 class="h4">
                                Profile link: 
                                
                                <strong>
                                    <a href="${html_url}" target="_blank">
                                      ${html_url}
                                    </a>
                                </strong>
                            </h4>
                        </li>
                        
                        <li>
                            <h4 class="h4">
                                GitHub ID: <strong>${id}</strong>
                            </h4>
                        </li>
                        
                        <li>
                            <h4 class="h4">
                                Created at: <strong>${timestampConverter(created_at)}</strong>
                            </h4>
                        </li>
                        
                        <li>
                            <h4 class="h4">
                                Last updated at: <strong>${timestampConverter(updated_at)}</strong>
                            </h4>
                        </li>
                        
                        <li>
                            <h4 class="h4">
                                Folowing quantity: <strong>${following}</strong>
                            </h4>
                        </li>
                        
                        <li>
                            <h4 class="h4">
                                Folowers quantity: <strong>${followers}</strong>
                            </h4>
                        </li>
                    </ul>
                </div>`
    }