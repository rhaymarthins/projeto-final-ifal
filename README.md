# Projeto Final: App Login + Previsão do Tempo

## Visão Geral

Este projeto React Native tem como objetivo criar um aplicativo que permita aos usuários acessar a previsão do tempo para uma cidade específica, utilizando uma API dedicada. O app é composto por duas páginas: uma para visualização da API e seleção do local, e outra para a página de login, implementada com o react-navigation-stack.

### Aparência (2,0)

O aplicativo foi desenvolvido com uma estética cuidadosa, incluindo os seguintes elementos:

- Uma imagem integrada ao tema escolhido.
- Dois campos `TextInput` para inserção de dados.
- Botões distintos para login e cadastro (a página de cadastro não foi implementada).

### Funcionalidade (2,0)

Ao pressionar o botão "Entrar", o aplicativo direciona o usuário para a página da API, usando uma lógica condicional (`if-else`) para autenticação.

### Teste de Entrada (2,0)

O app realiza um teste de entrada, exibindo um alerta com a mensagem "Digite um local!" caso nenhuma entrada seja fornecida.

### Teste do Resultado (2,0)

A previsão do tempo é exibida quando o usuário insere o nome do local e pressiona o botão "Procurar".

### Teste de Input/Teclado (2,0)

Ao pressionar "Pesquisar", o aplicativo reage adequadamente, ocultando o teclado e mantendo os dados do input. O botão "Limpar" restaura os campos de entrada.

**Observação:** Siga as melhores práticas de desenvolvimento e documentação ao implementar o projeto.
