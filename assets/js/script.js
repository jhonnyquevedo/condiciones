var imagen = document.querySelector("img")
function borde(){
    if(imagen.style.border){
        imagen.style.border = ""
    }
    else {
        imagen.style.border = "solid 2px red"
    }
}