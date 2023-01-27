function imc(peso, altura) {
    return new Promise((resolve, reject) => {
        console.log('A promise está sendo executada...')
        if (isNaN(peso) || isNaN(altura)){
            reject("Peso e altura devem ser numeros!")
        } else {
            resolve(peso / altura * altura)
        }
    })
}

function calculateImc(peso, altura){
    imc(peso, altura).then((resolve) =>{
        if (resolve < 18.5) console.log('Situação: MAGREZA')
        else if (resolve < 25) console.log('Situação: NORMAL')
        else if (resolve < 30) console.log('Situação: SOBREPESO')
        else if (resolve < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        console.log ("Processo concluido")
    })
}

calculateImc(23, 17,3)