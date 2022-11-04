# Formatador de texto

Esta página permite alterar as configurações do texto, sejam elas:

- Cor de fundo (background)
- Cor da fonte (color)
- Tamanho da fonte (font-size)
- Espaçamento entre linhas (line-height)
- Tipo da fonte (font-family)

## Implementação

Ela foi implementada utilizando Tailwind (framework CSS) e Javascript.

Dentro do arquivo script.js existe uma variável chamada ***buttonGroups*** que deve ser personalizada para 
criar os grupos de botões, e os botões, bem como a função de callback que deverá ser chamada ao clicar em cada botão.

    const buttonGroups = [
        {
            htmlId: 'bgColorButtons',
            callback: (selectedOption) => texto.style.backgroundColor = selectedOption,
            prefix: 'bg-',
            options: ['white', 'black', 'green', 'blue', 'yellow'],
            default: 'white',
            localStorageKey: 'bgColorButtons',
        },
    ]

No código exemplificado acima, o script fará os seguintes passos:
- Vai encontrar um bloco com id 'bgColorButtons', e vai criar botões dentro dele.
- Cada botão vai ter uma id que começa com `bg-`seguido da palavra que dá nome ao botão. Neste exemplo, são: botão escrito `white` com id `bg-white`, botão escrito `black` com id `bg-black`, etc
- Cada botão, ao ser clicado, chama a função definida por `callback`.
- Ao carregar a página, ele procura no Local Storage a chave `bgColorButtons`, e ao clicar em outro botão ele salva no Local Storage.
- Caso não haja valor salvo no Local Storage, o valor utilizado será o `default`.

## Como posso personalizar o código existente?

1. Você pode definir onde cada grupo de botões será posicionado no HTML utilizando o mesmo id definido na variável `buttonGroups`.
2. Você pode personalizar os botões editando a variável `buttonGroups`.
3. Defina uma função de callback que faça a alteração desejada.