
async function calculateImc(peso, altura){
    try{
        console.log (`Calculando o ${peso} e ${altura}...`)

        const imcResult = await imc (peso, altura)

        console.log (`O resultado do imc foi: ${imcResult}`)
        if (imcResult < 18.5) console.log('Situação: MAGREZA')
        else if (imcResult < 25) console.log('Situação: NORMAL')
        else if (imcResult < 30) console.log('Situação: SOBREPESO')
        else if (imcResult < 40) console.log('Situação: OBESIDADE')
        else console.log('Situação: OBESIDADE GRAVE')
    } catch (err){
        console.log(err)
    }
}

async function imc(peso, altura){
    console.log('A promise está sendo executada...')
    if (typeof peso  !== 'number' || typeof altura !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return peso / altura * altura
}

calculateImc(76, 17,5)