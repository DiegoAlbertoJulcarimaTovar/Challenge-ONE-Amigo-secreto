// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
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
  return result;
}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    if (amigos.length === 1) {
        alert("Solo hay 1 amigo para sortear");
        return;
    }
    amigos = []
    document.getElementById("resultado").value = `El amigo sorteado es: ${amigoSorteado}`;
    mostrarAmigos();
}