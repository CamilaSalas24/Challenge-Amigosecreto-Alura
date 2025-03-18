document.addEventListener("DOMContentLoaded", function () {
    const inputNombre = document.getElementById("amigo");
    const listaNombres = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    let listaNombresAmigos = [];

    function agregarAmigo() {
        const nombre = inputNombre.value.trim();
        
        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
            return;
        }

        if (listaNombresAmigos.includes(nombre)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }

        listaNombresAmigos.push(nombre);
        actualizarLista();
        inputNombre.value = "";
    }

    function sortearAmigo() {
        if (listaNombresAmigos.length === 0) {
            alert("Agrega al menos un nombre antes de sortear.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * listaNombresAmigos.length);
        resultado.innerHTML = `<li>El amigo secreto es: <strong>${listaNombresAmigos[indiceAleatorio]}</strong></li>`;
    }

    function actualizarLista() {
        listaNombres.innerHTML = "";
        listaNombresAmigos.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            listaNombres.appendChild(li);
        });
    }

    window.agregarAmigo = agregarAmigo;
    window.sortearAmigo = sortearAmigo;
});

