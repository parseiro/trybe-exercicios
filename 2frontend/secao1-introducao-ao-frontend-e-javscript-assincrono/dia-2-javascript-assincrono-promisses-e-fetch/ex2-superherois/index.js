import Swal from 'sweetalert2';

const btnSortearEl = document.getElementById('btnSortear');
const fotoEl = document.getElementById('foto');
const nomeEl = document.getElementById('nome');

const accessToken = '10160384578649812';

async function puxarHeroi(URL, options) {
    try {
        const response = await fetch(URL, options);

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new TypeError('Oops, we haven\'t got JSON!');
        }

        const json = await response.json();
        fotoEl.src = json.image.url;
        nomeEl.innerText = json.name;

    } catch (error) {
        Swal.fire({
            title: 'Error:',
            text: `${error}`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
}

btnSortearEl.addEventListener('click', () => {
    const randomId = getRandomId(1, 500);
    fotoEl.src = '';
    nomeEl.innerText = '';

    const URL = `https://www.superheroapi.com/api.php/${accessToken}/${randomId}`;
    const options = {
        method: 'GET',
        headers: {'Accept': 'application/json'},
    };
    puxarHeroi(URL, options);
});

function getRandomId(min, max) {
    const range = max - min;
    return Math.floor(Math.random() * (range + 1)) + min;
}