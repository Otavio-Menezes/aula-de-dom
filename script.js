//Pega o elemento pelo ID
// const paragrafo = document.getElementById("mensagem");

// const titulo = document.getElementById("titulo");

// // console.log(titulo);
// console.log(paragrafo);

// paragrafo.textContent = "O Dom permitiu que o JavaScript me alterasse!";//tanto le o texto e altera

// paragrafo.style.color = "blue";

// paragrafo.style.borderBottom = "2px solid blue";

// const botao = document.getElementById("btn-acao");

// console.log("Tag do botão:" + botao.tagName); // tag "tagName" puxa o nume da tag

// Por TAG

// const primeiroP = document.querySelector("p"); //não utilizar, pois vai pegar o primeiro paragrafo ou tag

// primeiroP.style.backgroundColor = "yellow";

// console.log(primeiroP);

// const alerta = document.querySelector(".alerta"); // "." reconhece como classe, puxa o primeiro que estiver na frente

// console.log(alerta);
// console.log("Por Classe:", alerta.textContent);

// // ID
// const span = document.querySelector("#unico"); //"#" entende que um id
// console.log(span);

// span.textContent = "Alterado pelo querySelector"; // altera a linha no navegador

// //

// const pNoDiv = document.querySelector("div p");
// pNoDiv.style.fontWeight = "bold";
// pNoDiv.style.color = "red";

///////////////

// Usando Dom

// const itens = document.querySelectorAll(".item"); // chama a classe do HTML
// console.log(itens);

// for(let i = 0; i < itens.length; i++) {
//     console.log("Item " + (i + 1) + ": " + itens[i].textContent); // vai começar por 1 e vai aparecer o que está escrito dentro das classes, atraves do textContent

//     if(i % 2 !== 0) {
//         itens[i].style.backgroundColor = "#ccc"; // pega os elementos pares e altera a cor
//     }
// }

// for (const item of itens) {
//     item.style.fontWeight = "bold"; // deixou os elementos em negrito, com o atributo (bold)
// }

// //pode usar qualquer versão quando entrar em React
// itens.forEach((item, index) => {
//     console.log(index + ":" + item.textContent);
// }) ;//forEach só existe quando tem um nodeLits (for) // quando estiver usando o DOM

//////////////////////

// const saudacao = document.getElementById("saudacao");
// const nome = document.getElementById("nome");
// const link = document.getElementById("link");

// function mudarDados() {
//     saudacao.textContent = "O conteúdo da div foi alterado";

//     nome.value = "Novo Valor (Otávio)"; // para trocar um valor, basta puxar .value

//     saudacao.innerHTML += '<p style="color: blue;">Conteúdo injetado com innerHTML</p>' // soma e não troca apenas

//     link.setAttribute("href", "https://www.google.com"); //setAttribute ira trocar o valor dentro o href e substitui pelo novo
//     console.log(link.getAttribute("href")); // puxa o atributo 

//     saudacao.classList.add("destaque"); //adiciona uma classe nova
// }

// document.getElementById("btn-mudar").addEventListener("click", mudarDados);

///////////////////////////

// const lista = document.getElementById("lista");

// function adicionarItem() {
//     const novoItem = document.createElement("li"); //.createElement cria um conteudo novo 

//     novoItem.textContent = "Novo Item às " + new Date().toLocaleTimeString(); // new "novo" / date "data" / .tolocaleTimeString - puxa a data do computador

//     lista.appendChild(novoItem); // pai chama o filho
// }

// function removerUltimo() {
//     const ultimo = lista.lastElementChild //puxa o ultimo filho do elemento

//     if (ultimo) {
//         lista.removeChild(ultimo);
//         console.log("Último filho removido");
//     } else {
//         console.log("Lista vazia. Nada a remover.");
//     }
// }

// document.getElementById("btn-add").addEventListener("click", adicionarItem);
// document.getElementById("btn-remover").addEventListener("click", removerUltimo);