const bgColorNotSelected = 'bg-white';
const bgColorSelected = 'bg-orange-300';
const texto = document.getElementById('texto');

const buttonGroups = [
    {
        htmlId: 'bgColorButtons',
        callback: (selectedOption) => texto.style.backgroundColor = selectedOption,
        prefix: 'bg-',
        options: ['white', 'black', 'green', 'blue', 'yellow'],
        default: 'white',
        localStorageKey: 'bgColorButtons',
    },
    {
        htmlId: 'fontColorButtons',
        callback: (selectedOption) => {
            texto.style.color = selectedOption;
        },
        prefix: 'font-color-',
        options: ['black', 'red', 'white'],
        default: 'black',
        localStorageKey: 'fontColorButtons',
    },
    {
        htmlId: 'fontSizeButtons',
        callback: (option) => {
            texto.style.fontSize = option;
        },
        prefix: 'font-size-',
        options: ['8pt', '10pt', '12pt', '14pt', '20pt'],
        default: '14pt',
        localStorageKey: 'fontSizeButtons',
    },
    {
        htmlId: 'lineSpacing',
        callback: (option) => {
            texto.style.lineHeight = option;
        },
        prefix: 'line-height-',
        options: ['normal', '1.5', '2.0', '3.0'],
        default: 'normal',
        localStorageKey: 'lineSpacing',
    },
    {
        htmlId: 'fontFamilyButtons',
        callback: (option) => {
            texto.style.fontFamily = option;
        },
        prefix: 'font-family',
        options: ['Arial', 'Times New Roman'],
        default: 'Arial',
        localStorageKey: 'fontFamilyButtons',
    }
]

const classList = `text-gray-900 ${bgColorNotSelected} border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`
    .split(' ');
for (const item of buttonGroups) {
    createButtons(item, classList);
}

function createButtons(item, cssClasses) {
    const htmlSectionId = item.htmlId;
    const htmlSectionElement = document.getElementById(htmlSectionId);

    const callback = item.callback;
    const prefix = item.prefix;
    const availableOptions = item.options;

    for (const currentItem of availableOptions) {
        const newElement = document.createElement('button');
        cssClasses.forEach((c) => newElement.classList.add(c));
        newElement.innerText = `${currentItem}`;
        newElement.id = `${prefix}${currentItem}`;
        newElement.type = `button`;
        newElement.addEventListener('click', () => {
            markSelectedButton(availableOptions, currentItem, prefix);
            localStorage.setItem(htmlSectionId, currentItem);
            callback(currentItem);
        });
        htmlSectionElement.appendChild(newElement);
    }

    const localStorageKey = item.localStorageKey;
    const selectedByDefault = localStorage.getItem(localStorageKey) ?? item.default;

    markSelectedButton(availableOptions, selectedByDefault, prefix);
    callback(selectedByDefault);
}

function markSelectedButton(availableOptions, selectedItem, prefix) {
    const selectedId = `${prefix}${selectedItem}`;

    const selectedElement = document.getElementById(selectedId);


    for (const i of availableOptions) {
        const currentId = `${prefix}${i}`;
        const currentElement = document.getElementById(currentId);

        if (currentId === selectedId) {
            // console.log(`Encontrei ${selectedItem}`)
            currentElement.classList.add(bgColorSelected);
            currentElement.classList.remove(bgColorNotSelected);
        } else {
            // console.log(`Não está selecionado ${currentId}`)
            currentElement.classList.remove(bgColorSelected);
            currentElement.classList.add(bgColorNotSelected);
        }
    }
}
