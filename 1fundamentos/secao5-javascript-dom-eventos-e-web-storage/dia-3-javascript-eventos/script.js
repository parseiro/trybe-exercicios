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
