const d = document; 
const textArea = d.querySelector(".form__input");
const imagenMuneco = d.querySelector(".result__img");
const loaderBarra = d.querySelector(".loader");
const resultTitle = d.querySelector(".result__title");
const resultText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".result__btn");


const llaves = [
    ["a", "ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"]
];
// esta función sirve para encriptar los mensajes 
function encriptarmensaje (mensaje) {
    let mensajeEncriptado = "";
   for(let i = 0; i < mensaje.length; i++){
       let letra = mensaje[i];
       let encriptada = letra;
       for(let j = 0; j < llaves.length; j++){
           if (letra === llaves[j][0]){
              encriptada = llaves [j][1]; //Reemplaza la letra por su equivalente encriptado
              break; //termina el ciclo cuando encuentre la letra 
           }
       }
       mensajeEncriptado += encriptada;
   }
   return mensajeEncriptado;
}
// esta función sirve para desencriptar los mensajes 
function desencriptarMensaje (mensaje) {
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves [i][1], "g");
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves [i][0]);
    }
    return mensajeDesencriptado;
}
// Ocultar elementos dinamicamente 
textArea.addEventListener("input",(e)=> {
    imagenMuneco.style.display = "none"
    loaderBarra.classList.remove("hidden")
    resultTitle.textContent = "Capturando Mensaje"
    resultText.textContent = "";
})
// Función del boton Encriptar
botonEncriptar.addEventListener("click",(e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje (mensaje);
    resultText.textContent = mensajeEncriptado;
    botonCopiar.classList.remove ("hidden")
    resultTitle.textContent = "El resultado es";
})
//Función para Desencriptar 
botonDesencriptar[1].addEventListener("click", (e)=> {
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultText.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove ("hidden")
    resultTitle.textContent = "El resultado es";

})

botonCopiar.addEventListener ("click", () => {
    let textoCopiado = resultText.textContent;
    navigator.clipboard.writeText (textoCopiado).then(()=> {
        imagenMuneco.style.display = "block";
        loaderBarra.classList.add("hidden");
        resultTitle.textContent = "El texto se copio";
        botonCopiar.classList.add ("hidden");
        resultText.textContent = "";
    })
})