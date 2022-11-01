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

// Parte 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function createTask(name) {
    const newTask = document.createElement("span");
    newTask.classList.add('task');
    newTask.innerText = name;
    newTask.addEventListener("click", clickTask)

    const myTasks = document.getElementsByClassName('my-tasks')[0];
    myTasks.appendChild(newTask);
}

// Parte 8
// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
/*function createTaskWithColor(name, color) {
    const newTask = document.createElement("div");
    newTask.classList.add('task');
    newTask.innerText = name;
    newTask.style.backgroundColor = color;
    document.querySelector('.my-tasks')
        .appendChild(newTask);
}*/

// Parte 9
// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
function clickTask({target}) {
    for (const task of document.querySelectorAll('.task')) {
        if (task !== target) {
            task.classList.remove('task-selected');
        }
    }
    toggleClassElement(target, 'task-selected');
}

// Parte 10
// Implemente uma função que atribua a cor da tarefa ao dia do calendário;
// Adicione um evento que, ao clicar em um dia do mês no calendário, atribua a esse dia a cor da legenda da sua tarefa selecionada;
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).



// Bônus
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto “COMPROMISSOS”, adiciona o item à lista “MEUS COMPROMISSOS” ao clicar no botão “ADICIONAR”;
// Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em “ADICIONAR”;
// Ao pressionar a tecla “enter” o evento também deverá ser disparado.
const btnAdd = document.getElementById('btn-add');
const input = document.getElementById('task-input');
btnAdd.addEventListener("click", () => {
    // console.log('fui clicado');
    clickCreateTask(input);
});
// btnAdd.addEventListener("keypress", (e) => {
//     console.log('Apertou Enter');
//     if (e.key == 'Enter') clickCreateTask(input.value);
// });

function isBlank(value){
    // Credits to https://stackoverflow.com/questions/59904409/javascript-generic-isblank-function
    return !value || !value.toString().trim() || /^[\s\b\0]+$/.test(value.toString());
}

function clickCreateTask(input) {
    const texto = input.value.toString().trim();

    if (isBlank(texto)) {
        window.alert('Erro: campo vazio');
        return;
    }

    createTask(texto.toString().trim());
    input.value = '';
}