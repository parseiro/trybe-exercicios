import Swal from 'sweetalert2';

const btnSortearEl = document.getElementById('btnSortear');
const fotoEl = document.getElementById('foto');
const nomeEl = document.getElementById('nome');

const accessToken = '10160384578649812';

btnSortearEl.addEventListener('click', () => {
    const randomId = getRandomId(1, 500);
    fotoEl.src = '';
    nomeEl.innerText = '';

    const URL = `https://www.superheroapi.com/api.php/${accessToken}/${randomId}`;
    const options = {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    };
    fetch(URL, options)
        .then(response => {
            // window.resposta = response;
            // console.log(response);
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                throw new TypeError('Oops, we haven\'t got JSON!');
            }
            return response.json();
        })
        .then(json => {
            // console.log(json);
            fotoEl.src = json.image.url;
            nomeEl.innerText =  json.name;
            return json;
        })
        .catch(error => {
            Swal.fire({
                title: 'Error:',
                text: `${error}`,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        })
    ;
});

function getRandomId(min, max) {
    const range = max - min;
    return Math.floor(Math.random() * (range + 1)) + min;
}