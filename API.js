export function getArticles (limit=10, offset=0) {
    return `articles?limit=${limit}&offset=${offset}`
}

export function getTags() {
    return `tags`
}

export function users() {
    return `users`
}
export function login() {
    return `users/login`
}