console.log('Programa iniciado!')

/*setTimeout é uma função que permite colocar um temporizador, que irá executar o bloco do codigo após o 
temporizador se esgostar. O temporizador é feito atraves de milisegundos.
o setTimeout retorna um id daquele setTimeout, que pode ser usado para colocar o clearTimeout, que irá 
limpar aquele timeout
*/
const timeoutId = setTimeout(() => {
    console.log('2 segundos se passaram desde que o programa foi iniciado.')
}, 2 * 1000) //1000 = milisegundos 2 = segundos. Caso queira em minutos agir assim: 1000 * 60 * (minutos)

clearTimeout(timeoutId)

/*Assim como o setTimeout, o setInterval funciona da mesma maneira, mas ele irá repetir aquele codigo na
determinada quantidade de tempo em que você passar (em milisegundos tambem)
O setInterval tambem retorna um id, que pode ser usado para colocar o clearInterval, que irá parar aquele
codigo quando der aquele determinado quantidade de tempo
*/
let seconds = 0
const intervalId = setInterval(() => {
    seconds += 3
    console.log(`Se passaram ${seconds} segundos.`)
    if (seconds > 10) {
        clearInterval(intervalId)
        console.log('Tempo esgotado! Encerrando...')
    }
}, 3 * 1000)