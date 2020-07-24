export function fetchNewsIDsByType(type = 'top') {
    return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`)
        .then((res) => res.json())
        .then((ids) => ids);
}

export function fetchNewsById(newsId) {
    if (typeof newsId == 'undefined') return Promise.reject(new Error("please provide newsId"));
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json?print=pretty`)
        .then((res) => res.json())
        .then((news) => news);
}

export function fetchCommentsById(commentId) {
    // if (typeof commentId == 'undefined') return Promise.reject(new Error("please provide commentId"));
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`)
        .then((res) => res.json())
        .then((comment) => comment);
}

export function fetchPostsByUser(userId) {
    return fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json?print=pretty`)
    .then((res) => res.json())
    .then((userData) => userData);
}