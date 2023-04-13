const inputEncritador = document.getElementById('entrada')
const inputDesencriptador = document.getElementById('entradaTwo')
const boton = document.querySelector('.btn')
const botonTwo = document.querySelector('.newbtn')
const respuesta = document.querySelector('#resultado')


const encriptar = () => {

    if(inputEncritador.value === '' || inputEncritador.value === ' '){
        respuesta.innerHTML = 'No has escrito nada, por favor copie algo'
    }else{
        let valor = inputEncritador.value
        const nuevoMensaje = valor
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('o', 'ober')
        .replaceAll('a', 'ai')
        .replaceAll('u', 'ufat')


        respuesta.innerHTML = `${nuevoMensaje}`
    }
    respuesta.style.background = '#1B264F';
}


const desencriptar = () => {
    if(inputDesencriptador.value === '' || inputDesencriptador === ' '){
        respuesta.innerHTML = "No has escrito nada, por favor copie algo"
    }else{
        let val = inputDesencriptador.value
        const nuevoMensajeDesencriptado = val
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u')

        respuesta.innerHTML = `${nuevoMensajeDesencriptado}`

    }
    respuesta.style.background = '#1B264F';
}



boton.addEventListener('click', encriptar)
botonTwo.addEventListener('click', desencriptar)