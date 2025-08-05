// Armazena uma mensagem simples em uma variável, útil para reutilização
let printar = 'Olá mundo!';

// Função que recebe um texto como parâmetro e exibe no console
function olaNoConsole(texto) {
    console.log(texto);
}

// Chamada da função passando diretamente o texto a ser exibido
olaNoConsole('Olá mundo!');


// Função que simula a recepção de um nome e exibe uma saudação personalizada
function nomeNoConsole() {
    let nomeDoUsuario = 'Prompt'; // Valor fixo para fins de exemplo, poderia vir de um input
    console.log(`Olá, ${nomeDoUsuario}! Seja bem-vindo(a)!`);
}

// Chamada da função de saudação
nomeNoConsole();


// Função que calcula e exibe o dobro de um número recebido como argumento
function dobroDoNumeroNoConsole(numero) {
    let dobroDoNumero = numero * 2;
    console.log(`O dobro do numero recebido é ${dobroDoNumero}!`);
}

// Exibe o dobro de 4
dobroDoNumeroNoConsole(4);


// Função que calcula a média aritmética entre três números e exibe no console
function mediaDosNumerosNoConsole(num1, num2, num3) {
    let mediaDosNumeros = (num1 + num2 + num3) / 3;
    console.log(`A média dos numeros recebidos é ${mediaDosNumeros}!`);
}

// Calcula e exibe a média entre 4, 5 e 6
mediaDosNumerosNoConsole(4, 5, 6);


// Função que recebe um número, multiplica ele por ele mesmo (potência 2), e exibe o resultado
function multiplicacaoNoConsole(numeroMultiplicado) {
    let multiplicacaoDoNumero = numeroMultiplicado * numeroMultiplicado;
    console.log(`O número multiplicado por ele mesmo é ${multiplicacaoDoNumero}!`);
}

// Calcula e exibe 5 * 5
multiplicacaoNoConsole(5);
