function codificacion(texto){
    let textonuevo='';
    // Crea array con vocales
    const vocales=['a','e','i','o','u'];
    // Crea dict con nuevos valores
    const valores={
        a: 'ai',
        e:'enter',
        i:'imes',
        o:'ober',
        u:'ufat'
    };
    // recorrer texto letra por letra
    for (let i=0; i<texto.length;i++){
        if(vocales.includes(texto[i])){
            textonuevo+=valores[texto[i]];
        }else{
            textonuevo+=texto[i];
        }
    }
    return textonuevo;
}

let miCodificacion= codificacion('murcielago');
console.log(miCodificacion);