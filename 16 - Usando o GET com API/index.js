/*vamos criar uma função async que será responsável para fazer a requisição da API
Obs.: é importante que ela seja async pois a função que faz a requisição HTTP retorna uma promise, então 
será mais fácil trabalhar utilizando a sintaxe async/await.*/

/*função fetch(): ela faz para nós a requisição HTTP e devolve a promise de uma resposta HTTP, portanto
iremos chamá-la e usar o await para esperar pela resposta. Também passaremos como parâmetro a url que 
estamos requisitando*/

/*Resposta do fetch(): o metodo fetch() cja possui método especial chamado json(). Esse método serve especificamente 
para obter o conteúdo json da resposta de forma que pode ser manipulado. Ele também retorna uma promise 
então também utilizaremos o await*/

function createCountryCard(country) {
    const card = document.createElement('div')
    card.classList.add('country')

    const countryName = country.name.common
    const name = document.createElement('h2')
    name.textContent = countryName

    const flag = document.createElement('img')
    flag.src = country.flags.svg
    flag.alt = countryName

    const continentName = document.createElement('p')
    continentName.textContent = `Continente: ${country.continents[0]}`

    const br = document.createElement('br')
    card.append(name, flag,continentName)
    document.querySelector('#countries').append(card)
}

async function getCountries() {

    //Usamos o fetch para receber o retorno da api 
    const response = await fetch('https://restcountries.com/v3.1/all')
    //Logo em seguida, convertemos a resposta para json, para facilitar na hora de entender o js
    const countries = await response.json()

    console.log(countries)

    //Chamando a função para renderizar o card de cada pais retornado no array
    countries.forEach(createCountryCard)
}

getCountries()