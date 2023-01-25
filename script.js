/**
 * 
 */
const inputText = document.querySelector('.input-texto');
const messagem = document.querySelector('.mensagem');
const nenhumaMensg = document.querySelector('.nenhumaMensg');
const botaoCopiar = document.querySelector('#div-aparece');


function btnEncriptar() {   
    
        if (!inputText.value == "") {
            messagem.style.backgroundImage = 'none';
            botaoCopiar.style.display = 'block';
            nenhumaMensg.style.display = 'none';
        } else {
            messagem.style.backgroundImage = '';
            botaoCopiar.style.display = 'none';
            nenhumaMensg.style.display = 'block';
        }    
    
    const textoEncriptado = encriptar(inputText.value);
    messagem.value = textoEncriptado;
    inputText.value = "";
}

function btnDesencriptar() {

    if (!inputText.value == "") {
        messagem.style.backgroundImage = 'none';
        botaoCopiar.style.display = 'block';
        nenhumaMensg.style.display = 'none';
    } else {
        messagem.style.backgroundImage = '';
        botaoCopiar.style.display = 'none';
        nenhumaMensg.style.display = 'block';
    }   

    const textoDesencriptado = desencriptar(inputText.value);
    messagem.value = textoDesencriptado;
    inputText.value = "";
    
}

function copiar() {
    messagem.select();
    messagem.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(messagem.value);
    alert("O TEXTO: " + messagem.value + " FOI COPIADO!");
}

/* As "chaves" de criptografia que utilizaremos são:
    `A letra "e" é convertida para "enter"`
    `A letra "i" é convertida para "imes"`
    `A letra "a" é convertida para "ai"`
    `A letra "o" é convertida para "ober"`
    `A letra "u" é convertida para "ufat"` */
    


function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {        
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }        
    }
    return stringEncriptada;
}

 function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {

        if(stringDesencriptada.includes(matrizCodigo[i][1])){  

        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }
    }

    return stringDesencriptada;
}