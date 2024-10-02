// Funções para cada operação

function somar() {

    alert ("Vamos Somar")
    let soma1 = parseInt(prompt("Digite o primeiro valor:"));
    let soma2 = parseInt(prompt("Digite o segundo valor:"));

    if (!isNaN(soma1) && !isNaN(soma2)) {
    let resultado1 = soma1 + soma2;
    alert("O resultado é: " + resultado1);
    } else {
    alert("Por favor, digite apenas números.");
    }
    
}
  
function subtrair() {
    
    //Subtrai e Verifica se foram digitados numeros.
    alert ("Vamos Subtrair")
    let Subtrai1 = parseInt(prompt("Digite o primeiro valor:"));
    let Subtrai2 = parseInt(prompt("Digite o segundo valor:"));

    if (!isNaN(Subtrai1) && !isNaN(Subtrai2)) {
    let resultado2 = Subtrai1 - Subtrai2;
    alert("O resultado é: " + resultado2);
    } else {
    alert("Por favor, digite apenas números.");
    }

}

function Multiplicar() {

    //Multiplica e Verifica se foram digitados numeros.
    alert ("Vamos Multiplicar")
    let Multiplica1 = parseInt(prompt("Digite o primeiro valor:"));
    let Multiplica2 = parseInt(prompt("Digite o segundo valor:"));

    if (!isNaN(Multiplica1) && !isNaN(Multiplica2)) {
    let resultado3 = Multiplica1 * Multiplica2;
    alert("O resultado é: " + resultado3);
    } else {
    alert("Por favor, digite apenas números.");
    }

}

function Dividir() {

    //Divide e Verifica se foram digitados numeros.
    alert ("Vamos Dividir")
    let Divide1 = parseInt(prompt("Digite o primeiro valor:"));
    let Divide2 = parseInt(prompt("Digite o segundo valor:"));

    if (!isNaN(Divide1) && !isNaN(Divide2)) {
    let resultado4 = Divide1 / Divide2;
    alert("O resultado é: " + resultado4);
    } else {
    alert("Por favor, digite apenas números.");
    }

}

// Associando funções aos botões
document.getElementById("btnSomar").addEventListener("click", somar);
document.getElementById("btnSubtrair").addEventListener("click", subtrair);
document.getElementById("btnMultiplicar").addEventListener("click", Multiplicar);
document.getElementById("btnDividir").addEventListener("click", Dividir);
