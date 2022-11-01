const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

// Crie um irmão para elementoOndeVoceEsta.
{
    let novoElemento = document.createElement(elementoOndeVoceEsta.tagName);
    novoElemento.id = 'irmão';
    let novoP = document.createElement('p');
    novoP.innerText = 'Oi, eu sou um irmão';
    novoElemento.appendChild(novoP)
    elementoOndeVoceEsta.parentElement.appendChild(novoElemento);
}

// Crie um filho para elementoOndeVoceEsta.
{
    let novoElemento = document.createElement(elementoOndeVoceEsta.tagName);
    novoElemento.id = 'filhão';
    let novoP = document.createElement('p');
    novoP.innerText = 'Oi, eu sou um filho';
    novoElemento.appendChild(novoP)
    elementoOndeVoceEsta.appendChild(novoElemento);
}

// Crie um filho para primeiroFilhoDoFilho.
// easy peasy

// A partir desse filho criado, acesse terceiroFilho.
// too easy