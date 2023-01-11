import './style.css';

import {
    fillUsersSelect,
    fillPosts,
    fillFeaturedPostComments,
    clearPageData,
    fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
fetch(USERS_API)
    .then(result => result.json())
    .then(json => {
        fillUsersSelect(json.users)
        // console.log(json);
        return json;
    })
    .catch(error => console.log(`Erro: ${error}`))
// .finally(() => {console.log('Saindo!!')})
;

usersSelect.addEventListener('change', () => {
    clearPageData();

    const id = usersSelect.value;
    const URL = `https://dummyjson.com/posts/user/${id}`;

    fetch(URL)
        .then(result => result.json())
        .then(posts => {
            fillPosts(posts.posts);
            const featuredPost = posts.posts[0];
            return fetch(`https://dummyjson.com/posts/${featuredPost.id}/comments`);
        })
        .then(result => result.json())
        .then(json => fillFeaturedPostComments(json.comments))
        .catch(error => fillErrorMessage(`Error fetching user ${id}: ${error}`));
});
