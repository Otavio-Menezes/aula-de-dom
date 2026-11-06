//Crie dois campos (Nome e E-mail) e um botão. Ao clicar, mostre no Console os dois valores. Pegue um campo por id e o outro por classe (use métodos diferentes).

// const nome = document.getElementById("nome"); //chamei o id

// const email = document.querySelector(".campo-email"); //chamei a classe

// // Geraçmente chamar função assim
// document.getElementById("btn-ler").addEventListener("click", function() // função anônima 
// {
//     console.log("Nome: ", nome.value);
//     console.log("email: ", email.value);
// }); //chamei o botão


////////////////////////

// Crie 5 <div class="bloco">. Percorra todos e pinte cada um de uma cor diferente.

// const bloco = document.querySelectorAll(".bloco");

// console.log(bloco);

// const cores = [
//     "red", "green", "yellow", "blue", "black"
// ];

// bloco.forEach((bloco, index) => {
//     bloco.style.backgroundColor = cores[index]
//     bloco.textContent = "Bloco" + (index + 1);
//     console.log(index + ":" + cores.length);
// })

/////////////////////////////

// Um botão que mostra quantas vezes foi clicado: "Cliques: 0", "Cliques: 1"...

// const botao = document.getElementById("contador");

// let cliques = 0;

// botao.addEventListener("click", function() {
//  cliques+= 5;
//  botao.textContent = "Cliques: " + cliques;
// })

/////////////////////////

// Em uma <table id="tabela-dados"> vazia, crie via JavaScript uma linha <tr> com duas células <td> ("Nome" e "Idade") e coloque tudo na tabela.

// const tabela = document.getElementById("tabela-dados");

// const linha = document.createElement("tr"); // linha

// const celulaNome = document.createElement("td"); //coluna
// const celulaIdade = document.createElement("td"); //coluna

// celulaNome.textContent = "Nome";
// celulaIdade.textContent = "Idade";

// linha.appendChild(celulaNome); //linha recebe o filho celulaNome
// linha.appendChild(celulaIdade); //linha recebe o filho celulaIdade

// tabela.appendChild(linha); //tabela recebe o filho linha

///////////////////////////

//Botão "Mostrar/Esconder" que alterna a visibilidade de um parágrafo usando classList.toggle.

// const segredo = document.getElementById("segredo");

// const botao = document.getElementById("btn-toggle");



// botao.addEventListener("click", function() {
//     segredo.classList.toggle("oculto"); //toggle puxa uma classe existente ou cria uma classe do zero e adicona no html e é puxada no JS
// })

////////////////////////////////////

//Um botão que alterna o tema da página entre claro e escuro usando uma classe no body. O texto do botão também deve mudar ("Modo escuro" / "Modo claro").


const botao = document.getElementById("btn-tema");


botao.addEventListener("click", function() {
    document.body.classList.toggle("escuro"); // puxou o body direto 
    const escuro = document.body.classList.contains("escuro");
    botao.textContent = escuro ? "claro" : "escuro"; // muda o botão conforme eu troco os modos
})

