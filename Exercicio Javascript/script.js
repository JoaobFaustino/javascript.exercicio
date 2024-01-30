const dataAtual = new Date ()
console.log(dataAtual);

let dia = dataAtual.getDate()
let mes = dataAtual.getMonth() +1
let ano = dataAtual.getFullYear()
let hora = dataAtual.getHours()
let minutos = dataAtual.getMinutes()

let dataAtualformatada = dia + "/" + mes + "/" + ano + " " + hora + ":" + minutos 

document.getElementById("CurrDateTime").innerHTML = dataAtualformatada; 

