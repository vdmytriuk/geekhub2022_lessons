export const fetchRequestCreator = async url => {
    return fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': 'token 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',
                },
            });
}