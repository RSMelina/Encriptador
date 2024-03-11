const mensajeACambiar= document.querySelector("#TextoACodificar");
const mensaje_cambiado= document.querySelector("#mensaje_cambiado");
const container = document.querySelector('.PreCodificado');
const copiar=document.querySelector('.copiar');
const textoAcopiar= document.querySelector('.mensaje');
copiar.style.visibility='hidden';

let textonuevo='';

// Crea array con vocales
const vocales=['a','e','i','o','u'];
const valores={
    a: 'ai',
    e:'enter',
    i:'imes',
    o:'ober',
    u:'ufat'
};

const matriz_valores=[
    ['a', 'ai'],
    ['e', 'enter'],
    ['i', 'imes'],
    ['o', 'ober'],
    ['u', 'ufat']
]

function TextoIngresado(){
    const texto=codificacion(mensajeACambiar.value);
    mensaje_cambiado.value=texto;
    mensajeACambiar.value='';
    mensaje_cambiado.style.backgroundImage ='none';
    container.style.display='none';
    copiar.style.visibility='visible';

}

function codificacion(fraseAEncriptar){
    fraseAEncriptar=fraseAEncriptar.toLowerCase();

   // recorrer texto letra por letra
    for (let i=0; i<fraseAEncriptar.length;i++){
        if(vocales.includes(fraseAEncriptar[i])){
            textonuevo+=valores[fraseAEncriptar[i]];
        }else{
            textonuevo+=fraseAEncriptar[i];
        }
    }
    return textonuevo;
}

function TextoIngresadoD(){
    const texto=decodificacion(mensajeACambiar.value);
    mensaje_cambiado.value=texto;
    mensajeACambiar.value='';
    mensaje_cambiado.style.backgroundImage ='none';
    copiar.style.visibility='visible';
}

function decodificacion(fraseADesncriptar){
    fraseADesncriptar=fraseADesncriptar.toLowerCase()
    // recorrer texto letra por letra
     for (let i=0; i<matriz_valores.length;i++){
         if(fraseADesncriptar.includes(matriz_valores[i][1])){
            fraseADesncriptar=fraseADesncriptar.replaceAll(
                matriz_valores[i][1],
                matriz_valores[i][0]
            )
         }
     }
     return fraseADesncriptar;
 }

 function copiarTexto(){
    navigator.clipboard.writeText(textoAcopiar.value)
 }
