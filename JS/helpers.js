// expresiones para validacion de valores
const expValid = {
    // texto admite caracteres, length entre 5 y 40 caracteres
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/,
    // formato correo electronico, "fuente externa"
    correo: /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/,
    // admite cadena de solo numeros entre 7 y 15 caracteres
    telefono: /^\d{7,15}$/,
    // admite cadena de solo numeros entre 6 y 15 caracteres
    documento: /^\d{6,12}$/
}

// validacion de inputs por booleanos 
export const ifPass = {
    nombre: false,
    correo: false,
    telefono: false,
    documento: false,
    tipoDocumento: false,
    checkboxTerminos: false
};
const selectsOptions = document.getElementById("selectForm");/*variable elemento select del form para validacion en el mismo */

// funcion para verificar si el checbox esta seleccionado
// PARAMETROS: el elemento DOM (input tipo checkbox) )
export function isChecked(elementCheck) {
    elementCheck.addEventListener("click", () => {
        elementCheck.checked ? ifPass.checkboxTerminos = true : ifPass.checkboxTerminos = false
    })
}

// funcion para validar los inputs, (ejecutada e evento keyup y blur a cada input)
// valido por medio del metodo "test" las exxpresiones regulares asignadas a cada elemento y segun el test, 
// setea el obj "isPass" con sus valores en true o false: dichos valores sirven de llave para continuar con la validacion. (ver "index.js" linea 19)
export default function formValid(e) {
    e.preventDefault()
    console.log(Object.values(ifPass).every(e => e === true))
    switch (e.target.name) {
        case "nombre":
            if (expValid.nombre.test(e.target.value)) {
                ifPass.nombre = true;
            } else {
                ifPass.nombre = false;
            }
            break;

        case "correo":
            if (expValid.correo.test(e.target.value)) {
                ifPass.correo = true;

            } else {
                ifPass.correo = false;
            }
            break;

        case "telefono":
            if (expValid.telefono.test(e.target.value)) {
                ifPass.telefono = true;

            } else {
                ifPass.telefono = false;
            }
            break;

        case "selectForm":
            if (selectsOptions.selectedIndex) {
                ifPass.tipoDocumento = true
            } else {
                ifPass.tipoDocumento = false
            }
            break;

        case "documento":
            if (expValid.documento.test(e.target.value)) {
                ifPass.documento = true;
            } else {
                ifPass.documento = false;
            }
            break;
    }
}

// funcion para crear y mostrar modal de exito formnulario
export const modalOk = () => {
    const modal = document.createElement("div");
    modal.classList.add("modal_ok")
    modal.innerHTML = `<div class="innerDiv">
                            <h4 class="textMod">Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
                            <button class="btnCloseMod">cerrar</button>
                        </div>`;
    document.body.appendChild(modal);
    document.body.style.overflow = "hidden"
    resetForm("form_contacto-main");
    resetValuesBool(ifPass)
    removeModalMetod(".modal_ok",".btnCloseMod")

}
// funcion para reiniciar o borrar los inputs,
// PARAMETROS:
// formulario: string de unicamente el ID del formulario
const resetForm = (formulario) => {
    document.getElementById(formulario).reset()
}
// funcion para volver a setear a false todos los values, 
// PARAMETROS: 
// objectValue: debe ser un objeto con values booleanos
const resetValuesBool = (objectValue) => {
    objectValue.nombre = false;
    objectValue.correo = false;
    objectValue.telefono = false;
    objectValue.documento = false;
    objectValue.tipoDocumento = false;
}

// para cerrar el aviso con la tecla escape  click en un elemento, 
// PARAMETROS:
// classIdElemento: string de clase o id del elemento que se quiere quitar
// boton: string de clase o id del boton o elemento con que se quiere eliminar modal
const removeModalMetod = (classIdElemento, boton) => {
    
    document.addEventListener("keydown", (e) => {
        if (document.body.contains(document.querySelector(classIdElemento)) ) {
            // cerrar con tecla escape
            e.key === "Escape" && eliminElem(classIdElemento);        
        }
    });
    document.addEventListener("click", (e)=> {
        if (document.body.contains(document.querySelector(boton))) {
            // cerrar click boton
            e.target === document.querySelector(boton) && eliminElem(classIdElemento)
        }
    })
}

// funcion para eliminar el modal de aviso exitoso,
// PARAMETROS:
// elemento: string el cual debe ser la class o id del elemento a quitar
const eliminElem = (elemento) => {
    const element = document.querySelector(elemento)
    document.body.removeChild(element);
    document.body.style.overflow = "visible";
}

