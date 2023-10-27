function verificar(){

    var valorInput1 = Number(document.querySelector("#sticker1").value);
    var valorInput2 = Number(document.querySelector("#sticker2").value);
    var valorInput3 = Number(document.querySelector("#sticker3").value);

    var resultado = (valorInput1 + valorInput2 + valorInput3);

    if (resultado <= 10) {
        document.querySelector(".mensaje").innerHTML = "Llevas" + resultado + "stickers"
    } else {
        document.querySelector(".mensaje").innerHTML = "Llevas demasiados stickers"
    }
}