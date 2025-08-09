let amigos = [];
let winner = document.getElementById("resultado");
let list = document.getElementById("listaAmigos");
let amigo = document.getElementById("amigo").value;

let indiceAleatorio = Math.floor(Math.random() * amigos.length);
let amigoSorteado = amigos[indiceAleatorio];

function agregarAmigo() {
    if (amigo.length <= 0) {
        alert("No deje el campo vacio, ingrese un nombre valido");
    } else {
        if (amigos.includes(amigo)){
            alert("El amigo ya fue agregado");
        }else {
            amigos.push(amigo);
            document.getElementById("amigo").value = "";
            mostrarAmigos();
        }
    }
}

function mostrarAmigos() {
    list.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        list.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { alert("No hay amigos para sortear"); return; }
    if (amigos.length === 1) { alert("Solo hay 1 amigo para sortear"); return; }

    amigos = [];
    winner.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    mostrarAmigos();
}