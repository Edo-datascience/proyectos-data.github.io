let amigos = [];//difinicion del arregla
//funcion para llenar el arreglo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    //valida si no se ingresó un nombre
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);//agrega un nombre al final de la lista
    actualizarLista();
    input.value = ""; //muestra en valor guardado
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) { //cuenta si hay 2 o más amigos
        alert("Se necesitan al menos 2 amigos para hacer un sorteo.");
        return;
    }
    

    

    // Accedemos al primer elemento
    let numeroSecreto = Math.floor(Math.random()*amigos.length)
    let secreto = amigos[numeroSecreto];

    const sorteoSecreto = document.getElementById("resultado");
    sorteoSecreto.innerHTML = `<h3>Tu amiga o amigo secreto es: ${secreto}</h3>`;

}
