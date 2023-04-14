//var, let, const

//Exercicio 1 : Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. 
//let contador = 0;//variavel tipo let para contar quaos numeros foram impressos
//let numero = 101;//variavel tipo let para iniciar a contagem
/*
while(contador < 10){
    console.log(numero);
    contador++; //increment contador em 1
    numero++; //incrementa numero em 1
}*/


//-----------------------------------------------------------------------------------------------

//2-Faça um script que leia três números inteiros e mostre o maior deles.
/*4554564545
let num1 = null, num2= null, num3=null;

num1 = parseInt(prompt("Digite o primeiro número: "));
num2 = parseInt(prompt("Digite o segundo número: "));
num3 = parseInt(prompt("Digite o terceiro número: "));

if(num1 > num2 && num1 > num3){
    console.log("O numero: " + num1 + "é o maior do que" + num2 + "e " + num3);
}else if(num2 > num1 && num2 > num3){
    console.log("O numero: " + num2 + "é o maior do que" + num1 + "e " + num3);
}else if(num3 > num2 && num3 > num1){
    console.log("O numero: " + num3 + "é o maior do que" + num2 + "e " + num1);
}
*/
//------------------------------------------------------------------------------------------------
//Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles. 

let num1 = parseInt(prompt("Digite o primeiro número inteiro: "));
let num2 = parseInt(prompt("Digite o segundo número inteiro: "));
let num3 = parseInt(prompt("Digite o terceiro número inteiro: "));

// Verifica o maior número
/*let maior = num1;
if (num2 > maior) {
  maior = num2;
}
if (num3 > maior) {
  maior = num3;
}

// Verifica o menor número
let menor = num1;
if (num2 < menor) {
  menor = num2;
}
if (num3 < menor) {
  menor = num3;
}

// Mostra o maior e o menor número
console.log("Maior número: " + maior);
console.log("Menor número: " + menor);

*/
//------------------------------------------------------------------------------------------------
//4-Faça um algoritmo que possua as variáveis nome, cpf, idade, data_nascimento. Atribua valores a ela e mostre seus valores. 
/*let nome = 'Ale'

let cpf = '12345678901'

let idade = 20

let data_nascimento = '01/01/1990'

// Exibição dos valores
console.log("Nome: " + nome);
console.log("CPF: " + cpf);
console.log("Idade: " + idade);
console.log("Data de Nascimento: " + data_nascimento);*/

//------------------------------------------------------------------------------------------------
//5-Faça um algoritmo que tenha as variáveis nomeproduto, preco, estoque, validade. Atribua valores a elas e mostre na body. 

/*let nomeProduto = 'Sabão em pó'

let preco = 10.50

let estoque = 100

let validade = '20/04/23'

// Exibição dos valores

document.write("\<strong>Nome do Produto:\</strong> " + nomeProduto + "<br>" );
document.write("\<strong>Preço: \</strong>" + preco+ "<br>" );
document.write("\<strong>Estoque: \</strong>" + estoque+ "<br>" );
document.write("\<strong>Validade: \</strong>" + validade+ "<br>" );*/

//--------------------------------------------------------------------------------------------------

//Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius
// (baseado na fórmula abaixo): 

/*let temperaturafahrenheit = prompt('Temperatura em graus Fahrenheit: ');

// Converter a temperatura de string para número
temperaturaFahrenheit = parseFloat(temperaturaFahrenheit);

// Calculo daa temperatura em graus Celsius
let temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;

// Escrever o resultado na tela
console.log("A temperatura em graus Celsius é: " + temperaturaCelsius.toFixed(2));

*/

//--------------------------------------------------------------------------------------------------
//7
// Lê o salário mensal atual do funcionário
/*var salarioAtual = parseFloat(prompt("Digite o salário mensal atual do funcionário:"));

// Lê o percentual de reajuste
var percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste:"));

// Calcula o valor do novo salário
var novoSalario = salarioAtual + (salarioAtual * (percentualReajuste / 100));

// Exibe o novo salário no console
console.log("O novo salário é: R$ " + novoSalario.toFixed(2));
*/
//-------------------------------------------------------------------

//8
// Algoritmo para calcular o IMC e mostrar a condição de peso de uma pessoa adulta

// Passo 1: Ler o peso e a altura do usuário
var peso = parseFloat(prompt("Digite o peso (em kg):")); // Lê o peso em kg e converte para número de ponto flutuante
var altura = parseFloat(prompt("Digite a altura (em metros):")); // Lê a altura em metros e converte para número de ponto flutuante

// Passo 2: Calcular o IMC usando a fórmula do IMC: IMC = peso / (altura)^2
var imc = peso / (altura * altura); // Calcula o IMC

// Passo 3: Condição de peso de acordo com o valor do IMC
var condicao = ""; // Variável para armazenar a condição de peso

if (imc < 18.5) { // Se o IMC for menor que 18.5, então está abaixo do peso
    condicao = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 25) { // Se o IMC estiver entre 18.5 e 25, então está com peso normal
    condicao = "Peso normal";
} else if (imc > 25 && imc <= 30) { // Se o IMC estiver entre 25 e 30, então está acima do peso
    condicao = "Acima do peso";
} else { // Se o IMC for maior que 30, então está obeso
    condicao = "Obeso";
}

// Passo 4: Mostra a condição de peso ao usuário
console.log("Condição de peso: " + condicao); // Mostra a condição de peso na saída do console
