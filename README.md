# Search CEP

🔎 Um site onde você insere um CEP e ele retorna dados sobre o local informado.

O objetivo desse projeto é entender e estudar como consumir uma API, trabalhar com arquivos json e manipular objetos.

A API utilizada nesse site é a [ViaCEP](https://viacep.com.br/).

## Como esse projeto foi desenvolvido?

1. Criação da página HTML onde seu conteúdo principal é um formulário onde permitiremos a pessoa usuária inserir um CEP e clicar em um botão para realizar a pesquisa.

2. Criação do arquivo JavaScript para manipular esse formulário e trabalhar com a API.

    - Seleção dos elementos necessários do formulário via JS.

    - Adição de um evento de ``click`` no botão de busca.

    - Criação da função que é executada quando ocorre o ``click`` onde o valor inserido no formulário será armazenado em uma variável e será passada como parâmetro para outra função que irá consumir a API.

    - Criação da função que irá consumir a API utilizando ``fetch``.
