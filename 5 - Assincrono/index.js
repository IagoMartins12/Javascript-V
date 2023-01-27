//Codigo sincrono:
function step02() {
    console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 03')

//Codigo assincrono: 
console.log('Passo 04')
setTimeout(() => {
    console.log('Passo 05')
}, 2 * 1000)
console.log('Passo 06')

/*
No codigo sincrono, a execução das linhas do codigo é linear. Ou seja, ele vai executando linha por linha. 
então se no exemplo do codigo sincrono, o passo 02 demorar pra ser executado, o passo 03 vai demorar tambem
por que o programa irá esperar o passo 02 ser executado para executar o passo 03
Mas no codigo assincrono, isso não irá acontecer. Se o passo 05 demorar pra ser executado, o programa irá 
executar o passo 06 enquanto o passo 05 não executar*/