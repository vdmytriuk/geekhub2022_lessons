import {timestampConverter} from "../services/timestampConverter.js";

export const lastCommitTemplate = (commits) => {
  const lastCommit = commits[0];

  return `<div class="last-commit">
             <p>Last commit info:</p>
             
             <ul>
                <li>
                  <p>Commit name: <strong>${lastCommit.commit.message}</strong></p>
                </li>
                
                <li>
                  <p>Commit date: <strong>${timestampConverter(lastCommit.commit.author.date)}</strong></p>
                </li>
             </ul>
          </div>`
}