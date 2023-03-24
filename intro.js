let textArea = document.querySelector("#textExemplo")
let divResultado = document.querySelector("#resultExemplo")
let divConteudo = document.querySelector("#myDivCodigo")

textArea.innerHTML = divConteudo.innerHTML
divResultado.innerHTML = divConteudo.innerHTML

function rodarCodigoTextArea(){
    divResultado.innerHTML = textArea.value
}

