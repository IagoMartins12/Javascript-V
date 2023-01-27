export async function fetchTransaction(){
    console.log('Passou aqui')
    const transaction = await fetch("http://localhost:3000/transactions").then(res => res.json())
    transaction.forEach(renderTransaction)
}

export function renderTransaction(transactionData){
    const div = document.createElement('div')
    div.classList.add('transactions')
    div.id = `div-${transactionData.id}`

    const paragraph = document.createElement('p')
    paragraph.innerHTML = `<strong> Transação ${transactionData.id}</strong>`

    const transactionTitle = document.createElement('p')
    transactionTitle.innerHTML = `Titulo: ${transactionData.title}`

    const transactionValue = document.createElement('p')
    transactionValue.innerHTML = `Valor: ${transactionData.value}`

    if (transactionData.value < 0){
        transactionValue.classList.add('negativeValue')
    } else {
        transactionValue.classList.add('positiveValue')
    }

    div.append(paragraph,transactionTitle,transactionValue)
    document.getElementById('financeResult').appendChild(div)
}