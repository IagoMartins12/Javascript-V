function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age) {
            resolve(age > 18)
        } else {
            reject(new Error('age is required'))
        }
    })
}

function getAge(birthday) {
    return new Promise((resolve, reject) => {
        if (birthday) {
            const birthYear = new Date(birthday).getFullYear()
            const currentYear = new Date().getFullYear()
            resolve(currentYear - birthYear)
        } else {
            reject(new Error('birthday is required'))
        }
    })
}

//Quando temos uma promises que precisa de outra promise pra agir, podemos encadea-la da seguinte forma:
//No then, ja chamamos a função da promise,e assim em diante 
getAge('1995-09-02').then(age => {
    checkAge(age).then(isOver18 => {
        if (isOver18) {
            console.log('Maior de idade')
        } else {
            console.log('Menor de idade')
        } //E cada then poderá ter um catch tambem 
    }).catch(err => {
        console.log(err.message)
    })
}).catch(err => {
    console.log(err.message)
})

//Porem podemos simplificar o processo acima, dando um return na primeira promise. Ou seja, ele irá retornar
//a proxima promesa: 
getAge('2009-09-02')
	.then(age => {
    return checkAge(age)
	})
	.then(isOver18 => {
    if (isOver18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
	})
	.catch(err => {
    console.log(err.message)
})