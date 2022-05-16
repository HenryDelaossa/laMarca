import formValid from "./helpers.js";
import { modalOk, isChecked, ifPass } from "./helpers.js";

// selecion inputs para ejecucion de validaciones
const inpts = document.querySelectorAll(".inputs");
const checkTerminos = document.getElementById("checkForm_laMarca");

// asignacion de por tipo de evento
inpts.forEach((inp) => {
    inp.addEventListener("keyup", formValid);
    inp.addEventListener("blur", formValid);
    inp.addEventListener("change", isChecked(checkTerminos));
})

// añadiendo evento en boton submit de formulario
const btnSubmit = document.querySelector(".btnSubmit")
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault()
    // si todos los valores de "ifPass" son true, ejecuto la funcion modal, sino salta un alert
    Object.values(ifPass).every(e => e === true) ? modalOk() : alert("ingresa los datos correctamente");
})











