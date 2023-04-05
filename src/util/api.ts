export function fetchNewsIDsByType(type = 'top'): Promise<number[]> {
    return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json`)
        .then(res => res.json())
        .then(ids => ids);
}

export interface News {
    id: number,
    url: string,
    title: string,
    by: string,
    time: number,
    descendants: number,
    type: string,
    kids: number[]
}

export function fetchNewsById(newsId: number): Promise<News> {
    if (typeof newsId == 'undefined') return Promise.reject(new Error("please provide newsId"));
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)
        .then(res => res.json())
        .then(news => news);
}

export interface Comment {
    id: number,
    by: string,
    time: number,
    text: string
}

export function fetchCommentsById(commentId: number): Promise<Comment> {
    // if (typeof commentId == 'undefined') return Promise.reject(new Error("please provide commentId"));
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`)
        .then(res => res.json())
        .then(comment => comment);
}

export interface Post {
    id: number,
    karma: string,
    submitted: number[],
    created: number
}

export function fetchPostsByUser(userId: string): Promise<Post> {
    return fetch(`https://hacker-news.firebaseio.com/v0/user/${userId}.json`)
    .then(res => res.json())
    .then(userData => userData);
}