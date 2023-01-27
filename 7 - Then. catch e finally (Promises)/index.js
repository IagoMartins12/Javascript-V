/*Quando precisemos executar um código assim que a promise for resolvida, utilizamos o método .then().
Ele nos permite definir justamente a função “resolve” da promise, ou seja, a função que recebe o resultado 
como parâmetro e é chamada quando a promise é bem sucedida:
(O then so irá ser ativado se a promise retornar como resolvido)*/
function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            if (1 + 1 === 2) {
                reject('1 + 1 não é igual a 2')
            } else {
                console.log('Resolvendo a promise...')
                resolve('Resultado')
            }
        }, 3 * 1000)
    })
}

const p = execute()

p.then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
})

/*Para evitarmos o término da aplicação caso a promise retorne um reject, usamos o método .catch(). 
Assim como no .then(), definimos o .catch() passando uma função como parâmetro que será justamente a função 
reject que será chamada em caso de rejeição, ou seja, ela própria tem como parâmetro o motivo da rejeição: 
(O then so irá ser ativado se a promise retornar como rejeitada)*/
p.catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
})

//Obs: tambem podemos encadear o then no catch para agilizar: 
p.then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
})

//Tambem podemos encadear diretamente na chamada da função:
execute().then((result) => {
    console.log(`A promise foi resolvida. O resultado foi: ${result}`)
}).catch((err) => {
    console.log(`A promise foi rejeitada! Motivo: ${err}`)
})

//E por ultimo, temos o finally, que será executado independente do resultado da promise
p.finally(() => {
    console.log('A promsie foi finalizada.')
})