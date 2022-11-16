export function getArticles (limit=10, offset=0) {
    return `articles?limit=${limit}&offset=${offset}`
}