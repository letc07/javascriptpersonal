// Esto es un comentario


let nombre = "Jesus Hernandez";
console.log(nombre);
let encabezado = document.getElementById("encabezado");
encabezado.innerHTML = nombre;

document.getElementById("parrafo1").innerHTML = "Estamos en el <b>curso de JavaScript</b> ";


function saludar ()
{
alert("hola! Estamos realizando el Curso de JavaScript en CoderHouse!");
}
document.getElementById("boton").addEventListener("click", saludar);

let nombrecompleto = prompt("ingrese su Nombre")

if (nombrecompleto == "Ori"){
    alert("Hola, Ori! eres una genia");
} else{
    alert("Hola, " + nombrecompleto);
}