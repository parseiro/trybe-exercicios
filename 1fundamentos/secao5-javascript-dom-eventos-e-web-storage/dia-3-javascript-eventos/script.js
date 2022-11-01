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

function criarBotao(buttonText, buttonId, targetClass, classToToggle) {
    const botao = document.createElement('button');
    botao.innerText = buttonText;
    botao.type = 'button';
    botao.id = buttonId;

    botao.addEventListener("click", (e) => {
        toggleClass(e, `.${targetClass}`, classToToggle);
        toggleClass(e, `#${buttonId}`, classToToggle);
    });

    return botao;
}

function toggleClass(event, procurar, toglarClasse) {
    for (const item of document.querySelectorAll(procurar)) {
        if (item.classList.contains(toglarClasse)) {
            item.classList.remove(toglarClasse);
        } else {
            item.classList.add(toglarClasse);
        }
    }
}
