const url = new URLSearchParams(window.location.search)
        
let nota1 = Number(url.get("n1"))
let nota2 = Number(url.get("n2"))

const input = document.getElementById("input")
const status = document.getElementById("status");

let media = (nota1 + nota2) / 2

input.value = media;

if(media >= 6) {
    status.innerHTML="Aprovado"
    status.style.color="green"
} else {
    status.innerHTML="Reprovado"
    status.style.color="red"
}