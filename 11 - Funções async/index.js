/*Funções async são uma forma mais conveniente de se trabalhar com promises no javascript moderno. Elas 
permitem criar funções que automaticamente retornam uma promise, sem que nós precisemos instanciá-la: */
async function asyncSum(a, b) {
    return a + b
}

//Da outra maneira: 
function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

/*Quando utilizamos a async function, o javascript ja entende que iremos retornar uma Promise. Então não se 
torna necessario instancializarmos ela na função.*/

//Para rejeitarmos uma promise dentro de uma async function, podemos utilizar o metodo Reject da Promise.

//Exemplo de async function: 
async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

//Exemplo de função normal: 
function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}
