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

const primeiroP = document.querySelector("p"); //não utilizar, pois vai pegar o primeiro paragrafo ou tag

primeiroP.style.backgroundColor = "yellow";

console.log(primeiroP);

const alerta = document.querySelector(".alerta"); // "." reconhece como classe, puxa o primeiro que estiver na frente

console.log(alerta);
console.log("Por Classe:", alerta.textContent);

// ID
const span = document.querySelector("#unico"); //"#" entende que um id
console.log(span);

span.textContent = "Alterado pelo querySelector"; // altera a linha no navegador

//

const pNoDiv = document.querySelector("div p");
pNoDiv.style.fontWeight = "bold";
pNoDiv.style.color = "red";