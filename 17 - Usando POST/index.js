//Essa função irá receber o JSON do retorno da API
function renderArticle(articleData) {
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`

    const p = document.createElement('p')
    p.innerHTML = `<strong> Article: ${articleData.id} </strong>`
  
    const title = document.createElement('h3')
    title.classList.add('article-title')
    title.textContent = articleData.title
  
    const content = document.createElement('div')
    content.classList.add('article-content')
    content.innerHTML = articleData.content
  
    const author = document.createElement('div')
    author.classList.add('article-author')
    author.textContent = articleData.author
  
    article.append(p,title, author, content)
    document.querySelector('#articles').appendChild(article)
}

//Metodo GET:
async function fetchArticles() {
    //Ja que o fetch irá retornar uma promise, podemos encadear o then para ja formatar a promisse para json
    const articles = await fetch("http://localhost:3000/articles").then(res => res.json())
    articles.forEach(renderArticle)
}
  
document.addEventListener('DOMContentLoaded', () => {
    fetchArticles()
})

//Metodo POST


const form = document.querySelector('form')

//Adicionando evento de submit no form 
form.addEventListener('submit', async (ev) => {

  //Fazendo a pagina não atualizar
  ev.preventDefault()

  //Selecionando as informações que irá ser salva na API e colocando em um objeto
  const articleData = {
    title: document.querySelector('#title').value,
    author: document.querySelector('#author').value,
    content: document.querySelector('#content').value
  }

  //Configurando o fetch para o metodo POST, ja que por padrão, o fetch vem configurado para o GET
  const response = await fetch('http://localhost:3000/articles', {
    method: 'POST', //definindo o metodo
    headers: {
      'Content-Type': 'application/json' //Informando que irá receber um conteudo tipo json
    },
    body: JSON.stringify(articleData) //Configurando o objeto articleData para texto
  })

  const savedArticle = await response.json() //Configurando a resposta acima para json

  form.reset() //Resetando o formulario

  renderArticle(savedArticle) //Renderizando o artigo novo junto com os antigos

})