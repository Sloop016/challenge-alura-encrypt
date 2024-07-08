let textoSinEncriptar = '';
let textoEncriptado = '';
let textoADesencriptar = '';
let textoAMostrar= '';
const caracterInvalido = /[^a-zA-Z0-9ñÑ\s]/g;
const caracterEncriptado = /(enter|imes|ai|ober|ufat)/g;
const errorCharVacio = '¡No indicaste el texto, por favor colócalo!'
const errorMayusInvChar = '¡Recuerda no poner mayúsculas ni caracteres especiales!';
const errorNoEncrypt = 'Este texto no está encriptado. ¡Por favor coloca un texto encriptado!';

function containsUppercase(str) {
    return /[A-Z]/.test(str);
  }

function containsInvalidChar(caracteres){
    return caracterInvalido.test(caracteres)
  }

function validaEncriptacion(caracteres) {
    return caracterEncriptado.test(caracteres)
}

function mostrarTexto(texto) {
    textoAMostrar = texto
document.getElementById("contenidoEncriptado").innerHTML = textoAMostrar;
}

function encriptarTexto() {

    textoSinEncriptar = document.getElementById("textoAEncriptar").value;
    if (textoSinEncriptar.length == '' ) {
        document.getElementById("textoAEncriptar").placeholder = errorCharVacio;
    }

    else {

        if (containsUppercase(textoSinEncriptar) == true || containsInvalidChar(textoSinEncriptar) == true) {
            document.getElementById("textoAEncriptar").value = ''
            document.getElementById("textoAEncriptar").placeholder = errorMayusInvChar;
        }

        else {
//Remplazos de texto
    textoSinEncriptar = textoSinEncriptar.replaceAll("e","enter")
    textoSinEncriptar = textoSinEncriptar.replaceAll("i","imes")
    textoSinEncriptar = textoSinEncriptar.replaceAll("a","ai")
    textoSinEncriptar = textoSinEncriptar.replaceAll("o","ober")
    textoSinEncriptar = textoSinEncriptar.replaceAll("u","ufat")

    mostrarTexto(textoSinEncriptar);

    document.getElementById("contenidoCaja").style.display = "none"
    document.getElementById("verContenidoEncriptado").style.display ="block"

    }
}
}

function desencriptarTexto() {

    textoADesencriptar = document.getElementById("textoAEncriptar").value;

    if (textoADesencriptar.length == '') {
        
        document.getElementById("textoAEncriptar").placeholder = errorCharVacio;
    }

    else {

        if (validaEncriptacion(textoADesencriptar) == false) {

            document.getElementById("textoAEncriptar").value = ''
            document.getElementById("textoAEncriptar").placeholder = errorNoEncrypt;
        }

        else {

    textoADesencriptar = textoADesencriptar.replaceAll("enter","e")
    textoADesencriptar = textoADesencriptar.replaceAll("imes","i")
    textoADesencriptar = textoADesencriptar.replaceAll("ai","a")
    textoADesencriptar = textoADesencriptar.replaceAll("ober","o")
    textoADesencriptar = textoADesencriptar.replaceAll("ufat","u")

    mostrarTexto(textoADesencriptar);
    document.getElementById("contenidoCaja").style.display = "none"
    document.getElementById("verContenidoEncriptado").style.display ="block"
}
}
}

function copiarTextoEncriptado() {
    
    console.log("Se ve el evento onclick")

    navigator.clipboard.writeText(textoAMostrar)
    .then(() => {
        console.log('Contenido copiado al portapapeles');
      },() => {
        console.error('Error al copiar');
      });

}
