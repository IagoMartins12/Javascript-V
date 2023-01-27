/*As promises são muito usadas no javascript assincrono. Ela é um objeto que é instanciado através da classe 
Promise e recebe uma função como parâmetro. Ela serve para não travar o seu codigo enquanto um processo 
estiver sendo executado.
Essa função é executada quando a promise é criada, porém sem bloquear a execução do código:*/
const p = new Promise(() => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        console.log('Resolvendo a promise...')
    }, 3 * 1000)
})

console.log(p)

/*uma promise possui diferentes estados, que são: 
pendente (estado padrão)
rejeitada
resolvida (ou cumprida)
A promise ficará em estado pendente até que seja resolvida utilizando o primeiro parâmetro da função usada na 
sua construção. Esse primeiro parâmetro é uma função que “resolve” a promise e passa adiante o valor do 
resultado:*/
const e = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        console.log('Resolvendo a promise...')
        resolve('Resultado') //No resolve, você pode passar qualquer parametro. Uma string, variavel ou boolean
    }, 3 * 1000)
})

/*Também podemos rejeitar a promise caso queiramos indicar que algo deu errado: 
Obs: Repare que nesse caso a rejeição da promise é como um erro no código, que se não for tratado adequadamente
irá resultar no término da aplicação.*/
const a = new Promise((resolve, reject) => {
    console.log('A promise está sendo executada.')
    setTimeout(() => {
        if (1 + 1 === 2) {
            reject("Algo deu errado!")
        }
        console.log('Resolvendo a promise...')
        resolve('Resultado')
    }, 3 * 1000)
})

/*Por fim, a prática comum ao usar as promises é retorná-las no final de uma função, assim elas serão 
executadas quando a função for chamada:*/
function execute() {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada.')
        setTimeout(() => {
            console.log('Resolvendo a promise...')
            resolve('Resultado')
        }, 3 * 1000)
    })
}

const w = execute()
console.log(w)
