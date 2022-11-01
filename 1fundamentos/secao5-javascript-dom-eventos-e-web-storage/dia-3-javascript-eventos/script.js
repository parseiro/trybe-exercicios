const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
}

createDaysOfTheWeek();

createDaysOfDecember();

function createDaysOfDecember() {
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


    // A tag <ul> deve conter o id 'days';
    const lista = document.getElementById('days');

    for (const dia of decemberDaysList) {
        const novoItemDia = document.createElement('li');
        lista.appendChild(novoItemDia);
        novoItemDia.innerText = `${dia}`;

        // Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
        novoItemDia.classList.add('day');

        // Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
        if (dia === 24 || dia === 25 || dia === 31) {
            novoItemDia.classList.add('holiday')
        }

        // Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.
        if (dia === 4 || dia === 11 || dia === 18 || dia === 25) {
            novoItemDia.classList.add('friday')
        }
    }
}

// Parte 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
// Parte 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
const botaoFeriado = criarBotao('Feriados', 'btn-holiday', 'holiday', 'bg-red-100');
document.querySelector('.buttons-container').appendChild(botaoFeriado);

// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
// Parte 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
const botaoSexta = criarBotao('Sexta-feira', 'btn-friday', 'friday', 'bg-green-200');
document.querySelector('.buttons-container').appendChild(botaoSexta);


function criarBotao(buttonText, buttonId, targetClass, classToToggle) {
    const botao = document.createElement('button');
    botao.innerText = buttonText;
    botao.type = 'button';
    botao.id = buttonId;

    botao.addEventListener("click", (e) => {
        toggleClassGeneric(e, `.${targetClass}`, classToToggle);
        toggleClassGeneric(e, `#${buttonId}`, classToToggle);
    });

    return botao;
}

function toggleClassElement(item, classe) {
    if (item.classList.contains(classe)) {
        item.classList.remove(classe);
    } else {
        item.classList.add(classe);
    }
}

function toggleClassGeneric(event, procurar, toglarClasse) {
    for (const item of document.querySelectorAll(procurar)) {
        toggleClassElement(item, toglarClasse);
    }
}

// Parte 6
// Implemente duas funções que criem um efeito de “zoom”;
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// De olho na dica 👀: Você pode utilizar a propriedade event.target.
document.querySelectorAll('.day').forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        toggleClassElement(e.target, 'zoom');
    })
});

document.querySelectorAll('.day').forEach((item) => {
    item.addEventListener('mouseout', (e) => {
        // console.log(`out`);
        toggleClassElement(e.target, 'zoom');
    })
});
