export function fetchNewsIDsByType(type = 'top') {
    return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`)
    .then((res) => res.json())
    .then((ids) => {
        return ids.slice(0, 50);
    })
}

export function fetchNewsById({newsID}) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${newsID}.json?print=pretty`)
    .then((res) => res.json())
    .then((news) => {
        return news;
    })
}