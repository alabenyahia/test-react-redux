import {FETCH_POSTS} from "./types";

export function fetchPosts() {
    return async function (dispatch) {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json()
        dispatch({
            type: FETCH_POSTS,
            payload: posts
        })
    }
}