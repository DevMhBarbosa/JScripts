// Função para calcular a raiz quadrada de um número
function calcularRaizQuadrada() {
    let numero = parseFloat(document.getElementById("auxiliar").value);
    
    // Verifica se o número é negativo
    if (numero < 0) {
        alert("Não é possível calcular a raiz quadrada de um número negativo.");
        return;
    }

    // Calcula a raiz quadrada
    let resultado = Math.sqrt(numero);
    document.getElementById("mostrador").value = resultado;
}

// Função para calcular a potência de dois para um expoente fornecido
function calcularPotenciaDeDois() {
    let expoente = parseInt(document.getElementById("auxiliar").value);

    // Verifica se o valor inserido é um número válido
    if (isNaN(expoente)) {
        alert("Por favor, insira um número válido.");
        return;
    }

    // Calcula 2 elevado ao expoente
    let resultado = Math.pow(2, expoente);
    document.getElementById("mostrador").value = resultado;
}

// Função para calcular a potência de um número base elevado a um expoente n
function calcularPotencia() {
    let valores = document.getElementById("auxiliar").value.split(',');
    
    // Verifica se a entrada tem dois valores separados por vírgula
    if (valores.length !== 2) {
        alert("Por favor, insira a base e o expoente separados por vírgula.");
        return;
    }

    let base = parseFloat(valores[0]);
    let expoente = parseInt(valores[1]);

    // Verifica se os valores inseridos são válidos
    if (isNaN(base) || isNaN(expoente)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Calcula a potência
    let resultado = Math.pow(base, expoente);
    document.getElementById("mostrador").value = resultado;
}

// Função para limpar a tela
function limparTela() {
    document.getElementById("auxiliar").value = "";
    document.getElementById("mostrador").value = "";
    document.getElementById("operador").value = "";
}

// Função para atualizar o visor com o número pressionado
function atualizarVisor(valor) {
    let visor = document.getElementById("auxiliar");
    visor.value += valor;
}

// Função para calcular o resultado de uma operação matemática
function calcularResultado() {
    try {
        let resultado = eval(document.getElementById("auxiliar").value);
        document.getElementById("mostrador").value = resultado;
        document.getElementById("auxiliar").value = resultado;
    } catch (e) {
        alert("Erro na expressão matemática.");
    }
}

// Função para limpar o último número ou operação inserido
function limparUltimoNumero() {
    let visor = document.getElementById("auxiliar");
    visor.value = visor.value.slice(0, -1);
}

// Atribuindo os eventos aos botões
document.addEventListener("DOMContentLoaded", function () {
    // Atribuindo eventos para os botões numéricos
    document.querySelectorAll(".num").forEach(function (button) {
        button.addEventListener("click", function () {
            atualizarVisor(button.value);
        });
    });

    // Atribuindo eventos para os botões de operações
    document.getElementById("bi").addEventListener("click", calcularResultado);
    document.getElementById("sqrt").addEventListener("click", calcularRaizQuadrada);
    document.getElementById("power").addEventListener("click", calcularPotencia);
    document.getElementById("pot2").addEventListener("click", calcularPotenciaDeDois);
    document.getElementById("clear").addEventListener("click", limparTela);
    document.getElementById("backspace").addEventListener("click", limparUltimoNumero);
});
