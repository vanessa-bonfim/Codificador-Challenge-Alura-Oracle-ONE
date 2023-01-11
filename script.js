
const inputText = document.querySelector('.input-texto');
const messagem = document.querySelector('.mensagem');

function btnEncriptar() {
    const textoEncriptado = encriptar(inputText.value);
}


/* As "chaves" de criptografia que utilizaremos são:
    `A letra "e" é convertida para "enter"`
    `A letra "i" é convertida para "imes"`
    `A letra "a" é convertida para "ai"`
    `A letra "o" é convertida para "ober"`
    `A letra "u" é convertida para "ufat"` */
    
let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
]

function encriptar() {

    


   


}