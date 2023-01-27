/*Try, catch e finnaly são usados para tratamentos de erro. Ou seja, quando ocorre algum erro no programa
mas não queremos que ele pare. Tambem usado para localizarmos melhor o erro em questão

throw new Error: Irá lançar o erro no nosso sistema
try: Irá verificar o bloco de codigo para ver se tem algum erro na execução
catch: irá capturar o erro que pode ocorrer no bloco try
catch(error): é o parametro definido para ser o erro do bloco do try
finally: é o bloco que será executado, independe do sistema ter um erro ou não. Ou seja, mesmo se não cair no 
'catch' o finally será executado
*/

function sum(a, b) {
    const firstNumber = Number(a)
    const secondNumber = Number(b)

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        throw new Error('arguments must be two numbers')
    }

    return firstNumber + secondNumber
}

try {
    console.log(sum(2, 9))
    console.log(sum(true, 14))
    // console.log(sum(undefined, 22))
    console.log(sum(18, "0"))
    console.log(sum(39, null))
    // console.log(sum(13, "zero"))
} catch (error) {
    console.log("An error ocurred!")
    console.log(error.message)
} finally {
    console.log('Calculations finished.')
}