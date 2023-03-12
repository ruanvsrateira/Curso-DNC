function comprarProduto(valor) {
    if(window.localStorage.getItem("total")) {
        window.localStorage.clear()
        window.localStorage.setItem("total", Number(valor))
    } else {    
        window.localStorage.setItem("total", Number(valor))
    }

    window.location.assign("compra-finalizada.html")
}

function mostraValorCompra() {

    const priceSpan = document.querySelector("span")
    const value = Number(window.localStorage.getItem("total") || 0)

    priceSpan.innerHTML = `R$${value}`; 

}

function backPage() {
    window.location.assign("index.html")
}   