const nova = document.getElementById("nova-tarefa");

const adicionar = document.getElementById("btn-add");

const lista = document.getElementById("lista-tarefas");

function adicionarTarefa () {
    const texto = nova.value.trim() // se tiver espaços ou caracteres vazios, o trim tira

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const item = document.createElement("li");

    item.textContent = texto;

    item.addEventListener("click", function() {
        item.classList.toggle("feita") //não precisa de "." pois ja puxa a classe
    });

    const btnRemover = document.createElement("button");

    btnRemover.textContent = "x";

    btnRemover.addEventListener("click", function(e) {
        e.stopPropagation(); // so vai funcionar o click de deletar, so aceita o click da função deletar

        item.remove(); // vai remover a (li)
    })

    item.appendChild(btnRemover); // está fora da função remover

    lista.appendChild(item); // a (ul) esta chamando o pai (li)

    nova.value = "";

    nova.focus(); // quando esvaziar o input, o cursor estara dentro do input


}

adicionar.addEventListener("click", adicionarTarefa);

nova.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        adicionarTarefa() // aqui não funciona sem os parenteses
    }
})