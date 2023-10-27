function ingresar() {

    var num1 = document.querySelector(".select1").value;
    var num2 = document.querySelector(".select2").value;
    var num3 = document.querySelector(".select3").value;

    // Comprobar si el pasword es correcto

    if (num1 === "9" && num2 === "1" && num3 === "1") {
        document.querySelector(".mensaje").innerHTML = "password 1 correcto"
    } else if (num1 === "7" && num2 === "1" && num3 === "4") {
        document.querySelector(".mensaje").innerHTML = "password 2 correcto"
    } else {
        document.querySelector(".mensaje").innerHTML = "pasword incorrecto"
    }
}