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

    // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
