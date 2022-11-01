// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');


// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';


// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
{
    const novoElemento = document.createElement('p');
    novoElemento.innerText = `Estou no primeiroFilhoDoFilho`;
    primeiroFilhoDoFilho.appendChild(novoElemento);
}

// Acesse o primeiroFilho a partir de pai.
let primeiroFilho;
for (const filho of pai.children) {
    if (filho.id === 'primeiroFilho') {
        primeiroFilho = filho;
        break;
    }
}
if (primeiroFilho !== undefined) {
    const novoElemento = document.createElement('p');
    novoElemento.innerText = 'Estou no primeiroFilho a partir do pai';
    primeiroFilho.appendChild(novoElemento);
}

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
primeiroFilho = elementoOndeVoceEsta.previousElementSibling;
{
    const novoElemento = document.createElement('p');
    novoElemento.innerText = 'Estou no primeiroFilho a partir de elementoOndeVoceEsta';
    primeiroFilho.appendChild(novoElemento);
}

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const textoAtencao = elementoOndeVoceEsta.nextSibling;
{
    const novoElemento = document.createElement('p');
    novoElemento.innerText = 'Atenção! Esta linha foi modificada';
    // textoAtencao.appendChild(novoElemento);
    textoAtencao.replaceWith(novoElemento);
}

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
{
    const terceiroFilho = elementoOndeVoceEsta.nextSibling.nextSibling;
    const novoElemento = document.createElement('p');
    novoElemento.innerText = 'Estou dentro do terceiroFilho a partir de elementoOndeVoceEsta';
    terceiroFilho.appendChild(novoElemento);
}

// Agora acesse o terceiroFilho a partir de pai.
let terceiroFilho;
for (const filho of pai.children) {
    if (filho.id === 'terceiroFilho') {
        terceiroFilho = filho;
        break;
    }
}
if (terceiroFilho !== undefined) {
    const novoElemento = document.createElement('p');
    novoElemento.innerText = 'Estou no terceiroFilho a partir de pai';
    terceiroFilho.appendChild(novoElemento);
}