/*Um recurso muito útil das funções async é o await. Ele nos permite esperar pela execução de uma promise
dentro de uma função async, ou seja, se nossa função async depende de uma outra promise, podemos esperar pela 
sua execução de forma “limpa” sem utilizar o .then(). Para usar o await basta colocá-lo antes da chamada da 
função assíncrona:*/

async function asyncSum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return a + b
}

//Neste caso, a função irá travar e esperar o retorno da asyncSum. 
async function execute() {
    const sumResult = await asyncSum(50, 33)
	console.log(sumResult)
}

//Maneira convencional: 
async function execute() {
    asyncSum(50,33).then((result) => {
        console.log(result)
    })
}

//Para tratarmos de rejeição de promises quando estamos utilizando o await, precisamos usar o bloco try catch:
async function execute() {
    try {
        const sumResult = await asyncSum(50, 33)
        console.log(sumResult)
    } catch (err) {
        console.log(err)
    }
}

