export const ROUTES = {
    get_main_user_info: (username) => `https://api.github.com/users/${username}`,
    get_user_repos: (username) => `https://api.github.com/users/${username}/repos`,
    get_repo_last_commit: (username, rep) => `https://api.github.com/repos/${username}/${rep}/commits`,
}