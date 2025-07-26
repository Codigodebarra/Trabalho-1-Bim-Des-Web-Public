function gerarParagrafos() {
    let divHTML = document.querySelector("#containerParagrafos");

    divHTML.innerHTML = "";
    for (let i = 1; i < 11; i++) {
        if (i % 3 == 0) {
            var p = "paragrafo-destaque"
            divHTML.innerHTML += `<p class="${p}">Paragrafo ${i}: AAAAAAAAAAAAAAAA</p>`;
        }
        else {
            divHTML.innerHTML += `<p>Paragrafo ${i}: AAAAAAAAAAAAAAAA</p>`;
        }
    }
}

function Tabuada() {
    const inputHTML = document.querySelector("#inputTabuada");

    if (inputHTML.value.trim() === "" || inputHTML.value == NaN) {
        inputHTML.focus()
        return
    }
    resultadoTabuada.innerHTML = "";
    if (1 <= inputHTML.value && inputHTML.value <= 10) {
        for (let i = 1; i <= 10; i++) {
            let produto = inputHTML.value * i;
            resultadoTabuada.innerHTML += `<p>${inputHTML.value} x ${i} = ${produto}</p>`;
        }
    }
    else {
        resultadoTabuada.innerHTML = `<p class="Negrito">Valor invalido, informe valor entre 1-10</p>`;
        inputHTML.focus();
        inputHTML.value = "";
    }
}
function calcularMedia() {
    const inputNota1 = document.querySelector("#nota1");
    const inputNota2 = document.querySelector("#nota2");
    const inputFaltas = document.querySelector("#faltas");
    const divHTML = document.querySelector("#resultadoMedia")
    const totalAulas = 80;
    const totalPresenca = totalAulas - inputFaltas.value
    const percentualPresenca = totalPresenca * 100 / totalAulas;
    const media = (Number(inputNota1.value) + Number(inputNota2.value)) / 2;
    let classCss = "";
    let msg = "";
    console.log("2")
    if (inputNota1 === "" || inputNota1 === NaN) {
        inputNota1.focus();
        return;
    }
    if (inputNota2 === "" || inputNota2 === NaN) {
        inputNota2.focus();
        return;
    }
    if (inputFaltas === "" || inputFaltas === NaN) {
        inputFaltas.focus();
        return;
    }

    if (media >= 7 && percentualPresenca >= 75) {
        classCss = "Aprovado";
        msg = "Aprovado";
    }
    else if (media < 7) {
        classCss = "Reprovado";
        msg = "Reprovado";
    }
    else if (percentualPresenca <= 75) {
        classCss = "Reprovado";
        msg = "Reprovado por falta";
    }
    divHTML.innerHTML =  `<p class=${classCss}>${msg}</p>`;
}

let total = 0;
function adicionarItem() {
    const nome = document.querySelector("#nomeProduto");
    const inputValor = document.querySelector("#valorProduto");
    let valor = inputValor.value;
    if (nome.value.trim() === "") {
        nome.focus();
        notificacao.innerHTML = `<p class="Negrito">O nome do produto nao foi preenchido!</p>`;
        return;
    }
    if (valor === "") {
        inputValor.focus();
        notificacao.innerHTML = `<p class="Negrito">O valor do produto nao foi preenchido!</p>`;
        return;
    }
    valor = Number(valor);
    total += valor;
    listaCompras.innerHTML += `<p>Produto: ${nome.value} <br> Valor: R$: ${valor.toFixed(2)}</p>`;
    totalCompras.innerHTML = `Total:R$: ${total.toFixed(2)}`;

}

function limparLista() {
    total = 0;
    listaCompras.innerHTML = "";
    totalCompras.innerHTML = "Total:R$0,00";
}