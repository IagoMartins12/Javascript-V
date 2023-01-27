//Caso a gente tenha um conjunto de funções assincronas, e quisermos executa-las em conjunto(Ou seja, o 
//programa so irá funcionar se todas as funções forem resolvidas.) Podemos utilizar o Promise.all
function asyncSum(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a + b)
        }
    })
}

function asyncSubtract(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(a - b)
        }
    })
}

const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, null)

/*Para executarmos várias promises de forma conjunta podemos usar o Promise.all(). Com ele podemos executar um
array de promises e tratá-las como uma única promise, que só irá resolver se nenhuma for rejeitada. Caso 
qualquer uma seja rejeitada, o Promise.all() irá falhar. Usar o Promise.all() é bem simples:*/
Promise.all([sumResult, subtractResult]).then(results => {
    console.log(results)
}).catch(err => {
    console.log(err)
})

//Esse metodo irá retornar um array de promises


const numbers = [4, 9, 5, 13, 77]

function asyncSquare(x) {
    return new Promise((resolve, reject) => {
        resolve(x * x)
    })
}

/*Um outro exemplo interessante onde podemos utilizar o Promise.all() é quando trabalhamos com funções 
assíncronas em um .map(), que retorna um array. Nesse caso ele retornará um array de promises, que poderão 
ser executadas em conjunto:*/
Promise.all(numbers.map(number => asyncSquare(number))).then(squares => {
    console.log(squares)
})