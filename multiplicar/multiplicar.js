// Requireds

const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        
        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ${limite} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
          data += `El numero ${base} por ${i} es igual a ${i * base}`;
          data += '\n';
        }

        console.log(data);
        

    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ${limite} no es un número`);
            return;
        }

        let data = '';
        
        for (let i = 1; i <= limite; i++) {
          data += `El numero ${base} por ${i} es igual a ${i * base}`;
          data += '\n';
        }
        
        fs.writeFile(`./tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) return reject(err);
            resolve(`tabla-${base}-limite-${limite}.txt`);
        });

    })
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}
